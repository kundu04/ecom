<template>
  <div>
    <!--NAV BAR-->
    <header>
      <p><router-link to="/">E-COM</router-link></p>
      <nav>
        <ul class="navlinks">
          <li>
            <router-link to="/login">Login</router-link>
          </li>
          
          <li>
            <router-link to="/register">Registration</router-link>
          </li>
        </ul>
      </nav>
      
    </header>
    <!--NAV BAR END-->


    <form @submit.prevent="pressed">
      <h2 style="text-align:center">Register</h2>
      <div class="error" v-if="error">{{ error.message }}</div>
      <div class="email">
        <input type="email" v-model="email" placeholder="Email"/>
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="Password"/>
      </div>
      <button type="submit">Register</button>
    </form>
    <p>
    Allready registered? <router-link to="/login">Login</router-link> here.
    </p>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            console.log("here");
            this.$router.replace({name: "dashboard"});
          })
          .catch(error => (this.error = error));
    }
  }
};
</script>

<style lang="scss" scoped>

button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}



</style>
