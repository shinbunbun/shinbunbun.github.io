<template>
  <div>
    <MyHeader />
    <div class="container">
      <div class="py-4" />
      <h1>写真</h1>
      <div class="py-4" />

      <img v-for="(image, index) in images" :key="index" :src="image.src" @click="showLightbox(index)">
      <LightBox ref="lightbox" :media="images" />

      <MyFooter />
    </div>
  </div>
</template>

<script>
import LightBox from 'vue-image-lightbox'
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
export default {
  components: {
    LightBox
  },
  data() {
    return {
      images: [
        {
          src: '/images/photos.png',
          thumb: '/images/photos.png'
        },
        {
          src: '/images/photos.png',
          thumb: '/images/photos.png'
        },
        {
          src: '/images/photos.png',
          thumb: '/images/photos.png'
        }
      ]
    }
  },
  methods: {
    showLightbox(index) {
      this.$refs.lightbox.showImage(index)
    }
  }
}
</script>

<style scoped>
.colse-button{
  font-size: 45px;
}
.description{
  white-space: pre-line;
  text-align: left;
}
.amazon-btn{
  background-color: #f67c1b;
  color: white;
}
</style>
