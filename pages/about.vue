<template>
  <div>
    <MyHeader />

    <div class="container">
      <div class="py-4" />
      <h1>About Me</h1>

      <div class="py-4" />

      <div class="border rounded">
        <div class="row title">
          <div class="col-12 img_container">
            <img src="/images/VjftF494_400x400.jpg" class="rounded-circle profile_img" alt="">
          </div>
          <div class="col-12 title_container">
            <div class="py-3" />
            <h1>しんぶんぶん</h1>
            <h2 class="h2title">
              （高棟 雄斗）
            </h2>
          </div>
        </div>
        <div class="py-4" />
        <div class="row self_introduce">
          <div class="col">
            <h3>自己紹介</h3>
            <br>
            <p>
              ただの高三。中三の11月頃からプログラミングを始め、主にLINE Botを開発。中でも時間割botは友達追加数2700人超えの人気サービスとなった。<br>
              高二の夏頃からはVue.jsを使ったWebアプリの開発をはじめ、文化祭の出展投票システムや時間割botのLIFFアプリなどを開発した。<br>
              フリーランスとして案件の受注もしており、ホームページ制作、LINE APIを使ったアプリケーションの開発などを行っている。<br>
              AWSが好きで、ほとんどのアプリケーションをLambda & DynamoDB & S3 & CloudFrontのサーバレスアーキテクチャで構築している。<br>
              コミュニティ活動も高一から行っており、主にLINE Developer Communityを中心に活動している。<br>
              すごくなりたいがくせいぐるーぷ運営メンバー。
            </p>
            <div class="py-4" />
            <div class="row">
              <h3>保有資格</h3>
              <br>
              <p>
                <ul>
                  <li>情報セキュリティマネジメント試験（2018年春合格）</li>
                  <li>応用情報技術者試験（2019年春合格）</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div class="py-4" />
        <div class="skils">
          <h3>Skils</h3>
          <br>
          <h4>言語</h4>
          <br>
          <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1">
            <HomeCard v-for="language in languages" :key="language.title" :data="language" />
          </div>
          <br>
          <h4>フロントエンドフレームワーク</h4>
          <br>
          <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1">
            <HomeCard v-for="framework in frameworks" :key="framework.title" :data="framework" />
          </div>
        </div>
        <br>
        <h4>クラウド</h4>
        <br>
        <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1">
          <HomeCard v-for="cloud in clouds" :key="cloud.title" :data="cloud" />
        </div>
        <br>
        <h4>その他</h4>
        <br>
        <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1">
          <HomeCard v-for="other in others" :key="other.title" :data="other" />
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
      languages: [
        {
          src: '/images/nodejs-new-pantone-black.jpg',
          title: 'Node.js',
          to: 'https://nodejs.org/'
        },
        {
          src: '/images/HTML5_Logo_512.png',
          title: 'HTML5',
          to: 'https://html.spec.whatwg.org/multipage/'
        }
      ],
      frameworks: [
        {
          src: '/images/vue.png',
          title: 'Vue.js',
          to: 'https://vuejs.org/'
        },
        {
          src: '/images/nuxt-icon.png',
          title: 'Nuxt.js',
          to: 'https://nuxtjs.org/'
        },
        {
          src: '/images/bootstrap-solid.svg',
          title: 'Bootstrap4, 5',
          to: 'https://nuxtjs.org/'
        }
      ],
      clouds: [
        {
          src: '',
          title: 'AWS',
          to: 'https://aws.amazon.com/'
        }
      ],
      others: [
        {
          src: '/images/GitHub-Mark-120px-plus.png',
          title: 'GitHub Actions',
          to: 'https://github.co.jp/features/actions'
        },
        {
          icon: 'lock',
          title: 'OpenID Connect',
          to: 'https://openid.net/connect/'
        }
      ]
    }
  },
  created() {
    // https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
    const url = CORS_PROXY + 'https://aws.amazon.com/jp/'

    fetch(url)
      .then(res => res.text())
      .then((text) => {
        const el = new DOMParser().parseFromString(text, 'text/html')
        const headEls = el.head.children
        Array.from(headEls).map((v) => {
          const prop = v.getAttribute('property')
          if (!prop) { return }
          if (prop === 'og:image') {
            this.$set(this.clouds[0], 'src', v.getAttribute('content'))
          }
        })
      })
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
.border{
  padding: 20px;
}
.container p{
  font-size: 110%;
}
</style>

<style>
/*.AWS img{
  width: 80%;
  height: 80%;
  object-fit: cover;
}*/
</style>
