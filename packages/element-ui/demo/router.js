import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/demo-card',
      component: () => import('./card/demo-card.vue'),
      name: 'DemoCard',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/demo-card',
    },
  ],
});

export default router;
