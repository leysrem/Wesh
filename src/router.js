
import VueRouter from 'vue-router'
import Product from './components/Product.vue'
import Category from './components/Category.vue'
import subCategory from './components/subCategory.vue'
import Cart from './components/Cart.vue'
import productSheet from './components/productSheet.vue'
import Sign from './components/Sign.vue'


 const routes = [
    {
      path: '/' , 
      name: 'Product',
      component: Product
    },
    {
      path:'/Category',
      name: 'Category',
      component: Category
    },
    {
      path:'/subCategory',
      name: 'subCategory',
      component: subCategory
    },
    {
      path:'/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path:'/productSheet',
      name: 'productSheet',
      component: productSheet
    },
    {
      path:'/Sign',
      name: 'Sign',
      component: Sign
    }  
  ]
  const router = new VueRouter({
    routes,
    mode: 'history'
  })
  
  export default router



