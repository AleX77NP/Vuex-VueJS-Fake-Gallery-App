import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import VueRouter from 'vue-router'
import Gallery from './components/Gallery'
import About from './components/About'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const routes = [
  {path: '/', component: Gallery},
  {path: '/about', component: About}
];

const router = new VueRouter({
  routes
})


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
