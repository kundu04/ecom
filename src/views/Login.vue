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

    <h2 style="text-align:center">Login</h2>
    <div class="error" v-if="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="text" placeholder="Email" v-model="email"/>
      </div>
      <div class="password">
        <input type="password" placeholder="Password" v-model="password"/>
      </div>
      <button>Login</button>
    </form>
    <p>
    Not registered? <router-link to="/register">Register</router-link> here.
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
          .signInWithEmailAndPassword(this.email, this.password)
          .then(data => {
            console.log(data);
            this.$router.replace({name: "dashboard"});
          })
          .catch(error => {
            this.error = error;
          });
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}



button {
  width: 400px;
  height: 75px;
  font-size: 100%;
}





</style>
