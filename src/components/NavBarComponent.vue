<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid p-0">
      <RouterLink class="navbar-brand ps-3" to="/">
        <img
          src="../../static/logo.png"
          alt="logo"
          class="img-fluid m-0 p-0"
          width="128"
        />
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100 karla">
          <li class="nav-item">
            <RouterLink
              class="nav-link ms-3 ms-lg-0 fs-5"
              aria-current="page"
              to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link ms-3 ms-lg-0 fs-5" to="/about"
              >About</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link ms-3 ms-lg-0 fs-5" to="/experience"
              >Experience</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link ms-3 ms-lg-0 fs-5" to="/contact"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#navbarNav {
  background-color: rgb(245, 245, 245);
}

.nav-item:has(.nav-link.router-link-active) {
  background-color: rgba(0, 0, 0, 0.1);
}

@media (min-width: 992px) {
  #navbarNav {
    background-color: transparent;
    border: 1px solid black;
    border-radius: 12px;
    margin-right: 1rem;
  }
  .navbar-expand-lg .navbar-nav {
    justify-content: space-evenly;
    flex-direction: row;
  }
  .nav-item {
    width: 100%;
    text-align: center;
  }

  .nav-item:first-child {
    border-radius: 12px 0 0 12px;
  }

  .nav-item:last-child {
    border-radius: 0 12px 12px 0;
  }

  .nav-item:hover {
    background-color: #fff;
  }
}
</style>
