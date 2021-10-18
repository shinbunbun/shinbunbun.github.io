<template>
  <div>
    <div class="container">
      <div class="py-4" />
      <h1>About me</h1>

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
            <a href="https://twitter.com/shinbunbun_" target="blank" rel="noopener"><img v-lazy="`/images/twitter.png`" alt="twitter"></a>
            <a href="https://www.facebook.com/yuto.takamune.77/" target="blank" rel="noopener"><img v-lazy="`/images/facebook.png`" alt="facebook"></a>
            <a href="https://github.com/shinbunbun" target="blank" rel="noopener"><img v-lazy="`/images/GitHub-Mark-120px-plus.png`" alt="github"></a>
            <a href="https://qiita.com/shinbunbun_" target="blank" rel="noopener"><img v-lazy="`/images/favicon.png`" alt="qiita"></a>
            <a href="https://speakerdeck.com/shinbunbun_" target="blank" rel="noopener"><img v-lazy="`/images/speakerdeck.png`" alt="speaker deck"></a>
            <a href="https://scrapbox.io/shinbunbun" target="blank" rel="noopener"><img v-lazy="`/images/scrapbox.png`" alt="scrapbox"></a>
          </div>
        </div>

        <div class="py-2" />
        <div class="row self_introduce">
          <div class="col">
            <h3>自己紹介</h3>
            <br>
            <p>
              会津大学学部一年。中三の11月頃からプログラミングを始め、高二までは主にLINE Botを開発してきた。<br>
              高二の夏頃からはVue.jsを使ったWebアプリの開発をはじめ、文化祭の出展投票システムや時間割botのLIFFアプリなどを開発した。<br>
              フリーランスとして案件の受注もしており、Webアプリケーション開発などを行っている。<br>
              コミュニティ活動も高一から行っており、高二まではLINE Developer Communityを中心に活動していた。<br>
              最近の興味分野はアイデンティティ管理や認証系。<br>
              すごくなりたいがくせいぐるーぷ立ち上げメンバー兼運営。
            </p>
            <div class="py-2" />
            <div class="row">
              <h3>受賞歴</h3>
              <br>
              <p>
                <ul>
                  <li><a href="https://gsacademy.jp/hack-trek-2021/" target="_blank">Hack Trek 2021</a> 優勝</li>
                  <li><a href="https://hmcn.connpass.com/event/173233/" target="_blank">レッドハッカソン オンライン 2020</a> 奨励賞</li>
                  <li><a href="https://linedev.connpass.com/event/96834/" target="_blank">LINE BOOT AWARDS×サイボウズ ビジネス/ワーク部門賞狙いのハッカソン</a> LINE賞・サイボウズ賞</li>
                </ul>
              </p>
            </div>
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
              <h3>興味キーワード</h3>
              <br>
              <p>
                <ul>
                  <li>アイデンティティ管理/認証</li>
                  <ul>
                    <li>分散型アイデンティティ（SSI, DIDs, VCsなど）</li>
                    <li>FIDO2, WebAuthn</li>
                  </ul>
                  <li>インフラ, ネットワーク</li>
                  <li>テスト駆動開発</li>
                  <li>クリーンアーキテクチャ</li>
                </ul>
              </p>
            </div>
            <!-- <div class="row">
              <h3>研究分野</h3>
              <br>
              <p>
                <ul>
                  <li>Self-Sovereign Identity</li>
                  <li>Decentralized Identity</li>
                  <li>Verifiable Credentials</li>
                </ul>
              </p>
            </div> -->
            <div class="row">
              <h3>職歴</h3>
              <br>
              <p>
                <ul>
                  <li><a href="https://www.i-kasa.com/" target="blank_">株式会社 Nature Innovation Group（アイカサ）</a> バックエンド開発（2018年12月~2019年12月）</li>
                  <li><a href="https://yakan-hiko.co.jp/" target="blank_">株式会社夜間飛行</a> ホームページ/Webアプリケーション制作（2019年12月〜現在）</li>
                  <li><a href="https://lastrust.io/" target="blank_">LasTrust株式会社</a> インターンシップ（R&D） （2021年1月〜現在）</li>
                  <li><a href="https://about.yahoo.co.jp/" target="blank_">Yahoo Japan Corporation</a> インターンシップ（認証・アクセス制御に関するプロダクト開発） （2021年8月）</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div class="py-2" />
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
        <h4>AWS</h4>
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
      meta: {
        title: 'About me',
        description: 'しんぶんぶんとは',
        type: 'article',
        url: 'https://shinbunbun.info/about/',
        image: 'https://shinbunbun.info/images/ogp.png'
      },
      languages: [
        {
          src: '/images/nodejs-new-pantone-black.png',
          title: 'Node.js',
          to: 'https://nodejs.org/'
        },
        {
          src: '/images/ts.png',
          title: 'TypeScript',
          to: 'https://www.typescriptlang.org/'
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
          src: '/images/api-gateway.png',
          title: 'API Gateway',
          to: 'https://aws.amazon.com/jp/api-gateway/'
        },
        {
          src: '/images/Arch_AWS-Lambda_64@5x.png',
          title: 'Lambda',
          to: 'https://aws.amazon.com/jp/lambda/'
        },
        {
          src: '/images/Arch_Amazon-DynamoDB_64@5x.png',
          title: 'DynamoDB',
          to: 'https://aws.amazon.com/jp/dynamodb/'
        },
        {
          src: '/images/Arch_Amazon-S3-On-Outposts_Storage_64@5x.png',
          title: 'S3',
          to: 'https://aws.amazon.com/jp/s3/'
        },
        {
          src: '/images/Arch_Amazon-CloudFront_64@5x.png',
          title: 'CloudFront',
          to: 'https://aws.amazon.com/jp/cloudfront/'
        },
        {
          src: '/images/Arch_Amazon-Cognito_64@5x.png',
          title: 'Cognito',
          to: 'https://aws.amazon.com/jp/cognito/'
        },
        {
          src: '/images/Arch_Amazon-EC2_64@5x.png',
          title: 'EC2',
          to: 'https://aws.amazon.com/jp/ec2/'
        },
        {
          src: '/images/13742415.png',
          title: 'serverless',
          to: 'https://www.serverless.com/'
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
  padding-top: 10px;
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
