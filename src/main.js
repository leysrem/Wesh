import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);


new Vue({
  el:'#app',
  routes,
  render: h => h(App),
}).$mount('#app')
