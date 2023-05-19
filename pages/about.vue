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
            <a href="https://www.line-community.me/ja/apiexpert/detail/61e4412669e9a522434aa06c" target="blank" rel="noopener"><img v-lazy="`/images/LAE_logo_7@2x.png`" alt="lae"></a>
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
              会津大学学部三年。中三の11月頃からプログラミングを始め、高二までは主にLINE Botを開発してきた。<br>
              高二の夏頃からはVue.jsを使ったWebアプリの開発をはじめ、文化祭の出展投票システムや時間割botのLIFFアプリなどを開発した。<br>
              フリーランスとして案件の受注もしており、Webアプリケーション開発などを行っている。<br>
              コミュニティ活動も高一から行っており、高二まではLINE Developer Communityを中心に活動していた。<br>
              現在はLINE認定の<a href="https://www.line-community.me/ja/apiexpert/detail/61e4412669e9a522434aa06c" target="_blank" rel="noopener noreferrer">LINE API Expert</a>として活動している。<br>
              最近の興味分野はアイデンティティ管理や認証系。<br>
              すごくなりたいがくせいぐるーぷ立ち上げメンバー兼運営。
            </p>
            <div class="py-2" />
            <div class="row">
              <h3>受賞歴</h3>
              <br>
              <p>
                <ul>
                  <li>2021/11/07 <a href="#">わたしたちのウェルビーイングのためのハッカソン2021</a> 富士通 つながる豊かさ賞</li>
                  <li>2021/10/09 <a href="https://ccc2021.code4japan.org/" target="blank" rel="noopener">Civictech Challenge Cup[U-22] 2021</a> Code for Japan賞</li>
                  <li>2021/02/28 <a href="https://gsacademy.jp/hack-trek-2021/" target="blank" rel="noopener">Epson Hack Trek 2021</a> 優勝</li>
                  <li>2020/05/24 <a href="https://hmcn.connpass.com/event/173233/" target="blank" rel="noopener">レッドハッカソン オンライン 2020</a> 奨励賞</li>
                  <li>2018/09/02 <a href="https://linedev.connpass.com/event/96834/" target="blank" rel="noopener">LINE BOOT AWARDS×サイボウズ ビジネス/ワーク部門賞狙いのハッカソン</a> LINE賞・サイボウズ賞</li>
                </ul>
              </p>
            </div>
            <div class="py-2" />
            <div class="row">
              <h3>著書</h3>
              <br>
              <p>
                <ul>
                  <li><a href="https://www.amazon.co.jp/dp/B08L4FPGNF" target="_blank" rel="noopener noreferrer">LINE API実践ガイド</a></li>
                  <ul>
                    <li>LINE API EXPERTを中心としたLINE Developer Communityメンバーの共著で執筆</li>
                    <li>私は「第二章 LINEログイン」を執筆した</li>
                  </ul>
                  <li><a href="https://techbookfest.org/product/3EUnJ5WbexvCDyMgSJS1qb" target="_blank" rel="noopener noreferrer">Hands-on LINEBOT（同人誌）</a></li>
                  <ul>
                    <li>技術書典13で頒布したLINEBotの入門書</li>
                  </ul>
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
                </ul>
              </p>
            </div>
            <div class="row">
              <h3>職歴</h3>
              <br>
              <p>
                <ul>
                  <li>2023/03~2023/04 <a href="https://mixi.co.jp/" target="_blank" rel="noopener noreferrer">株式会社MIXI</a> インターンシップ(CTO室たんぽぽグループ)</li>
                  <ul>
                    <li><a href="https://shinbunbun.hatenablog.jp/entry/mixi-intern" target="_blank" rel="noopener noreferrer">参加ブログ</a></li>
                  </ul>
                  <li>2022/09~2022/11 <a href="https://andpad.co.jp/" target="_blank" rel="noopener noreferrer">株式会社アンドパッド</a> インターンシップ</li>
                  <li>2022/03~2022/06 <a href="https://www.pixiv.co.jp/" target="_blank" rel="noopener noreferrer">ピクシブ株式会社</a> 長期インターンシップ（インフラ部SAチーム）</li>
                  <li>2022/02~2022/03 <a href="https://www.yumemi.co.jp/" target="blank" rel="noopener">株式会社ゆめみ</a> インターンシップ（Rustを使ったWebアプリケーション開発）</li>
                  <li>2021/08 <a href="https://about.yahoo.co.jp/" target="blank" rel="noopener">Yahoo Japan Corporation</a> インターンシップ（認証・アクセス制御に関するプロダクト開発）</li>
                  <li>2021/07~2022/03 <a href="https://thedott.io/" target="blank" rel="noopener">株式会社 dott</a> <a href="https://fukushima-covid19.web.app/" target="_blank" rel="noopener noreferrer">福島県新型コロナウイルス対策サイト</a>保守業務</li>
                  <li>2021/01~2021/05 <a href="https://lastrust.io/" target="blank" rel="noopener">LasTrust株式会社</a> インターンシップ（R&D）</li>
                  <li>2018/12~2019/12 <a href="https://www.i-kasa.com/" target="blank" rel="noopener">株式会社 Nature Innovation Group（アイカサ）</a> バックエンド開発</li>
                </ul>
              </p>
            </div>
            <div class="row">
              <h3>大学での活動</h3>
              <p>
                <table>
                  <tbody>
                    <tr v-for="collegeActivity in collegeActivities" :key="collegeActivity.description">
                      <td>{{ collegeActivity.date }}</td>
                      <td><a :href="collegeActivity.url" target="blank" rel="noopener">{{ collegeActivity.title }}</a>{{ collegeActivity.description }}</td>
                    </tr>
                  </tbody>
                </table>
              </p>
            </div>
          </div>
        </div>
        <div class="py-2" />
        <div class="skils">
          <h3>Skils</h3>
          <br>
          <h4>言語</h4>
          <p>
            ※それぞれの言語を選択すると、その言語で作成したプロダクトが表示されます。
          </p>
          <br>
          <ul>
            <li>
              <nuxt-link to="/products/?tag=Rust">
                Rust
              </nuxt-link>
            </li>
            <ul>
              <li>actix-web, askama, SeaORMを使ったアプリケーション開発</li>
            </ul>
          </ul>
          <ul>
            <li>
              <nuxt-link to="/products/?tag=Go">
                Go
              </nuxt-link>
            </li>
            <ul>
              <li>Go（Gin）を使ったサーバサイド開発</li>
              <li>AWS Lambdaを使ったサーバレス開発</li>
              <li>go test</li>
              <li>
                GitHub Actionsを用いたCIの構築（test, golangci-lintなど）
              </li>
            </ul>
            <li>
              <nuxt-link to="/products/?tag=Node.js">
                Node.js
              </nuxt-link>
            </li>
            <ul>
              <li>LINEBot開発</li>
              <li>Alexaスキル開発</li>
              <li>Clovaスキル開発</li>
              <li>AWS Lambdaを使ったサーバレス開発</li>
              <li>Expressを使ったサーバサイド開発</li>
            </ul>
            <li>
              <nuxt-link to="/products/?tag=TypeScript">
                TypeScript
              </nuxt-link>
            </li>
            <ul>
              <li>Nuxt.js, TypeScriptを組み合わせたフロントエンド開発</li>
            </ul>
            <li>C++</li>
            <ul>
              <li><a href="https://atcoder.jp/users/shinbunbun" target="blank" rel="noopener">競技プログラミング</a></li>
            </ul>
          </ul>
          <!-- <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1">
            <HomeCard v-for="language in languages" :key="language.title" :data="language" />
          </div> -->
          <br>
          <h4>フロントエンドフレームワーク</h4>
          <br>
          <ul>
            <li>
              <nuxt-link to="/products/?tag=Vue.js">
                Vue.js
              </nuxt-link>
            </li>
            <ul>
              <li>SPA（single-page application）開発（ホスティング先はAmazon S3&CloudFront, GitHub Pages, Cloudflare Pagesなど）</li>
            </ul>
            <li>
              <nuxt-link to="/products/?tag=Nuxt.js">
                Nuxt.js
              </nuxt-link>
            </li>
            <ul>
              <li>SSG（Static Site Generator）による静的Webアプリケーション開発（ホスティング先はAmazon S3&CloudFront, GitHub Pages, Cloudflare Pagesなど）</li>
            </ul>
            <li>
              <nuxt-link to="/products/?tag=Bootstrap">
                Bootstrap
              </nuxt-link>
            </li>
            <ul>
              <li>Vue.js, Nuxt.jsと組み合わせたフロントエンド開発</li>
            </ul>
            <li>
              <nuxt-link to="/products/?tag=Vuetify">
                Vuetify
              </nuxt-link>
            </li>
            <ul>
              <li>Vue.js, Nuxt.jsと組み合わせたフロントエンド開発</li>
            </ul>
            <li>
              React.js
            </li>
          </ul>
          <!-- <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1">
            <HomeCard v-for="framework in frameworks" :key="framework.title" :data="framework" />
          </div> -->
        </div>
        <br>
        <h4>
          <nuxt-link to="/products/?tag=AWS">
            AWS
          </nuxt-link>
        </h4>
        <br>
        <ul>
          <li>API Gateway, Lambda, DynamoDBを用いたサーバレス開発</li>
          <li>serverless flameworkを用いたデプロイ</li>
          <li>S3, CloudFront, ACMを用いた静的ホスティング</li>
          <li>EC2, ELB, VPCなどの環境構築</li>
          <li>Lightsailを用いたサーバサイド開発</li>
          <li>Lambda, SESを組み合わせたメール配信</li>
          <li>Route53を用いたDNS設定</li>
          <li>Cognito, API Gateway, Lambdaを用いたユーザー認証及びAPI認証</li>
        </ul>
        <p>etc...</p>
        <!-- <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1">
          <HomeCard v-for="cloud in clouds" :key="cloud.title" :data="cloud" />
        </div> -->
        <br>
        <h4>その他</h4>
        <br>
        <ul>
          <li>
            <nuxt-link to="/products/?tag=CI/CD">
              GitHub Actionsを用いたCI/CDの構築
            </nuxt-link>
          </li>
          <li>OpenID Connect RPの実装</li>
          <li>FIDO2(Web Authentication API)を用いたユーザー認証アプリケーションの実装</li>
        </ul>
        <p>etc...</p>
        <!-- <div class="row row-cols-md-4 row-cols-sm-2 row-cols-1">
          <HomeCard v-for="other in others" :key="other.title" :data="other" />
        </div> -->
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
      collegeActivities: [
        {
          date: '2022/04~',
          url: 'https://blog.ascs.dev/',
          title: 'Zli',
          description: ' 副代表'
        },
        {
          date: '2021/09~2022/03',
          url: 'https://blog.ascs.dev/',
          title: 'Aizu Student Creators（ASCs）',
          description: '代表'
        },
        {
          date: '2021/08',
          url: 'https://www.u-aizu.ac.jp/sgu/honors_program/discovery_program/',
          title: '会津大学オナーズプログラム異彩発掘型',
          description: ' 認定'
        },
        {
          date: '2021/06~08',
          url: 'https://blog.ascs.dev/posts/aizuhack-1/',
          title: 'AizuHack',
          description: '（勉強会付きハッカソン）主催'
        },
        {
          date: '2021/04~',
          url: 'https://zli.works/',
          title: 'Zli',
          description: '（LTサークル） 運営メンバー'
        }
      ],
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
table{
  border: none;
}
td{
  padding-right: 5px;
}

@media screen and (min-width: 768px) {
  .sns-image-container a > img:hover {
    transform: scale(1.1);
    transition: 0.1s;
  }
}
</style>
