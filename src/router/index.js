import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      children: [
        {
          path: 'history',
          name:'history',
          component: () => import('../views/about/HistoryView.vue')
        },
        {
          path: 'management',
          name: 'management',
          component: () => import('../views/about/ManagementView.vue'),
          children: [
            {
              path: 'KIMC-Council',
              name: 'council',
              component: () => import('../views/about/management/KIMCouncilView.vue')
            }
          ]
        }
      ]
    },
  ]
})

export default router
