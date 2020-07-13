import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import(/* webpackChunkName: "menu" */ '../views/Menu.vue')
    },
    {
      path: '/sign-in',
      name: 'signin',
      component: () => import(/* webpackChunkName: "signin" */ '../views/Signin.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import(/* webpackChunkName: "join" */ '../views/Join.vue')
    }
  ]
});
