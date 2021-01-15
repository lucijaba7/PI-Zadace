<template>
  <div class="row">
    <div class="col-8">
      <div v-if="newPost" class="alert">
        <span
          class="closebtn"
          onclick="this.parentElement.style.display='none';"
          >&times;</span
        >
        <strong>Success</strong> Your post is now active!
      </div>
      <instagram-card
        v-for="card in filteredCards"
        :key="card.id"
        :info="card"
      />
    </div>
    <div class="col-4 text-center">
      <div style="font-weight: bold">Objavi sliku!<br /></div>
      <form @submit.prevent="postNewImage" class="form-inline mb-5">
        <label for="imageUrl">Image URL:</label>
        <input
          v-model="newImageUrl"
          type="text"
          class="form-control mt-2 mb-4"
          placeholder="Enter the image URL"
          id="imageUrl"
        />
        <label for="imageDescription">Description:</label>
        <input
          v-model="newImageDescription"
          type="text"
          class="form-control mt-2 mb-4"
          placeholder="Enter the image description"
          id="imageDescription"
        />
        <button type="submit" class="btn btn-primary m-auto">
          Post image
        </button>
      </form>
      <div style="font-weight: bold">Vježba</div>
      <br />
      <input
        v-model="store.ime"
        class="form-control mr-sm-2"
        placeholder="Ime"
        type="search"
        aria-label="Name"
      />
      <br />
      <input
        v-model="store.prezime"
        class="form-control mr-sm-2"
        placeholder="Prezime"
        type="search"
        aria-label="Surname"
      />
      <br />
      <div>{{ ImePrezime }}</div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import InstagramCard from "@/components/InstagramCard.vue";
import store from "@/store.js";
import { db } from "@/firebase.js";

//... API/Firebase -> sve kartice -> cards
// cards = [
//   {
//     user: "ivo222",
//     title: "Slika prva. Čovjek i laptop!",
//     time: "an hour ago",
//     url: "https://picsum.photos/id/1/400/400",
//   },
//   {
//     user: "ana_123",
//     title: "Slika druga. Samo laptop.",
//     time: "2 days ago",
//     url: "https://picsum.photos/id/2/400/400",
//   },
//   {
//     user: "evan88",
//     title: "Treća slika. Mobitel, ali iza je laptop.",
//     time: "23 days ago",
//     url: "https://picsum.photos/id/3/400/400",
//   },
// ];
export default {
  name: "home",
  data() {
    //isto sto i ''data: function()''
    return {
      //... ključ: vrijednost
      cards: [], //moze cards:cards
      store,
      newImageDescription: "",
      newImageUrl: "",
      newPost: false,
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      console.log("Firebase dohvat..");
      db.collection("posts")
        .orderBy("posted_at", "desc")
        .limit(3)
        .get()
        .then((results) => {
          this.cards = [];
          results.forEach((doc) => {
            let data = doc.data();
            this.cards.push({
              id: doc.id,
              user: data.email,
              url: data.url,
              time: data.posted_at,
              description: data.desc,
            });
          });
        });
    },
    postNewImage() {
      const imgUrl = this.newImageUrl;
      const imageDescription = this.newImageDescription;
      if (imgUrl == "" || imageDescription == "") {
        alert("Sva polja moraju biti ispunjena!");
      } else {
        db.collection("posts")
          .add({
            url: imgUrl,
            desc: imageDescription,
            email: store.currentUser,
            posted_at: Date.now(),
          })
          .then((doc) => {
            console.log("Spremljeno", doc);
            this.newImageDescription = "";
            this.newImageUrl = "";
            this.newPost = true;
            this.getPosts();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  computed: {
    filteredCards() {
      return this.cards.filter(
        (card) =>
          card.description.includes(this.store.searchTerm) ||
          card.user.includes(this.store.searchTerm)
      );
    },
    ImePrezime() {
      return store.ime + " " + store.prezime;
    },
  },
  components: {
    InstagramCard,
  },
};
</script>

<style>
.alert {
  padding: 20px;
  background-color: green;
  color: white;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>
