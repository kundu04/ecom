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


    <h2 style="text-align:center">Products</h2>
    <div v-for="item in products" :key="item.id">
      <!--      <div class="card">
              <h1>{{ item.name }}</h1>
              <p class="price">${{ item.price }}</p>
              <p>{{ item.description }}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>-->

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
              <button type="button">buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  data() {
    return {
      product: {
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
    getProducts() {
      axios.get('https://ecom-project-ed459-default-rtdb.firebaseio.com/product.json').then((response) => {

        for (let key in response.data) {
          let product = response.data[key];
          this.products.push({
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image
          });
        }
        console.log('products :: ', this.products)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  background-color: #fdf1ec !important;
}



</style>
