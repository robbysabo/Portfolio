<script setup>
import { onMounted } from 'vue'
import NavBarComponent from '../components/NavBarComponent.vue'
import Typewriter from 'typewriter-effect/dist/core'

function typing() {
  const typed = document.querySelector('.typed')

  const typewriter = new Typewriter(typed, {
    loop: true,
  })

  typewriter
    .pauseFor(2500)
    .typeString('person.')
    .pauseFor(300)
    .deleteChars(1)
    .typeString(' who writes code.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(300)
    .typeString('👨🏻‍💻')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(300)
    .typeString('software engineer.')
    .pauseFor(2000)
    .deleteChars(9)
    .typeString('developer.')
    .pauseFor(2000)
    .deleteAll()
    .pauseFor(300)
    .typeString('game developer.')
    .pauseFor(2000)
    .deleteAll()
    .pauseFor(300)
    .typeString('web developer.')
    .pauseFor(10000)
    .start()
}

onMounted(() => typing())
</script>

<template>
  <div ref="root">
    <NavBarComponent />
    <div
      class="container-fluid d-flex flex-column justify-content-center align-items-center text-center py-5 home"
    >
      <img
        src="../../static/me.jpg"
        alt="Me, Robert Sabo"
        class="img-me animate__animated animate__fadeIn animate__delay-1s img-thumbnail rounded-circle"
      />
      <h1
        class="animate__animated animate__backInDown d-flex justify-content-center align-items-center"
      >
        <div class="animate__animated animate__tada animate__delay-2s">👋</div>
        <span class="mx-2">Hello, I'm Robert</span>
        <div class="animate__animated animate__tada animate__delay-2s">👋</div>
      </h1>
      <p class="lead">Welcome to my website!</p>
      <h4>I am a <span class="typed"></span></h4>
    </div>
  </div>
</template>
