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
        <span class="material-icons colse-button" @click="closeModal">
          close
        </span>
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
                  <span style="font-family: Material Icons">
                    open_in_new
                  </span>
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
