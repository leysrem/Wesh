<template>
  <div id="app">
    <navBar />
    <Product />
</div>

    
    <!-- <router-view></router-view> --> 
  
</template>

<script>
import navBar from './components/navBar.vue'
// import Sign from './components/Sign.vue'
import Product from './components/Product.vue'
//import Cart from './components/Cart.vue'
// import productSheet from './components/productSheet.vue'
// import Category from './components/Category.vue'
// import subCategory from './components/subCategory.vue'

export default {
  name: 'App',
  components: {
    navBar,
    //productSheet
   // Sign
  //  subCategory
    Product
  //  Cart
  //  Category
  }
} 
</script>
<style>
   
@import'./assets/css/style.css';
</style>
