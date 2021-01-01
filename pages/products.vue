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
          github: 'https://github.com/shinbunbun/2019_graduate',
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
          date: '2020/12/31',
          twitterId: '1179361752951250944',
          github: 'https://github.com/shinbunbun/vote-system-2019',
          qiita: 'https://qiita.com/shinbunbun_/items/b6f69cf931eb17eed69b',
          webapp: 'https://vote-test.shinbunbun.info/',
          description: `2019年夏に制作。
          文化祭の出展投票をWebからできるシステム。
          2018年はLINEBotを使ったが、2019年はVue.jsを使用してWebアプリを作った。
          フロント側はVue.jsとBootstrap4で作り、S3&CloudFrontにホスティング。
          バックエンドはLambdaを使用し、DBはDynamoDBを使用した。`
        },
        {
          src: '/images/jikanwai-bot.png',
          title: '2018年文化祭大賞投票bot',
          tags: ['AWS', 'LINE Bot'],
          date: '2020/12/31',
          youtube: 'https://www.youtube.com/embed/urwlANazl-s',
          qiita: 'https://qiita.com/shinbunbun_/items/af55e35888c441a5b878',
          description: `2018年夏に制作。
          文化祭の出展投票をLINE Botからできるシステム。
          1000人以上の方に追加して頂いた。
          投票番号を入力するとFlexMessageで該当する出展の詳細が表示される。
          投票ボタンを押すと確認のボタンが送られてくるので、「はい」を押すと投票が完了する。

          最初はGAS&スプレッドシートを使用して作っていたが、本番1週間前に行った負荷テストで高トラフィックに耐えられないことがわかり、3日かけて死に物狂いでLambda&DynamoDBに移行した。
          当日はDynamoDBのキャパシティユニットを40に設定するなどして高負荷対策を行ったが、蓋を開けてみると3で十分な程度の負荷しかかからなかった。
          `
        },
        {
          src: '/images/jikanwai-bot.png',
          title: '2018年ミスコン投票bot',
          tags: ['AWS', 'LINE Bot'],
          date: '2020/12/31',
          youtube: 'https://www.youtube.com/embed/mQTMMxiH_y8',
          linebot: 'https://line.me/R/ti/p/%40awj3413y',
          description: `2018年春製作。僕が通っている高校は男子校だが文化祭でミスコンがある。その投票システムを制作した。
          リッチメニューの「投票」ボタンを押すと立候補者一覧のFlexMessageが表示される。
          投票したい候補者を選択すると確認のボタンが送られてくるので、「はい」を押すと投票が完了する。

          こちらも文化祭大賞投票botと同様に最初はGAS&スプレッドシートを使用して作っていたが、本番1週間前に行った負荷テストで高トラフィックに耐えられないことがわかり、3日かけて死に物狂いでLambda&DynamoDBに移行した。
          当日はDynamoDBのキャパシティユニットを40に設定するなどして高負荷対策を行ったが、蓋を開けてみると5で十分な程度の負荷しかかからなかった。

          上記の友達追加ボタンは、テスト用に作成した航空会社の投票botの追加リンク。これはGAS&スプレッドシートで動いている。
          `
        },
        {
          src: '/images/jikanwai-bot.png',
          title: 'ぶんぶんの運行情報bot',
          tags: ['AWS', 'LINE Bot'],
          date: '2020/12/31',
          youtube: 'https://www.youtube.com/embed/j_ET-VkRlNo',
          linebot: 'https://line.me/R/ti/p/%40buo7278w',
          description: `2018年9月製作。友達追加数162人(2021/1/1現在)
          運行情報を検索したい路線名を送信するとその路線の運行情報を返信する。
          Clovaスキルとも紐づいており、Clovaスキルで路線を検索した際にその路線が遅延・運休していたら、botがその路線の詳細な運行情報へのリンクを送信してくれる。

          GASで動いており、電車運行情報は鉄道遅延情報のjson（https://rti-giken.jp/fhc/api/train_tetsudo/）から取得している。
          `
        },
        {
          src: '/images/jikanwai-bot.png',
          title: 'URL短縮bot',
          tags: ['GAS', 'LINE Bot'],
          date: '2020/12/31',
          youtube: 'https://www.youtube.com/embed/BZ8KkrT5sHU',
          linebot: 'https://line.me/R/ti/p/%40shr5133j',
          description: `2018年9月製作。
          URLを送信するとそのURLの短縮URLを作成する。

          GASで動いており、bitlyのAPIを叩いて短縮URLを作成している。
          `
        },
        {
          src: '/images/jikanwai-bot.png',
          title: 'お天気bot',
          tags: ['AWS', 'GAS'],
          date: '2020/12/31',
          youtube: 'https://www.youtube.com/embed/YOY9ii2-aRI',
          qiita: 'https://qiita.com/shinbunbun_/items/23e2100abbe0fcd0274c',
          github: 'https://github.com/shinbunbun/Weather-bot',
          linebot: 'https://line.me/R/ti/p/%40unq9376d',
          description: `2018年10月製作。
          郵便番号を送信すると、その地域の3時間毎の天気予報をFlexMessageで返信してくれる。

          GASで動いており、OpenWeatherMapのAPIを使用している。
          OpenWeatherMapのサイトで閲覧する天気予報とAPIで取得する天気予報が違うなどの不可解な点は少しあるが、無料枠でもそこそこ使えるので結構便利。
          `
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
/*.container p{
  font-size: 110%;
}*/
</style>
