import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

var firebaseConfig = {
    apiKey: "AIzaSyAaG6-B3pLLOKIUMN305lRJOr9NuSURIok",
    authDomain: "ecom-project-ed459.firebaseapp.com",
    projectId: "ecom-project-ed459",
    storageBucket: "ecom-project-ed459.appspot.com",
    messagingSenderId: "554056035271",
    appId: "1:554056035271:web:93b559044178d6622ac7e2",
    measurementId: "G-T0CK12QYM1"
  };

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
    console.log("user", user);
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount("#app");
    }
});
