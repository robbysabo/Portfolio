<script setup>
import NavBarComponent from '../components/NavBarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>

<template>
  <div class="contact">
    <NavBarComponent />
    <!-- Container -->
    <div
      class="w-100 d-flex flex-column justify-content-center align-items-center mt-5"
    >
      <div class="dark-bg w-100 text-center">
        <h1 class="w-100 pt-4 pb-3 m-0 display-3 text-white text-uppercase">
          Contact
        </h1>
        <p class="fs-6 text-white pb-4">
          Come talk to me! Comments and Questions are always welcome!
        </p>
      </div>
      <!-- Container -->
      <div class="container-fluid px-5">
        <!-- Row -->
        <div class="row w-100 my-5 mx-0">
          <!-- Left -->
          <div class="col-12">
            <form
              class="row g-3"
              action="https://formsubmit.co/f7197e9ceb965e0267401d2782db5ef4"
              method="POST"
            >
              <!-- Honeypot -->
              <input type="text" name="_honey" class="d-none" />

              <!-- Disable Captcha -->
              <input type="hidden" name="_captcha" value="false" />

              <!-- Success page -->
              <input
                type="hidden"
                name="_next"
                value="https://robbysabo.github.io/Portfolio/success"
              />

              <div class="col-md-6">
                <label for="firstName" class="form-label fs-5"
                  ><span class="text-danger">*</span>First Name:</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="firstName"
                  placeholder="First Name"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="lastName" class="form-label fs-5"
                  ><span class="text-danger">*</span>Last Name:</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="Last&nbsp;Name"
                  id="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div class="col-md-8">
                <label for="emailInfo" class="form-label fs-5"
                  ><span class="text-danger">*</span>E-mail:</label
                >
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="emailInfo"
                  pattern="[\w-\.]+@([\w-]+\.)+[\w-]{2,4}"
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div class="col-md-4">
                <label for="phoneNumber" class="form-label fs-5"
                  >Phone Number:</label
                >
                <input
                  type="text"
                  class="form-control"
                  name="phone"
                  id="phoneNumber"
                  pattern="(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}"
                  placeholder="208-123-4567"
                />
              </div>
              <div class="col-md-12">
                <label for="comments" class="form-label fs-5"
                  ><span class="text-danger">*</span>Message:</label
                >
                <textarea
                  class="form-control"
                  name="comments"
                  id="comments"
                  rows="5"
                  placeholder="Message goes here..."
                  required
                ></textarea>
              </div>
              <div class="col-md-12">
                <button type="submit" class="btn btn-primary my-btn-color">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped>
.contact .dark-bg {
  background-color: rgb(28, 35, 49);
}

.contact .my-btn-color {
  background-color: rgb(28, 35, 49);
}
</style>
