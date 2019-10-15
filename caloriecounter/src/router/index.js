import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
      {path: '/', component: Home},
      {path: '/login', component: Login},
      {path: '/register', component: Register},
    ]
});

export default router;