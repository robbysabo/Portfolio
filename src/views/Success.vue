<template>
  <div class="success">
    <NavbarVue />
    <!-- Container -->
    <div class="w-100 d-flex flex-column justify-content-center align-items-center mt-5">
      <div class="dark-bg w-100 text-center">
        <h1 class="w-100 pt-4 pb-3 m-0 display-3 text-white text-uppercase">Contact</h1>
        <p class="fs-6 text-white pb-4">Come talk to me! Comments and Questions are always welcome!</p>
      </div>
      <!-- Container -->
      <div class="container-fluid px-5">
        <!-- Row -->
        <div class="row w-100 my-5 mx-0">
          <!-- Left -->
          <div class="col-12 text-center">
            <p class="fs-3 py-5 my-5"><span class="fw-bold">Success</span>! I will get back to you shortly.</p>
          </div>
        </div>
      </div>
    </div>
    <FooterVue />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarVue from "@/components/Navbar.vue";
import FooterVue from "@/components/Footer.vue";

export default {
  name: "SuccessVue",
  components: {
    NavbarVue,
    FooterVue,
  },
};
</script>

<style scoped>
.success .dark-bg {
  background-color: rgb(28, 35, 49);
}
</style>
