<template>
  <MyModal v-if="modal" @close="closeModal">
    <img src="images/close-black-18dp.svg" alt="" class="close-button" @click="closeModal">
    <br>
    <div class="container modal-container">
      <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1 justify-content-center">
        <div v-for="card in links" :key="card.title">
          <HomeCard :data="card" @openModal="openModal" />
        </div>
      </div>
    </div>
  </MyModal>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      links: [
        {
          src: '/images/twitter.png',
          title: 'Twitter',
          to: 'https://twitter.com/shinbunbun_'
        },
        {
          src: '/images/facebook.png',
          title: 'Facebook',
          to: 'https://www.facebook.com/yuto.takamune.77'
        },
        {
          src: '/images/favicon.png',
          title: 'Qiita',
          to: 'https://qiita.com/shinbunbun_'
          // color: 'rgba(157,227,120,0.45)'
        },
        {
          src: '/images/GitHub-Mark-120px-plus.png',
          title: 'GitHub',
          to: 'https://github.com/shinbunbun'
          // color: 'rgba(46,80,166,0.45)'
        },
        {
          src: '/images/lapras.png',
          title: 'Lapras',
          to: 'https://lapras.com/public/HNWZIHB'
          // color: 'rgba(250,228,35,0.45)'
        },
        {
          src: '/images/connpass_logo_3.png',
          title: 'connpass',
          to: 'https://connpass.com/user/unix_yuto/'
          // color: 'rgba(107,73,61,0.45)'
        }
      ]
    }
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    },
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    }
  }
}
</script>

<style scoped>
.close-button{
  width: 45px;
}
</style>
