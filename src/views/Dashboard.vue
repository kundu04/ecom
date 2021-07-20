<template>
  <div>

    <header>
       <p><router-link to="/dashboard">Dashboard</router-link></p>
      <nav>
        <ul class="navlinks">
          
          <li>
            <router-link to="/manage-product">Add Product</router-link>
          </li>
        </ul>
      </nav>
      <button class="sign-out-btn" @click="signOut">Sign Out</button>

    </header>

    <div>
      <h2 style="text-align:center">Products</h2>
      <div v-for="item in products" :key="item.id">
        <div class="wrapper">
          <div class="product-img">
            <img :src="item.image" height="420" width="327">
          </div>
          <div class="product-info">
            <div class="product-text">
              <h1>{{ item.name }}</h1>
              <p>{{ item.description }}</p>
            </div>
            <div>
              <div>
                <p class="product-price">{{ item.price }}$</p>
              </div>
              <div class="product-price-btn">
                <button class="edit-btn" type="button" v-on:click="editProduct(item)">edit</button>
                <button class="delete-btn" type="button" v-on:click="deleteProduct(item)">delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>


</template>

<script>
import * as firebase from "firebase";

const axios = require('axios');
export default {
  data() {
    return {
      product: {
        key: "",
        name: "",
        description: "",
        price: "",
        image: ""
      },
      products: [],
      error: ""
    };
  },
  beforeMount() {
    this.getProducts();
  },
  methods: {
    save() {
      console.log(this.product);
      axios.post('https://ecom-project-ed459-default-rtdb.firebaseio.com/product.json', this.product).then((response) => {
        console.log(response.data)
        this.getProducts();
      })
    },
    getProducts() {
      axios.get('https://ecom-project-ed459-default-rtdb.firebaseio.com/product.json').then((response) => {
        this.products = [];
        for (let key in response.data) {
          let product = response.data[key];
          this.products.push({
            key: key,
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image
          });
        }
        console.log('products :: ', this.products)
      })
    },
    editProduct(product) {
      console.log("EDIT :: ", product);
      this.$router.push({path: '/manage-product', query: {key: product.key}});
    },
    deleteProduct(product) {
      console.log("DELETE :: ", product);
      axios.delete("https://ecom-project-ed459-default-rtdb.firebaseio.com/product/" + product.key + ".json").then((response) => {
        this.getProducts();
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    },
    signOut() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace({name: "login"});
          });
    }
  }
};
</script>

<style lang="scss" scoped>

.card {
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);
  max-width: 400px;
  margin: auto;
  margin-bottom: 50px;
  text-align: center;
  font-family: arial;
  background-color: #f5eeee;
  padding: 10px;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);
}

.card button:hover {
  opacity: 0.7;
}

.delete-btn {
  background-color: #842323 !important;
  color: white !important;
  border-radius: 0 !important;
}

.edit-btn {
  background-color: #e59e23 !important;
  color: white !important;
  border-radius: 0 !important;
}



button {
  padding: 9px 25px;
  background-color: rgba(0, 135, 169, 1);
  border: none;
  border-radius: 5em;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: rgba(0, 135, 169, 0.8);
  }

}





</style>
