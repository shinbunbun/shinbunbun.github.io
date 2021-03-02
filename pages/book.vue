<template>
  <div>
    <div class="container">
      <div class="py-4" />
      <h1>著書</h1>
      <div class="py-4" />

      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
        <div v-for="card in cards" :key="card.title">
          <HomeCard :data="card" @openModal="openModal(card)" />
        </div>
      </div>

      <MyModal v-if="modal" @close="closeModal">
        <img src="/images/close-black-18dp.svg" alt="" class="close-button" @click="closeModal">
        <br>
        <div class="container modal-container">
          <div class="row">
            <div class="col-md-6 align-items-center" style="text-align: center;">
              <img :src="data.src" alt="">
            </div>
            <div class="col-md-6">
              <div class="py-2" />
              <h2>{{ data.title }}</h2>
              <div class="py-2" />
              <div class="btn-wrapper">
                <button type="button" class="btn amazon-btn" @click="openLink(data.amazon)">
                  <b>Amazonで購入</b>
                  <img class="new-tab-img" src="/images/open_in_new-black-18dp.svg" alt="">
                </button>
              </div>
              <p class="description">
                {{ data.description }}
              </p>
            </div>
          </div>
        </div>
      </MyModal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        title: 'Book',
        description: '著書',
        type: 'article',
        url: 'https://shinbunbun.info/book/',
        image: 'https://shinbunbun.info/images/ogp.png'
      },
      modal: false,
      cards: [{
        src: '/images/LINE-API.jpeg',
        title: 'LINE API実践ガイド',
        amazon: 'https://www.amazon.co.jp/dp/B08L4FPGNF',
        modal: true,
        description: `2020年11月出版。
        LINE API ExpertをはじめとしたLINE APIの有識者たちが各LINE APIについての解説をハンズオン形式で執筆した本。
        私はLINEログイン章を担当した。
        `
      }],
      data: {}
    }
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    },
    openModal(data) {
      this.data = data
      this.modal = true
    },
    closeModal() {
      this.modal = false
    }
  },
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image }
      ]
    }
  }
}
</script>

<style scoped>
.close-button{
  width: 45px;
}
.description{
  white-space: pre-line;
  text-align: left;
}
.amazon-btn{
  background-color: #f67c1b;
  color: white;
}
img{
  max-width: 100%;
}
.new-tab-img{
  width: 16px;
}
</style>
