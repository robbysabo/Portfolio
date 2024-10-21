<script setup>
import NavBarComponent from '../components/NavBarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="about">
    <NavBarComponent />
    <!-- Container -->
    <div
      class="w-100 d-flex flex-column justify-content-center align-items-center text-center mt-5"
    >
      <div class="dark-bg w-100">
        <h1 class="w-100 pt-4 pb-3 m-0 display-3 text-white text-uppercase">
          About
        </h1>
        <p class="fs-6 text-white pb-4">Little bit about me</p>
      </div>
      <!-- Container -->
      <div class="container-fluid px-md-5">
        <!-- Row -->
        <div class="row w-100 my-5 mx-0">
          <!-- Left -->
          <div class="col-12 col-md-5 mx-auto">
            <h3 class="w-100 text-start h1 m-0 text-title">Bio</h3>
            <hr class="hor-rule" />
            <p class="text-start">
              Hello again, Robert here! Let me tell you a little bit about
              myself. Born in '95, I grew up in the city of Anahiem, California.
              At the age of 13 years old in <i>2008</i>, I began my journey into
              game development and general programming.
            </p>
            <p class="text-start">
              I started making little 2D games in a game engine called
              <i>Game Maker 8</i>. After a few of years of making little games
              in Game Maker, by <i>2013</i> I made the switch over to
              <i>Unity</i>. This would become my main game engine. Also came
              along with learning more programming languages. This is where I
              learned C-Sharp (C#) and Object-Oriented Programming (OOP).
            </p>
            <p class="text-start">
              I had a fantastic experience learning about developing a game.
              After many years of game development, in <i>2019</i> I wanted to
              learning about web development. I took many online bootcamps and
              that summer I signed up to go to the
              <i>College of Western Idaho</i>. Where I learned to hone in my
              craft has a software developer.
            </p>
            <p class="text-start">
              Today, and onwards I am a student to all technologies. As it still
              grows and improves, I want to be near first in line to the next
              technologies.
            </p>
          </div>
          <!-- Left -->
          <!-- Right -->
          <div class="col-12 col-md-5 mx-auto">
            <div class="card d-none d-md-block">
              <img
                src="../../static/90s-aesthetic-bg-wallpaperaccess.jpg"
                class="card-img"
                alt="..."
              />
              <div
                class="card-img-overlay d-flex justify-content-center align-items-center px-0 pb-0"
              >
                <h5 class="card-title text-white display-3 merriweather py-1">
                  Born in '95
                </h5>
              </div>
            </div>
          </div>
          <!-- Right -->
        </div>
        <!-- Row -->
        <!-- Row -->
        <div class="row w-100 my-5 mx-0">
          <!-- Right -->
          <div class="col-12 col-md-5 mx-auto">
            <h3 class="w-100 text-start h1 m-0 text-title">Hobbies</h3>
            <hr class="hor-rule" />
            <p class="text-start">
              <span class="fw-bolder fs-3 karla">Game dev.</span> For refining
              and for fun, I like to make little games. I play around with
              different game engines to see how it all operates. Right now, the
              current engine I am looking at is
              <a
                href="https://godotengine.org/"
                target="_blank"
                rel="noopener noreferrer"
                class="links"
                >Godot<font-awesome-icon
                  icon="fa-solid fa-up-right-from-square"
                  class="fs-6"
              /></a>
              and another game engine
              <a
                href="https://www.unrealengine.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="links"
                >Unreal Engine<font-awesome-icon
                  icon="fa-solid fa-up-right-from-square"
                  class="fs-6" /></a
              >.
            </p>
            <p class="text-start">
              <span class="fw-bolder fs-3 karla">Arcade.</span> While I am not
              at the computer coding, one of those things is fixing up an arcade
              or playing it. I found myself enjoying classic games of the 80's
              and 90's. So on the side I took an arcade gutted it and hooked all
              the controller to a circuit board to map to gamepad on a Raspberry
              Pi 4. Were I am able to put almost every classic game on the
              arcade.
            </p>
            <p class="text-start">
              <span class="fw-bolder fs-3 karla">Traveling.</span> One thing I
              like to do is defiantly going to see other place. That also can
              mean I like to walk most of the time. I have been up and down the
              west coast of the United States of America.
            </p>
          </div>
          <!-- Right -->
          <!-- Left -->
          <div class="col-12 col-md-5 mx-auto">
            <div class="card d-none d-md-block">
              <img
                src="../../static/ai-gen-90s-background.png"
                class="card-img"
                alt="..."
              />
            </div>
          </div>
          <!-- Left -->
        </div>
        <!-- Row -->
      </div>
      <!-- Container -->
    </div>
    <!-- Container -->
    <FooterComponent />
  </div>
</template>

<style scoped>
.about .card-title {
  text-shadow: #000 0 0 4px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
}

.about .text-title {
  color: #191900;
  text-shadow: rgba(25, 25, 0, 0.5) 1px 1px 16px;
}

.about .hor-rule {
  display: block;
  max-width: 25%;
  margin: 0;
  margin-bottom: 1rem;
  padding-bottom: 1px;
  background-color: rgba(0, 0, 0, 0.5);
}

.about .dark-bg {
  background-color: rgba(28, 35, 49, 0.5);
}

.about .links {
  color: #00001f;
  text-decoration: none;
}
</style>
