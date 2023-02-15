import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import produkter from '../views/Produkter.vue'
import about from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/produkter',
      name: 'produkter',
      component: produkter
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})

export default router
