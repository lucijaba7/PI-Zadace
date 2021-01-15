<template>
  <div class="about">
    <h1>This is a signup page</h1>

    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              v-model="username"
              @blur="checkEmail"
              class="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />

            <i class="fa fa-check"></i>
            <i class="fa fa-exclamation"></i>
            <small>
              Error message.
            </small>
            <br />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              v-model="password"
              @blur="checkPassword"
              class="form-control password"
              id="password"
              placeholder="Password"
            />
            <i class="fa fa-check"></i>
            <i class="fa fa-exclamation"></i>
            <small style="float:left">
              Error message.
            </small>
            <br />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword2">Repeat password</label>
            <input
              type="password"
              v-model="passwordRepeat"
              @blur="checkPasswordRepeat"
              class="form-control"
              id="passwordRepeat"
              placeholder="Password"
            />
            <i class="fa fa-check"></i>
            <i class="fa fa-exclamation"></i>
            <small>
              Error message.
            </small>
            <br />
          </div>
          <button type="button" @click="signup" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase.js";

function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");

  small.innerText = message;
  formGroup.className = "form-group error";
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;

  formGroup.className = "form-group success";
}

export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    checkEmail() {
      if (this.username === "") {
        setErrorFor(username, "Email cannot be blank");
      } else if (!this.username.includes("@") || !this.username.includes(".")) {
        setErrorFor(username, "Email formulation wrong.");
      } else {
        setSuccessFor(username);
      }
    },
    checkPassword() {
      if (this.password.length < 6) {
        setErrorFor(password, "Password must be at least 6 characters");
      } else {
        setSuccessFor(password);
      }
    },
    checkPasswordRepeat() {
      if (this.password != this.passwordRepeat) {
        setErrorFor(passwordRepeat, "Passwords don't match");
      } else {
        setSuccessFor(passwordRepeat);
      }
    },

    signup() {
      if (
        username.parentElement.className.includes("success") &&
        password.parentElement.className.includes("success") &&
        passwordRepeat.parentElement.className.includes("success")
      ) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.username, this.password)
          .then(function() {
            console.log("Uspješna registracija");
          })
          .catch(function(error) {
            console.error("Došlo je do greške", error);
          });
      } else alert("Check forms");
    },
  },
};
</script>
<style>
small {
  position: absolute;
  bottom: 0;
  left: 0;
  visibility: hidden;
}
.form-group {
  position: relative;
  margin: 0;
}
.form-group i {
  position: absolute;
  top: 43px;
  right: 15px;
  visibility: hidden;
}
.form-group.success input {
  border-width: 2px;
  border-color: #2ecc71;
}

.form-group.success i.fa-check {
  color: #2ecc71;
  visibility: visible;
}

.form-group.error input {
  border-width: 2px;
  border-color: #e74c3c;
}

.form-group.error i.fa-exclamation {
  color: #e74c3c;
  visibility: visible;
}

.form-group.error small {
  color: #e74c3c;

  visibility: visible;
}
</style>
