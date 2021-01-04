<template>
  <div>
    <div class="py-4" />
    <nav class="navbar fixed-top navbar-expand-lg navbar-light">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">
          <img src="/images/portfolio-logo.png" alt="">
        </NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarNavDropdown" class="collapse navbar-collapse" :class="{show: navbarNavDropdownShow}">
          <div class="navbar-nav me-auto mb-2 mb-lg-0" />
          <ul class="navbar-nav">
            <li class="nav-item" @click="closeNav">
              <NuxtLink class="nav-link" to="/">
                Home
              </NuxtLink>
            </li>
            <li class="nav-item" @click="closeNav">
              <NuxtLink class="nav-link" to="/about">
                About me
              </NuxtLink>
            </li>
            <li class="nav-item" @click="closeNav">
              <NuxtLink class="nav-link" to="/products">
                Products
              </NuxtLink>
            </li>
            <li class="nav-item" @click="openModal">
              <span class="nav-link" style="cursor: pointer;">
                Links
              </span>
            </li>
            <LinksModal ref="LinksModal" />
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: '',
      navbarNavDropdownShow: false
    }
  },
  methods: {
    openModal() {
      this.$refs.LinksModal.openModal()
    },
    closeNav() {
      const myCollapse = document.getElementById('navbarNavDropdown')
      // eslint-disable-next-line no-undef
      new bootstrap.Collapse(myCollapse, {
        hide: true
      })
    }
  }
}
</script>

<style scoped>
.navbar {
  font-size: 130%;
  background-color: var(--background-color);
  /*background-color: white;*/
}
.nav-item{
  padding-left:  20px !important;
}
/*.container{
  display: flex;
  justify-content: space-between;
}*/
img{
  max-width:200px;
  max-height: 65px;
}
</style>

<style>
/*body {
  font-family: 'M PLUS 1p'
}*/
</style>
