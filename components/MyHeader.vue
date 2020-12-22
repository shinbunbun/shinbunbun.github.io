<template>
  <div>
    <div class="py-4" />
    <nav class="navbar fixed-top navbar-expand-lg navbar-light">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">
          SHINBUNBUN
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
              <NuxtLink class="nav-link active" aria-current="page" to="/">
                Home
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/about">
                About Me
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/products">
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
                SNS
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

<style scoped>
.navbar {
  font-size: 130%;
  background-color: white;
}
.nav-item{
  padding-left:  20px !important;
}
/*.container{
  display: flex;
  justify-content: space-between;
}*/
</style>

<style>
body {
  font-family: "Lato", sans-serif;
}
</style>
