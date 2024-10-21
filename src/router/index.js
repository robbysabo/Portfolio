import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ContactView from '../views/ContactView.vue'
import SuccessView from '../views/SuccessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Portfolio',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Portfolio/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/Portfolio/experience',
      name: 'experience',
      component: ExperienceView,
    },
    {
      path: '/Portfolio/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/Portfolio/success',
      name: 'success',
      component: SuccessView,
    },
    {
      // any unknown path goes back to home screen
      path: '/Portfolio/:pathMatch(.*)*',
      component: HomeView,
    },
  ],
})

export default router
