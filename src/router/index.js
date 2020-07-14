import Vue from 'vue';
import Router from 'vue-router';

import store from '../store';

import Home from '../views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: () =>
        import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
      meta: {
        authRequired: true
      }
    },
    {
      path: '/menu',
      name: 'menu',
      component: () =>
        import(/* webpackChunkName: "menu" */ '../views/Menu.vue')
    },
    {
      path: '/sign-in',
      name: 'signin',
      component: () =>
        import(/* webpackChunkName: "signin" */ '../views/Signin.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () =>
        import(/* webpackChunkName: "join" */ '../views/Join.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.authRequired)) {
    if (!store.state.user) {
      next({ path: '/sign-in' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
