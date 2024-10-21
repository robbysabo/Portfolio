<script setup>
import NavBarComponent from '../components/NavBarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import ChartComponent from '../components/ChartComponent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div>
    <NavBarComponent />
    <!-- Container -->
    <div
      class="w-100 d-flex flex-column justify-content-center align-items-center text-center mt-5 experience"
    >
      <div class="dark-bg w-100">
        <h1 class="w-100 pt-4 pb-3 m-0 display-3 text-white text-uppercase">
          Experience
        </h1>
        <p class="fs-6 text-white pb-4">Here is all of my accomplishments</p>
      </div>
      <!-- Container -->
      <div class="container-fluid px-0 mt-4">
        <!-- Programing Skills -->
        <h2 class="pt-3 m-0 fw-bolder title-color">Programming Skills</h2>
        <!-- Row -->
        <div class="row w-100 mb-5 mt-0 mx-0">
          <!-- Left -->
          <div class="col-12 col-md-6 py-5">
            <ChartComponent />
          </div>
          <!-- Left -->
          <!-- Right -->
          <div class="col-12 col-md-6 h-100 my-auto">
            <h5>Skill Rating</h5>
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item d-flex justify-content-between bg-transparent"
              >
                <div class="ps-2">
                  <p class="m-0">HTML/CSS</p>
                </div>
                <div class="pe-2">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                </div>
              </li>
              <li
                class="list-group-item d-flex justify-content-between bg-transparent"
              >
                <div class="ps-2">JavaScript</div>
                <div class="pe-2">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                </div>
              </li>
              <li
                class="list-group-item d-flex justify-content-between bg-transparent"
              >
                <div class="ps-2">C# (.NET)</div>
                <div class="pe-2">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-regular fa-star" />
                </div>
              </li>
              <li
                class="list-group-item d-flex justify-content-between bg-transparent"
              >
                <div class="ps-2">VueJs</div>
                <div class="pe-2">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                  <font-awesome-icon icon="fa-regular fa-star" />
                </div>
              </li>
              <li
                class="list-group-item d-flex justify-content-between bg-transparent"
              >
                <div class="ps-2">ReactJs</div>
                <div class="pe-2">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                  <font-awesome-icon icon="fa-regular fa-star" />
                  <font-awesome-icon icon="fa-regular fa-star" />
                </div>
              </li>
              <li
                class="list-group-item d-flex justify-content-between bg-transparent"
              >
                <div class="ps-2">AWS</div>
                <div class="pe-2">
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-solid fa-star" />
                  <font-awesome-icon icon="fa-regular fa-star" />
                  <font-awesome-icon icon="fa-regular fa-star" />
                  <font-awesome-icon icon="fa-regular fa-star" />
                </div>
              </li>
            </ul>
          </div>
          <!-- Right -->
          <!-- Row -->
        </div>
        <!-- Row -->
        <div class="row w-100 mb-5 mt-0 mx-0 pt-5 border-top border-light">
          <!-- Text -->
          <div class="col-12 col-md-6 col-xl-4">
            <h3 class="text-border">HTML/CSS</h3>
            <p>
              I have <strong>5 years</strong> of writing HTML and CSS. Started
              with basic static sites for practice.
            </p>
          </div>
          <!-- Text -->
          <!-- Text -->
          <div class="col-12 col-md-6 col-xl-4">
            <h3 class="text-border">JavaScript</h3>
            <p>
              I also have <strong>5 years</strong> of writting JavaScript. It
              was mostly from learning JavaScript frameworks. Built in React and
              Vue.
            </p>
          </div>
          <!-- Text -->
          <!-- Text -->
          <div class="col-12 col-md-6 col-xl-4">
            <h3 class="text-border">C# (.NET)</h3>
            <p>
              I started with the C# language as my first programming language. I
              have <strong>11 years</strong> of experience with C#, starting all
              the way <em>back in 2014</em>. I mostly used it for game
              development in the game engine <i>Unity.</i>
            </p>
          </div>
          <!-- Text -->
          <!-- Text -->
          <div class="col-12 col-md-6 col-xl-4">
            <h3 class="text-border">VueJs</h3>
            <p>
              About 2 Years of using Vue framework. It has been an easy learning
              curve to anyone that needs a fast and reliable framework. I built
              some my recent web projects with Vue.
            </p>
          </div>
          <!-- Text -->
          <!-- Text -->
          <div class="col-12 col-md-6 col-xl-4">
            <h3 class="text-border">ReactJs</h3>
            <p>
              I started with React framework a little over a
              <strong>1 year</strong>. I built small web apps learning the
              framework. Though, this framework went through a lot of changes
              over the past couple of years. I have a great foundation for
              React.
            </p>
          </div>
          <!-- Text -->
          <!-- Text -->
          <div class="col-12 col-md-6 col-xl-4">
            <h3 class="text-border">AWS</h3>
            <p>
              Only recently in the last year, I have been pushing my way into
              AWS. So far I can setup a simple serverless website for any site
              made with AWS S3.
            </p>
          </div>
          <!-- Text -->
        </div>
        <!-- Row -->
        <!-- Programing Skills -->
        <!-- Projects -->
        <h2 class="py-3 m-0 fw-bolder border-top border-light title-color">
          Projects
        </h2>
        <!-- Row -->
        <div class="row w-100 pb-md-5 px-3 m-0">
          <!-- Top Left -->
          <div class="col-12 col-md-4">
            <!-- Card -->
            <div class="card h-100">
              <a
                href="https://robbysabo.github.io/Project3-Vue-SPA-WeGeekTogether/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../../static/we-geek-together-sign.jpg"
                  class="card-img-top d-none d-md-block"
                  alt="website of my project Fake Arcade"
                />
              </a>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title title-color text-border">
                  We Geek Together
                </h5>
                <p class="card-text">
                  A D&D shop with D.M's to hire for a 4 hour campaign. Or shop
                  around for D&D products. This is one of the first website
                  outside of College that I worked on.
                </p>
                <p class="card-text mt-auto">
                  <a
                    href="https://robbysabo.github.io/Project3-Vue-SPA-WeGeekTogether/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-decoration-none"
                  >
                    <small class="text-muted"
                      >Click here to view
                      <font-awesome-icon
                        icon="fa-solid fa-up-right-from-square"
                    /></small>
                  </a>
                </p>
              </div>
            </div>
            <!-- Card -->
          </div>
          <!-- Top Left -->
          <!-- Top Middle -->
          <div class="col-12 col-md-4">
            <!-- Card -->
            <div class="card h-100">
              <a
                href="https://robbysabo.github.io/Fall2022-Final/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../../static/fakearcade.png"
                  class="card-img-top d-none d-md-block"
                  alt="website of my project Fake Arcade"
                />
              </a>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title title-color text-border">Fake Arcade</h5>
                <p class="card-text">
                  This is a static website I created from vanilla HTML, CSS, and
                  JavaScript. It is a demonstration of JavaScript and jQuery
                  library.
                </p>
                <p class="card-text mt-auto">
                  <a
                    href="https://robbysabo.github.io/Fall2022-Final/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-decoration-none"
                  >
                    <small class="text-muted"
                      >Click here to view
                      <font-awesome-icon
                        icon="fa-solid fa-up-right-from-square"
                    /></small>
                  </a>
                </p>
              </div>
            </div>
            <!-- Card -->
          </div>
          <!-- Top Middle -->
          <!-- Top Right -->
          <div class="col-12 col-md-4">
            <!-- Card -->
            <div class="card h-100">
              <a
                href="https://mrzig0.csb.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../../static/pokedex.png"
                  class="card-img-top d-none d-md-block"
                  alt="website of my project Fake Arcade"
                />
              </a>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title title-color text-border">
                  Case Study: Pokemon
                </h5>
                <p class="card-text">
                  This a demonstration website of using VueJs. The website shows
                  off the routing system with Vue Routing.
                </p>
                <p class="card-text mt-auto">
                  <a
                    href="https://mrzig0.csb.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-decoration-none"
                  >
                    <small class="text-muted"
                      >Click here to view
                      <font-awesome-icon
                        icon="fa-solid fa-up-right-from-square"
                    /></small>
                  </a>
                </p>
              </div>
            </div>
            <!-- Card -->
          </div>
        </div>
        <!-- Top Right -->
        <!-- Row -->
        <div class="row pb-5 px-3 m-0">
          <!-- Bottom Left -->
          <div class="col-12 col-md-4">
            <!-- Card -->
            <div class="card h-100">
              <a
                href="https://8p1fy8.csb.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../../static/robofriends.png"
                  class="card-img-top d-none d-md-block"
                  alt="A demo site of Vue and Bootstrap"
                />
              </a>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title title-color text-border">Robofriends</h5>
                <p class="card-text">
                  A frontend demonstration of using the Vue and Bootstrap
                  together. It also shows the use of getting data and parse it
                  with Vue and JSON.
                </p>
                <p class="card-text mt-auto">
                  <a
                    href="https://8p1fy8.csb.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-decoration-none"
                  >
                    <small class="text-muted"
                      >Click here to view
                      <font-awesome-icon
                        icon="fa-solid fa-up-right-from-square"
                    /></small>
                  </a>
                </p>
              </div>
            </div>
            <!-- Card -->
          </div>
          <!-- Bottom Left -->
          <!-- Bottom Middle -->
          <div class="col-12 col-md-4 mx-auto">
            <!-- Card -->
            <div class="card h-100">
              <a
                href="https://m0xyh7.csb.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../../static/reactdemo.png"
                  class="card-img-top d-none d-md-block"
                  alt="A demo site of React framework"
                />
              </a>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title title-color text-border">
                  Music Company
                </h5>
                <p class="card-text">
                  A demonstration of using the framework ReactJs as a frontend.
                </p>
                <p class="card-text mt-auto">
                  <a
                    href="https://m0xyh7.csb.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-decoration-none"
                  >
                    <small class="text-muted"
                      >Click here to view&nbsp;<font-awesome-icon
                        icon="fa-solid fa-up-right-from-square"
                    /></small>
                  </a>
                </p>
              </div>
            </div>
            <!-- Card -->
          </div>
          <!-- Bottom Middle -->
          <!-- Bottom Right -->
          <div class="col-12 col-md-4 mx-auto">
            <!-- Card -->
            <div class="card h-100">
              <img
                src="../../static/backend.png"
                class="card-img-top d-none d-md-block"
                alt="Code in an editor"
              />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title title-color text-border">
                  Example of Backend
                </h5>
                <p class="card-text">
                  Backend work can be located at my Github or CodeSandbox
                </p>
                <p class="card-text mt-auto">
                  <a
                    href="https://github.com/robbysabo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-decoration-none mb-0 me-3"
                  >
                    <small class="text-muted"
                      >View in Github&nbsp;<font-awesome-icon
                        icon="fa-solid fa-up-right-from-square"
                    /></small>
                  </a>
                  <a
                    href="https://codesandbox.io/u/robbysabo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-decoration-none"
                  >
                    <small class="text-muted"
                      >View&nbsp;in&nbsp;CodeSandbox&nbsp;<font-awesome-icon
                        icon="fa-solid fa-up-right-from-square"
                      />&nbsp;</small
                    >
                  </a>
                </p>
              </div>
            </div>
            <!-- Card -->
          </div>
          <!-- Bottom Right -->
        </div>
        <!-- Row -->

        <!-- Education -->
        <h2 class="py-3 m-0 fw-bolder border-top border-light title-color">
          Education
        </h2>
        <div class="row w-100 m-0">
          <div class="col-12 col-sm-6">
            <h3 class="text-border">Degree</h3>
            <h5>College of Western Idaho</h5>
            <p>
              Associate of Applied Science: Software Development <i>2024</i>
            </p>
            <a
              href="https://cwi.edu"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none"
              ><img src="../../static/cwi.png" alt="College of Western Idaho"
            /></a>
          </div>
          <div class="col-12 col-sm-6">
            <h3 class="text-border">Certification</h3>
            <p>I.T.S. Badges HTML 5 Application Developer</p>
            <img
              src="../../static/ITS-Badges_HTML-5.png"
              alt="I.T.S. Badges HTML 5 Application Developer"
              class="h-50"
            />
          </div>
        </div>
      </div>
      <!-- Container -->
    </div>
    <!-- Container -->
    <FooterComponent />
  </div>
</template>

<style scoped>
.experience .dark-bg {
  background-color: rgba(28, 35, 49, 0.75);
}

.experience .title-color {
  color: #191900;
  text-shadow: rgba(25, 25, 0, 0.5) 1px 1px 16px;
}

.experience a.card {
  color: #00001f;
  text-decoration: none;
}

.experience .text-border {
  border-bottom: 1px solid rgba(28, 35, 49, 0.15);
}
</style>
