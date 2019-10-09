import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from "./components/HelloWorld";
import FPage from "./components/FPage";
import Login from "./components/Login";
import Register from "./components/Register";


Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {path: '/', component: HelloWorld},
    {path: '/FPage', component: FPage},
    {path: '/Login', component: Login},
    {path: '/Register', component: Register},
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
