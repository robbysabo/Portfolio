import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ContactView from '../views/ContactView.vue'
import SuccessView from '../views/SuccessView.vue'

var baseURL = import.meta.env.BASE_URL + '/Portfolio'

const router = createRouter({
  history: createWebHistory(baseURL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView,
    },
    {
      // any unknown path goes back to home screen
      path: '/:pathMatch(.*)*',
      component: HomeView,
    },
  ],
})

export default router
