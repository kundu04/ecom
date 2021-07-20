<template>
  <div>
    <!--NAV BAR-->
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
    <!--NAV BAR END-->

    <div>
      <form @submit.prevent="save">
        <h2 style="text-align:center">{{ title }}</h2>
        <div class="error" v-if="error">{{ error }}</div>
        <div class="success" v-if="success">{{ success }}</div>
        <div class="name">
          <input type="text" v-model="product.name" placeholder="Name" required/>
        </div>
        <div class="description">
          <input type="text" v-model="product.description" placeholder="Description" required/>
        </div>
        <div class="price">
          <input type="number" v-model="product.price" placeholder="Price" required/>
        </div>
        <div class="image" >
          <img :src="product.image" class="uploading-image" style="height: 150px;" alt=""  />
        </div>
        <div class="image">
          <input type="file" accept="image/*" @change=uploadImage>
        </div>
        <button type="submit" style="width: 400px; height: 75px;">Save</button>
      </form>
    </div>
  </div>
</template>


<script>
import * as firebase from "firebase";

const axios = require('axios');
export default {
  data() {
    return {
      key: null,
      title: 'Add Product',
      product: {
        key: "",
        name: "",
        description: "",
        price: "",
        image: ""
      },
      products: [],
      error: "",
      success: ""
    };
  },
  created() {
    this.key = this.$route.query.key;
    if (typeof this.key != 'undefined' && this.key != null && this.key !== '') {
      console.log('key :: ', this.key);
      this.title = 'Update product';
      this.getProduct(this.key);
    }
  },
  methods: {
    uploadImage(e){
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e =>{
        this.product.image = e.target.result;
        console.log(this.product.image);
      };
    },
    save() {
      console.log(this.product);
      let url = '';
      if (typeof this.key != 'undefined' && this.key != null && this.key !== '') {
        url = 'https://ecom-project-ed459-default-rtdb.firebaseio.com/product/' + this.key + '.json';
        axios.put(url, this.product).then((response) => {
          console.log(response)
          this.product = {
            key: "",
            name: "",
            description: "",
            price: ""
          }
          this.success = 'Product updated successfully';
          this.error = "";
        }).catch((error) => {
          console.log(error)
          this.success = "";
          this.error = error.message;
        })
      } else {
        url = 'https://ecom-project-ed459-default-rtdb.firebaseio.com/product.json';
        axios.post(url, this.product).then((response) => {
          console.log(response)
          this.product = {
            key: "",
            name: "",
            description: "",
            price: ""
          }
          this.success = 'Product added successfully';
          this.error = "";
        }).catch((error) => {
          console.log(error)
          this.success = "";
          this.error = error.message;
        })
      }

    },
    getProduct(key) {
      axios.get('https://ecom-project-ed459-default-rtdb.firebaseio.com/product/' + key + '.json').then((response) => {
        this.product = {
          key: key,
          name: response.data.name,
          description: response.data.description,
          price: response.data.price,
          image: response.data.image
        };
        console.log(this.product)
      })
    },
    signOut() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.push({path: '/'});
          });
    }
  }
};
</script>

<style lang="scss" scoped>





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
