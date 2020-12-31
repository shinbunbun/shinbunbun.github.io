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
          title: 'ポートフォリオサイト',
          tags: ['AWS', 'WebApp', 'Nuxt.js'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: '時間割bot',
          tags: ['AWS', 'LINE Bot', 'WebApp', 'Clova', 'Nuxt.js'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: '2019年度卒業生御祝いページ',
          tags: ['AWS', 'WebApp', 'Vue.js'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: '2019年文化祭投票システム',
          tags: ['AWS', 'WebApp', 'Vue.js'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: '2018年文化祭大賞投票bot',
          tags: ['AWS', 'LINE Bot'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: '2018年ミスコン投票bot',
          tags: ['AWS', 'LINE Bot'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: 'ぶんぶんの運行情報',
          tags: ['AWS', 'LINE Bot'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: 'URL短縮bot',
          tags: ['GAS', 'LINE Bot'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: 'お天気bot',
          tags: ['AWS', 'GAS'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: 'ぶんぶんの電車運行情報',
          tags: ['AWS', 'Clova', 'Alexa'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: 'ひな祭りの豆知識',
          tags: ['AWS', 'Clova', 'Alexa'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: 'トイレの音消し',
          tags: ['AWS', 'Clova', 'Alexa'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: '宿題終わってる？',
          tags: ['AWS', 'Clova'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: 'ぶんぶんのルーレット',
          tags: ['AWS', 'Alexa'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: '大晦日カウントダウン',
          tags: ['AWS', 'Alexa'],
          date: '2020/12/31'
        },
        {
          src: '/images/jikanwai-bot.png',
          title: '今日の太陽',
          tags: ['AWS', 'Alexa'],
          date: '2020/12/31'
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
