import { createRouter, createWebHistory } from 'vue-router'
import CabulasView from '@/views/CabulasView.vue'
import StatsView from '@/views/StatusView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'apontamentos',
      component: CabulasView
    },
    {
      path: '/stats',
      name: 'stats',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: StatsView
    }
  ]
})

export default router
