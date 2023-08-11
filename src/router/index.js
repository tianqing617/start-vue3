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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/setup-demo',
      name: 'SetupDemo',
      component: () => import('../views/study/SetupDemo.vue')
    },
    {
      path: '/setup-demo2',
      name: 'SetupDemo2',
      component: () => import('../views/study/SetupDemo2.vue')
    },
    {
      path: '/component-demo',
      name: 'ComponentDemo',
      component: () => import('../views/study/componentDemo/index.vue')
    },
  ]
})

export default router
