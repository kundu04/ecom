<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {

  data() {
    return {
      blah: "erik"
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding: 0;
  margin: 0
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
//header start
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10%;
  background-color: dimgray;
  
}

.navlinks {
  list-style: none;

  li {
    display: inline-block;
    padding: 0px 20px;
    

    a {
      transition: all 0.3s ease 0s;
      text-decoration: none;
      &:hover {
        background-color: white;
        padding: 25px 14px; 
        color: #0088A9;
      }
    }
  }
}

.sign-out-btn {
  background-color: rgb(245, 15, 15);

  &:hover {
    background-color: rgba(236, 6, 6, 0.8);
  }

  color: white;
}
//header end

//input start
input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}

.error {
  color: red;
}

.success {
  color: green;
}
//input end

/*PRODUCT START*/
.wrapper {
  height: 420px;
  width: 654px;
  margin: 50px auto;
  border-radius: 7px 7px 7px 7px;
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
}

.product-img {
  float: left;
  height: 410px;
  width: 317px;
}

.product-img img {
  border-radius: 7px 0 0 7px;
}

.product-info {
  float: left;
  height: 420px;
  width: 327px;
  border-radius: 0 7px 10px 7px;
  background-color: #ffffff;
}

.product-text {
  height: 250px;
  width: 327px;
}

.product-text h1 {
  margin: 0 0 0 38px;
  padding-top: 52px;
  font-size: 34px;
  color: #474747;
}

.product-text h1,
.product-price-btn p {
  font-family: 'Bentham', serif;
}

.product-text h2 {
  margin: 0 0 47px 38px;
  font-size: 13px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #d2d2d2;
  letter-spacing: 0.2em;
}

.product-text p {
  height: 125px;
  margin: 0 0 0 38px;
  padding-right: 15px;
  font-family: 'Playfair Display', serif;
  color: #8d8d8d;
  line-height: 1.7em;
  font-size: 15px;
  font-weight: lighter;
  overflow: hidden;
}

.product-price {
  display: inline-block;
  height: 50px;
  font-family: 'Suranna', serif;
  font-size: 34px;
  margin: 0 !important;
  padding-left: 25px !important;
}

.product-price-btn button {
  float: right;
  display: inline-block;
  height: 50px;
  width: 200px;
  margin: 0 50px 0 16px;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #9cebd5;
  cursor: pointer;
  outline: none;
}

.product-price-btn button:hover {
  background-color: #79b0a1;
}
/*PRODUCT END*/
</style>
