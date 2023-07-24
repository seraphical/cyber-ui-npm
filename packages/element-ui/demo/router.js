import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/demo-table',
      component: () => import('./table/demo-table.vue'),
      name: 'DemoTable',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/demo-table',
    },
  ],
});

export default router;
