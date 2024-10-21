import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquare, faStar } from '@fortawesome/free-regular-svg-icons'
import {
  faEnvelope,
  faPhone,
  faStar as faStarSolid,
  faStarHalfStroke,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
  faGithubSquare,
  faLinkedin,
  faEnvelope,
  faPhone,
  faStar,
  faStarSolid,
  faStarHalfStroke,
  faUpRightFromSquare,
  faSquare,
)

const app = createApp(App)
app.use(router)
app.mount('#app')
