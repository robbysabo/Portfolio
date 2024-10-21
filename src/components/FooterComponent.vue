<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <footer class="text-center text-white">
    <!-- Section: Links  -->
    <section class="container text-center pt-1">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h5 class="text-uppercase">Projects</h5>
          <hr class="mb-4 mt-0 d-inline-block mx-auto line-break" />
          <p>
            <a
              href="https://www.wegeektogether.com/"
              target="_blank"
              class="text-white"
              >We Geek Together</a
            >
          </p>
          <p>
            <a href="https://mrzig0.csb.app/" target="_blank" class="text-white"
              >Case Study: Pokémon</a
            >
          </p>
          <p>
            <a href="https://m0xyh7.csb.app/" target="_blank" class="text-white"
              >Music Company</a
            >
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h5 class="text-uppercase">Navigation</h5>
          <hr class="mb-4 mt-0 d-inline-block mx-auto line-break" />
          <p>
            <router-link class="text-white" to="/">Home</router-link>
          </p>
          <p>
            <router-link class="text-white" to="/about">About</router-link>
          </p>
          <p>
            <router-link class="text-white" to="/experience"
              >Experience</router-link
            >
          </p>
          <p>
            <router-link class="text-white" to="/contact">Contact</router-link>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h5 class="text-uppercase">Contact</h5>
          <hr class="mb-4 mt-0 d-inline-block mx-auto line-break" />
          <p>
            <a href="mailto:robertalensabo@gmail.com" class="text-white"
              ><font-awesome-icon
                icon="fa-solid fa-envelope"
                class="me-1"
              />robertalensabo@gmail.com</a
            >
          </p>
          <p>
            <a href="tel:+12087408655" class="text-white"
              ><font-awesome-icon icon="fa-solid fa-phone" class="me-1" />1
              (208) 740 - 8655</a
            >
          </p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </section>
    <!-- Section: Links  -->

    <!-- Section: Copyright/Social media -->
    <section
      class="d-flex justify-content-between align-items-center p-3 bottom-section"
    >
      <!-- Left -->
      <div class="d-flex justify-content-center align-items-center ms-3">
        <span class="d-none d-md-inline"
          >Connect with me on social networks:</span
        >
        <hr class="vr pb-5 my-0 m-3 d-none d-md-inline-block" />
        <div>
          <a href="https://github.com/robbysabo" class="text-white me-4 h2">
            <font-awesome-icon icon="fa-brands fa-square-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/robert-sabo-308860212"
            class="text-white me-4 h2"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </a>
          <a
            href="https://codesandbox.io/u/robbysabo"
            class="text-white me-4 h2"
          >
            <font-awesome-icon icon="fa-regular fa-square" />
          </a>
        </div>
      </div>
      <!-- Left -->
      <!-- Middle -->
      <div class="d-none d-md-block">
        <p class="m-0">
          <small
            >Made with
            <a
              href="https://vuejs.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white text-decoration-none"
            >
              Vue
            </a>
            and
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white text-decoration-none"
            >
              Bootstrap
            </a>
            |
            <a
              href="https://github.com/robbysabo/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white text-decoration-none"
            >
              Source Code
            </a>
          </small>
        </p>
      </div>
      <!-- Middle -->
      <!-- Right -->
      <div class="me-3">
        <span class="karla"
          ><a class="text-white" href="https://github.com/robbysabo/"
            >Robert Sabo</a
          >
          © 2024</span
        >
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->
  </footer>
</template>

<style scoped>
footer {
  background-color: #1c2331;
}

footer .bottom-section {
  background-color: rgba(255, 255, 255, 0.05);
}

.line-break {
  width: 60px;
  background-color: rgba(255, 255, 255, 0.05);
  height: 2px;
}

footer a {
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
</style>
