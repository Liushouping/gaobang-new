import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import Index from '/src/components/Index.vue';

const routes = [
	{
    path: '/',
    name: 'Index',
    component: () => import('/src/components/Index.vue') 
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});
export default router;