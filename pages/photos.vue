<template>
  <div>
    <MyHeader />
    <div class="container">
      <div class="py-4" />
      <h1>写真</h1>
      <div class="py-4" />

      <div class="row">
        <div class="col">
          <div class="btn-group" role="group">
            <button
              type="button"
              class="btn size-btn"
              :class="btnClass.min"
              value="min"
              @click="sizeChange"
            >
              小
            </button>
            <button
              type="button"
              class="btn size-btn"
              :class="btnClass.mid"
              value="mid"
              @click="sizeChange"
            >
              中
            </button>
            <button
              type="button"
              class="btn size-btn"
              :class="btnClass.big"
              value="big"
              @click="sizeChange"
            >
              大
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <div v-for="index in pictureCount" :key="index" class="py-3" :class="imgClass">
          <img v-lazy="`/images/photos/${pictureCount - index + 1}.jpeg`" @click="showLightbox(index - 1)">
        </div>
      </div>
      <client-only>
        <light-box ref="lightbox" :media="images" :show-light-box="false" />
      </client-only>
    </div>
    <MyFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pictureCount: 21,
      btnClass: {
        min: 'btn-light',
        mid: 'btn-secondary',
        big: 'btn-light'
      },
      images: [],
      imgClass: 'col-6 col-md-4'
    }
  },
  mounted() {
    const pictureCount = this.pictureCount
    const images = this.images
    for (let i = 0; i < pictureCount; i++) {
      images.push({ src: `/images/photos/${pictureCount - i}.jpeg`, thumb: `/images/photos/${pictureCount - i}.jpeg` })
    }
    this.images = images
  },
  methods: {
    showLightbox(index) {
      this.$refs.lightbox.showImage(index)
    },
    sizeChange(e) {
      const value = e.target.value
      switch (value) {
        case 'min':
          this.btnClass = {
            min: 'btn-secondary',
            mid: 'btn-light',
            big: 'btn-light'
          }
          this.imgClass = 'col-4 col-md-3'
          break
        case 'mid':
          this.btnClass = {
            min: 'btn-light',
            mid: 'btn-secondary',
            big: 'btn-light'
          }
          this.imgClass = 'col-6 col-md-4'
          break
        case 'big':
          this.btnClass = {
            min: 'btn-light',
            mid: 'btn-light',
            big: 'btn-secondary'
          }
          this.imgClass = 'col-12 col-md-6'
          break

        default:
          break
      }
    }
  }
}
</script>

<style scoped>
img{
  max-width: 100%;
}
</style>
