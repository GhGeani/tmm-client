import Vue from 'vue';
import Router from 'vue-router';

import Landing from '../views/Landing.vue';
import Confession from '../views/Confession.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/c',
      name: 'Confessions',
      component: Confession,
    },
  ],
});
