import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../pages/PageHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/personal-info',
      name: 'personal-info',
      component: () => import('@/pages/PagePersonalInfo.vue')
    },
    {
      path: '/destination',
      name: 'destination',
      component: () => import('@/pages/PageDestination.vue')
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('@/pages/PageSuccess.vue')
    }
  ]
})

export default router
