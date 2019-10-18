import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Flex from "../pages/Flex";
import Test from "../pages/Test";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
      {path: '/', component: Home},
      {path: '/login', component: Login},
      {path: '/register', component: Register},
      {path: '/flex', component: Flex},
      {path: '/test', component: Test}
    ]
});

export default router;