import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import routes from './router'



Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router: routes,
  render: h => h(App),
}).$mount('#app')