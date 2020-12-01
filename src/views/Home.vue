<template>
  <div class="row">
    <div class="col-8">
      <instagram-card
        v-for="card in filteredCards"
        :key="card.url"
        :info="card"
      />
    </div>
    <div class="col-4 text-center">
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

let cards = [];

//... API/Firebase -> sve kartice -> cards

cards = [
  {
    user: "ivo222",
    title: "Slika prva. Čovjek i laptop!",
    time: "an hour ago",
    url: "https://picsum.photos/id/1/400/400",
  },
  {
    user: "ana_123",
    title: "Slika druga. Samo laptop.",
    time: "2 days ago",
    url: "https://picsum.photos/id/2/400/400",
  },
  {
    user: "evan88",
    title: "Treća slika. Mobitel, ali iza je laptop.",
    time: "23 days ago",
    url: "https://picsum.photos/id/3/400/400",
  },
];

export default {
  name: "home",
  data() {
    //isto sto i ''data: function()''
    return {
      //... ključ: vrijednost
      cards, //moze cards:cards
      store,
    };
  },
  computed: {
    filteredCards() {
      return this.cards.filter(
        (card) =>
          card.title.includes(this.store.searchTerm) ||
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
