<template>
  <div>
    <div class="container">
      <div class="py-4" />

      <!--<h1><span class="name">しんぶんぶん</span></h1>-->
      <!--<h2 class="h2title">
        （高棟 雄斗）
      </h2>-->

      <div class="py-4" />
      <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1 justify-content-center">
        <HomeCard v-for="card in cards" :key="card.title" :data="card" @openModal="openModal" />
      </div>

      <LinksModal ref="LinksModal" />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line semi
export default {
  data() {
    return {
      modal: false,
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
          src: '/images/book.png',
          title: 'Book',
          to: '/book',
          internal: true
          // color: 'rgba(75,227,204,0.45)'
        },
        {
          src: '/images/photos.png',
          title: 'Photos',
          to: '/photos',
          internal: true
          // color: 'rgba(75,227,204,0.45)'
        },
        {
          src: '/images/links.png',
          title: 'Links',
          // color: 'rgba(227,98,98,0.45)',
          modal: true
        },
        {
          src: '/images/others.png',
          title: 'Extra',
          to: 'extra',
          internal: true
        },
        {
          src: '/images/comming.png',
          title: 'Comming Soon...'
        },
        {
          src: '/images/comming.png',
          title: 'Comming Soon...'
        }
        /* {
          src: '/images/work.png',
          title: 'Work',
          to: '/work',
          internal: true
        }, */
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
    openModal() {
      this.$refs.LinksModal.openModal()
    },
    openLink(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.h2title{
  position: relative;
  left: 5%;
}
/*
.name{
  background: linear-gradient(transparent 70%, var(--nuxt-green) 70%);
}*/
</style>
