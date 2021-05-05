import Product from './components/Product.vue'
import Category from './components/Category.vue'
import subCategory from './components/subCategory.vue'

export const routes =[
    {
      path: '/' , 
      component: Product
    },
    {
      path:'/Category',
      component:Category
    },
    {
      path:'/subCateogry',
      component:subCategory
    }
]