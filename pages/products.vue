<template>
  <div>
    <MyHeader />

    <div class="container">
      <div class="py-4" />
      <h1>Products</h1>

      <div class="py-4" />

      <div class="row row-cols-md-4 row-cols-2">
        <ProductCard v-for="product in products" :key="product.title" :data="product" />
      </div>
    </div>

    <MyFooter />
  </div>
</template>

<script>
// eslint-disable-next-line semi
export default {
  data() {
    return {
      products: [
        {
          src: '/images/jikanwai-bot.png',
          title: '時間割bot',
          tags: ['AWS', 'LINE Bot', 'WebApp', 'Clova Skill', 'Nuxt.js']
        },
        {
          src: '/images/',
          title: 'HTML5',
          to: 'https://html.spec.whatwg.org/multipage/'
        }
      ]
    }
  }
}
</script>

<style scoped>
.profile_img{
  width: 200px;
}
.img_container{
  text-align: center;
}
.title_container{
  text-align: center;
}
.container p{
  font-size: 110%;
}
</style>
