<template>
  <div>
    <div class="py-4" />
    <nav class="navbar fixed-top navbar-expand-lg navbar-light">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">
          <img src="/images/ポートフォリオサイトロゴ.png" alt="">
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
        <div id="navbarNavDropdown" class="collapse navbar-collapse">
          <div class="navbar-nav me-auto mb-2 mb-lg-0" />
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink class="nav-link" :class="{ active: path === '/' }" aria-current="page" to="/">
                Home
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/about" :class="{ active: path === '/about' }">
                About Me
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/products" :class="{ active: path === '/products' }">
                Products
              </NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a
                id="navbarDropdownMenuLink"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Links
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a
                    class="dropdown-item"
                    href="https://twitter.com/shinbunbun_"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://qiita.com/shinbunbun_"
                  >
                    Qiita
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://github.com/shinbunbun"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://connpass.com/user/unix_yuto/"
                  >
                    connpass
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://lapras.com/public/HNWZIHB"
                  >
                    Lapras
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://www.facebook.com/yuto.takamune.77"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </li>
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
      path: ''
    }
  },
  mounted() {
    this.path = this.$route.path
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
