<template>
  <div>
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

        <div class="py-2" />
        <div class="sns-icons row text-center">
          <div class="col sns-image-container">
            <a href="https://twitter.com/shinbunbun_" target="blank" rel=“noopener”><img v-lazy="`/images/twitter.png`" alt="twitter" /></a>
            <a href="https://www.facebook.com/yuto.takamune.77/" target="blank" rel=“noopener”><img v-lazy="`/images/facebook.png`" alt="facebook" /></a>
            <a href="https://github.com/shinbunbun" target="blank" rel=“noopener”><img v-lazy="`/images/GitHub-Mark-120px-plus.png`" alt="github" /></a>
            <a href="https://qiita.com/shinbunbun_" target="blank" rel=“noopener”><img v-lazy="`/images/favicon.png`" alt="qiita" /></a>
            <a href="https://speakerdeck.com/shinbunbun_" target="blank" rel=“noopener”><img v-lazy="`/images/speakerdeck.png`" alt="speaker deck" ></a>
          </div>
        </div>

        <div class="py-2" />
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
            <div class="py-2" />
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
            <div class="py-2" />
            <div class="row">
              <h3>研究分野</h3>
              <br>
              <p>
                <ul>
                  <li>Self-Sovereign Identity</li>
                  <li>Decentralized Identity</li>
                  <li>Verifiable Credentials</li>
                </ul>
              </p>
            </div>
            <!--<div class="row">
              <h3>仕事</h3>
              <br>
              <p>
                <ul>
                  <li>アイカサ バックエンド開発（2018年12月~2019年12月）</li>
                  <li>株式会社夜間飛行 ホームページ制作案件受注（2019年12月〜現在）</li>
                  <li><a href="https://lastrust.io/" target="blank_">LasTrust株式会社 インターンシップ（R&D） （2020年12月〜現在）</a></li>
                </ul>
              </p>
            </div>-->
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
  </div>
</template>

<script>
// eslint-disable-next-line semi
export default {
  data() {
    return {
      languages: [
        {
          src: '/images/nodejs-new-pantone-black.png',
          title: 'Node.js',
          to: 'https://nodejs.org/'
        }/*,
        {
          src: '/images/HTML5_Logo_512.png',
          title: 'HTML5',
          to: 'https://html.spec.whatwg.org/multipage/'
        } */
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
          to: 'https://getbootstrap.com/'
        },
        {
          src: '/images/vuetify.png',
          title: 'Vuetify',
          to: 'https://vuetifyjs.com/'
        }
      ],
      clouds: [
        {
          src: '/images/aws.png',
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
          src: '/images/oidc.png',
          title: 'OpenID Connect',
          to: 'https://openid.net/connect/'
        }
      ]
    }
  },
  created() {
    // https://qiita.com/ksyunnnn/items/bfe2b9c568e97bb6b494
    /* const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
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
      }) */
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
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
.sns-image-container a {
  margin: 0 10px;
}
.sns-image-container a > img {
  width: 40px;
  transition: 0.1s;
}
.border{
  padding: 20px;
}
.sns-icons img{
  width: 50px;
}

@media screen and (min-width: 768px) {
  .sns-image-container a > img:hover {
    transform: scale(1.1);
    transition: 0.1s;
  }
}
</style>

<style>
/*.AWS img{
  width: 80%;
  height: 80%;
  object-fit: cover;
}*/
</style>
