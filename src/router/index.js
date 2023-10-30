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
    }
  ]
})

export default router
