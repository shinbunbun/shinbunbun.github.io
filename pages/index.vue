<template>
  <div>
    <MyHeader />

    <div class="container">
      <div class="py-4" />

      <h1>しんぶんぶん</h1>
      <h2 class="h2title">
        （高棟 雄斗）
      </h2>

      <div class="py-4" />
      <div class="row row-cols-md-4 row-cols-2">
        <div v-for="card in cards" :key="card.title">
          <HomeCard :data="card" />
        </div>
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
      cards: [
        {
          icon: 'person',
          title: 'About Me',
          to: '/about'
        },
        {
          icon: 'apps',
          title: 'Products',
          to: '/products'
        },
        {
          icon: 'group_add',
          title: 'SNS',
          to: '/sns'
        },
        {
          icon: 'menu_book',
          title: 'book',
          to: '/book'
        },
        {
          src: '/images/favicon.png',
          title: 'Qiita',
          to: 'https://qiita.com/shinbunbun_'
        },
        {
          src: '/images/GitHub-Mark-120px-plus.png',
          title: 'GitHub',
          to: 'https://github.com/shinbunbun'
        },
        {
          src: '/images/GitHub-Mark-120px-plus.png',
          title: 'Lapras',
          to: 'https://lapras.com/public/HNWZIHB'
        },
        {
          src: '/images/connpass_logo_3.png',
          title: 'connpass',
          to: 'https://connpass.com/user/unix_yuto/'
        }
      ]
    }
  }
}
</script>

<style scoped>
.h2title{
  position: relative;
  left: 5%;
}
</style>
