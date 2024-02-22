import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/test',
      component: () => import('./table/index.vue'),
      name: 'Test',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/test',
    },
  ],
});

export default router;
