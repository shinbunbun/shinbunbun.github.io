<template>
  <div>
    <MyHeader />

    <div class="container">
      <div class="py-4" />

      <h1><span class="name">しんぶんぶん</span></h1>
      <!--<h2 class="h2title">
        （高棟 雄斗）
      </h2>-->

      <div class="py-4" />
      <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1">
        <HomeCard v-for="card in cards" :key="card.title" :data="card" @openModal="openModal" />
      </div>

      <MyModal v-if="modal" @close="closeModal">
        <span class="material-icons colse-button" @click="closeModal">
          close
        </span>
        <br>
        <div class="container modal-container">
          <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1">
            <div v-for="card in sns" :key="card.title">
              <HomeCard :data="card" @openModal="openModal" />
            </div>
          </div>
        </div>
      </MyModal>
    </div>

    <MyFooter />
  </div>
</template>

<script>
// eslint-disable-next-line semi
export default {
  data() {
    return {
      modal: false,
      sns: [
        {
          src: '/images/twitter.png',
          title: 'Twitter',
          to: 'https://twitter.com/shinbunbun_'
        },
        {
          src: '/images/facebook.png',
          title: 'Facebook',
          to: 'https://www.facebook.com/yuto.takamune.77'
        }
      ],
      cards: [
        {
          src: '/images/about.png',
          title: 'About Me',
          to: '/about',
          internal: true
          // color: 'rgba(246,124,27,0.45)'
        },
        {
          src: '/images/products.png',
          title: 'Products',
          to: '/products',
          internal: true
          // color: 'rgba(227,86,227,0.45)'
        },
        {
          src: '/images/sns.png',
          title: 'SNS',
          // color: 'rgba(227,98,98,0.45)',
          modal: true
        },
        {
          src: '/images/book.png',
          title: 'book',
          to: '/book',
          internal: true
          // color: 'rgba(75,227,204,0.45)'
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
  created() {
    // https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494
    /* const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
    const url = CORS_PROXY + 'https://lapras.com/'

    fetch(url)
      .then(res => res.text())
      .then((text) => {
        const el = new DOMParser().parseFromString(text, 'text/html')
        const headEls = el.head.children
        Array.from(headEls).map((v) => {
          const prop = v.getAttribute('property')
          if (!prop) { return }
          if (prop === 'og:image') {
            this.$set(this.cards[6], 'src', v.getAttribute('content'))
          }
        })
      }) */
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
.h2title{
  position: relative;
  left: 5%;
}

.name{
  background: linear-gradient(transparent 70%, var(--nuxt-green) 70%);
}
.colse-button{
  font-size: 45px;
}
</style>
