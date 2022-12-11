import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../views/Home.vue";
import AboutVue from "../views/About.vue";
import ExperienceVue from "../views/Experience.vue";
import ContactVue from "../views/Contact.vue";
import SuccessVue from "../views/Success.vue";

const routes = [
  {
    // any unknown path goes back to home screen
    path: "/:pathMatch(.*)*",
    redirect: { name: "home" },
  },
  {
    path: "/",
    name: "home",
    component: HomeVue,
  },
  {
    path: "/about",
    name: "about",
    component: AboutVue,
  },
  {
    path: "/experience",
    name: "experience",
    component: ExperienceVue,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactVue,
  },
  {
    path: "/success",
    name: "success",
    component: SuccessVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
