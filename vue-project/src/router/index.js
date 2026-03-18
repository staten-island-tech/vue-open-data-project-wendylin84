import { createRouter, createWebHistory } from 'vue-router'
import homeView from '@/views/homeView.vue'
import emissionsData from '@/views/emissionsData.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView,
    },
    {
      path: '/emissions/:id',
      name: 'emissions',
      component: emissionsData,
    },
  ],
})

export default router
