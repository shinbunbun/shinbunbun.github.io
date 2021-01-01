<template>
  <div>
    <MyHeader />

    <div class="container">
      <div class="py-4" />
      <h1>Products</h1>

      <div class="py-4" />

      <div class="row row-cols-md-4 row-cols-2">
        <ProductCard v-for="product in products" :key="product.title" :data="product" @openModal="openModal" />
      </div>
    </div>

    <ProductModal ref="ProductModal" :data="choseProduct" />

    <MyFooter />
  </div>
</template>

<script>
// eslint-disable-next-line semi
export default {
  data() {
    return {
      modal: false,
      choseProduct: {},
      products: [
        {
          src: '/images/jikanwai-bot.png',
          title: 'ポートフォリオサイト',
          tags: ['AWS', 'WebApp', 'Nuxt.js'],
          date: '2020/12/31',
          github: 'https://github.com/shinbunbun/portfolio',
          webapp: 'https://shinbunbun.info',
          description: `2020年12月〜2021年1月にかけて制作。
          高校一年生の頃から使っていたポートフォリオサイトが一つあったのだが、EC2のパーミッションをミスってSSHもFTPも入れなくなってしまい、1年ほど放置していた。
          さすがにそのままはよくないなーと思い、Nuxt.jsとBootstrap5を使って新しいポートフォリオサイト（これ）を制作した。
          GitHub Pagesにホスティングしている。
          `
        },
        {
          src: '/images/jikanwai-bot.png',
          title: '時間割bot',
          tags: ['AWS', 'LINE Bot', 'WebApp', 'Clova', 'Nuxt.js'],
          date: '2020/12/31',
          youtube: 'https://www.youtube.com/embed/8OPSW_0tWmU',
          github: 'https://github.com/shinbunbun/jikanwari-bot',
          qiita: 'https://qiita.com/shinbunbun_/items/00c4064c8133a34cf7c3',
          webapp: 'jikanwari-bot.shinbunbun.info',
          linebot: 'https://line.me/R/ti/p/%40ywg0561x',
          clova: 'https://clova.line.me/clova-ai/skillstore/skill/com.takamuneyuto.skill.second',
          description: `2018年夏に制作。
          友達追加数2739人（2021/01/01現在）。
          LINEで時間割を確認できるLINE Bot。
          「今日の時間割」、「明日の時間割」などを確認できるほか、毎日指定した時間に時間割を通知してくれる機能もある。
          「時間割共有機能」もあり、同じクラスの友達内で時間割の共有ができる。
          グループでの使用も可能。
          Clovaスキル版、LIFFアプリ版もある。`
        },
        {
          src: '/images/jikanwai-bot.png',
          title: '2019年度卒業生御祝いページ',
          tags: ['AWS', 'WebApp', 'Vue.js'],
          date: '2020/12/31',
          description: `2020年3月に制作。
          卒業する文化祭執行部の先輩に向けて、今までの文化祭の写真が見れるサイトを作った。
          フロントエンドはVue.jsとBootstrap4で作成し、S3&CloudFrontへホスティング。
          バックエンドはLambdaを使用し、認証はCognitoとAmplifyを使用した。
          また、PWAも実装した。
          `
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
  },

  methods: {
    openModal(data) {
      this.choseProduct = data
      this.$refs.ProductModal.openModal()
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
