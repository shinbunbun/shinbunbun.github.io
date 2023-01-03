<template>
  <div>
    <div class="container">
      <div class="py-4" />
      <h1>Products</h1>
      <p>最終更新: 2023/01</p>

      <div class="py-4" />

      <p>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          ▽絞り込み
        </button>
      </p>
      <div id="collapseExample" class="collapse">
        <div class="card card-body tags-card">
          <span v-for="tag in tags" :key="tag">
            <label class="form-check-label rounded" :class="`label-${tag}`" :for="`check-${tag}`">
              <input
                :id="`check-${tag}`"
                type="checkbox"
                class="form-check-input"
                value=""
                :checked="narrowDownTags.includes(tag)"
                @change="changeCheckBox(tag)"
              >
              {{ tag }}
            </label>
          </span>
          <div>
            <br>
            <button class="btn btn-primary" @click="allCheck('on')">
              全選択
            </button>
            <button class="btn btn-danger" @click="allCheck('off')">
              全選択解除
            </button>
          </div>
          <div class="py-1" />
          <p>※チェックを入れたタグが1つでも含まれている作品が表示されます</p>
        </div>
      </div>

      <!--<button type="button" class="btn btn-info" data-toggle="collapse" data-target="#option">
        click me
      </button>

      <div id="option" class="collapse">
        <div class="form-check">
          <input id="aws" class="form-check-input" type="checkbox" value="">
          <label class="form-check-label" for="aws">
            AWS
          </label><input id="webapp" class="form-check-input" type="checkbox" value="">
          <label class="form-check-label" for="webapp">
            WebApp
          </label>
          <input id="nuxt.js" class="form-check-input" type="checkbox" value="">
          <label class="form-check-label" for="aws">
            AWS
          </label>
        </div>
      </div>-->

      <div class="py-2" />

      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
        <ProductCard
          v-for="product in products"
          :key="product.title"
          class="col"
          :data="product"
          :narrow-down-tags="narrowDownTags"
          @openModal="openModal"
        />
      </div>
    </div>

    <ProductModal ref="ProductModal" :data="choseProduct" />
  </div>
</template>

<script>
// eslint-disable-next-line semi
export default {
  data() {
    return {
      meta: {
        title: 'Products',
        description: '制作物一覧',
        type: 'article',
        url: 'https://shinbunbun.info/products/',
        image: 'https://shinbunbun.info/images/ogp.png'
      },
      modal: false,
      choseProduct: {},
      tags: ['WebApp', 'LINE Bot', 'Go', 'Node.js', 'TypeScript', 'Nuxt.js', 'Vue.js', 'Bootstrap', 'Vuetify', 'AWS', 'serverless', 'CI/CD', 'GAS', 'Clova', 'Alexa', 'IoT', 'Network', 'Others', 'Elm'],
      narrowDownTags: ['WebApp', 'LINE Bot', 'Go', 'Node.js', 'TypeScript', 'Nuxt.js', 'Vue.js', 'Bootstrap', 'Vuetify', 'AWS', 'serverless', 'CI/CD', 'GAS', 'Clova', 'Alexa', 'IoT', 'Network', 'Others', 'Elm'],
      products: [
        {
          src: '/images/elm-liff-sample.png',
          title: 'Elm製LIFFアプリ',
          tags: ['Elm', 'CI/CD'],
          date: '2022年2月',
          github: 'https://github.com/shinbunbun/elm-liff-sample',
          webapp: 'https://shinbunbun.info/elm-liff-sample',
          description: `
         <a href="https://developers.line.biz/ja/docs/liff/overview/" target="blank" rel="noopener">LINE Frontend-framework</a>をElmで実装した
          `
        },
        {
          src: '/images/elm-todo-app.png',
          title: 'Elm製ToDoアプリ',
          tags: ['Elm'],
          date: '2022年2月',
          github: 'https://github.com/shinbunbun/elm-todo-app',
          description: `
         関数型パラダイムを学ぶためにElmで作成したToDoアプリ。
         追加、表示、削除の最低限の機能しかない。
          `
        },
        {
          src: '/images/ubic-food-management-api-v2.png',
          title: 'UBIC食材管理APIv2',
          tags: ['Go', 'AWS', 'CI/CD'],
          date: '2022年1月',
          github: 'https://github.com/shinbunbun/ubic-food-management-api-v2',
          slide: 'https://speakerdeck.com/shinbunbun_/ubicfalseshi-cai-guan-li-apiwozuo-tutahua',
          description: `
         大学のUBICという施設に備蓄しているカップ麺などの食料を管理するためのシステム。
         前述のUBIC食材管理APIの開発に頓挫したため、1人で1から作り直した。
         Go, AWS(Lambda, API Gateway, DynamoDB, S3, SAM), LINEログイン, Swagger, Docker, GitHub Actionsなど、色々てんこもりで使っている。
         テストを回すためにローカルでLambdaやDynamoDB, S3を立てられるDockerを作るなど、結構大変だった。
          `
        },
        {
          src: '/images/matumoto.png',
          title: 'まつもとせんぱーい',
          tags: ['Node.js', 'AWS', 'serverless'],
          date: '2021年11月',
          github: 'https://github.com/shinbunbun/matsumoto-tweet',
          slide: 'https://speakerdeck.com/shinbunbun_/matumotosenpai-wozi-dong-hua-sitemita',
          description: `
         LT登壇2時間前にネタがないことに気づいたため、iPhoneのショートカットから「まつもとせんぱーい」とツイートするだけのプログラムをNode.jsで作った。
         serverlessフレームワークを用いてAWS Lambdaにデプロイしている。
          `
        },
        /* {
          src: '/images/bookommune.png',
          title: 'bookommune',
          tags: ['Go', 'WebApp', 'Nuxt.js', 'Bootstrap', 'CI/CD'],
          date: '2021年11月',
          github: 'https://github.com/shinbunbun/wb-hackathon-2021',
          description: `
         「わたしたちのウェルビーイングのためのハッカソン2021」で「富士通 つながる豊かさ賞」を受賞した作品。
         自分の今の気持ちを入力すると、その感情を解析しておすすめの本をリコメンドするというプロダクト。
         自分は主にCI/CDの構築とバックエンド（Go）を担当した。
         フロントエンドはチームメンバーがNuxt.jsで実装し、自分も少しサポートに入った。
          `
        }, */
        {
          src: '/images/dawn.png',
          title: 'DAWN',
          tags: ['Go', 'CI/CD', 'AWS'],
          date: '2021年10月',
          github: 'https://github.com/jphacks/A_2108',
          description: `
         JPHACKS 2021で作成したプロダクト。
         コンセプトは「旅行に行きたいと思った瞬間に、その人にとって最適な旅行にすぐに行ける仕組みを創ること」で、旅行プランのCtoCプラットフォームになっている。
         フロントエンドはAndroid、バックエンドはGoで実装した。
         インフラはAWSのLightsailを使って構築し、DBはMySQLを使用した。
         私は主にJWTを使った認証周りやAPIの実装、インフラ構築、CI/CD構築を担当した。
          `
        },
        {
          src: '/images/ubic-stock-management-api.png',
          title: 'UBIC在庫管理API',
          tags: ['Go', 'CI/CD', 'AWS', 'serverless'],
          date: '2021年10月',
          github: 'https://github.com/shinbunbun/ubic-stock-management-api',
          description: `
         前述の「UBIC在庫管理Bot」をクロスプラットフォームで使えるようにするためにREST API化したもの。
         先輩と2人で開発した。
         バックエンドはGoで書き、GitHub Actions, serverlessを使ってCI/CDを構築した。
         テスト駆動開発、ドメイン駆動設計、クリーンアーキテクチャを意識しながら開発を行った。
         JWTを使ったAPI認証を実装しているのがこだわりポイント（というか、実装してて一番楽しかった）。
         現在開発中（2021/11/16現在）。
         追記: 開発は頓挫したので未完成
          `
        },
        {
          src: '/images/ubic-stock-management-bot.png',
          title: 'UBIC在庫管理Bot',
          tags: ['Node.js', 'AWS', 'LINE Bot', 'serverless', 'CI/CD'],
          date: '2021年7月',
          github: 'https://github.com/shinbunbun/ubic-food-stock-management',
          description: `
         大学のUBICという施設にある備蓄食料を管理するLINEBot。
         バックエンドはAWS LambdaとNode.jsを使ったサーバレスアーキテクチャで構築し、GitHub Actions, serverlessフレームワークを使ってデプロイしている。
          `
        },
        {
          src: '/images/ubic-notify.png',
          title: 'UBIC帰宅通知Bot',
          tags: ['Node.js', 'AWS', 'LINE Bot', 'serverless', 'CI/CD', 'IoT'],
          date: '2021年6月',
          github: 'https://github.com/shinbunbun/ubic-bot',
          qiita: 'https://qiita.com/shinbunbun_/items/215f3f0b022c2ea06ae3',
          description: `
          学校にあるUBICという施設に最近よく住んでいるのですが、UBICに帰宅したらSlackへ通知が飛ぶシステム欲しいなーと思い作ってみました。
          LINE Simple Beaconとmicro:bitを使い、自分のiPhoneがBLEの電波圏内に入ったらSlackへ通知がシステムになっており、バックエンドはAWS Lambdaを使用しています。
          `
        },
        {
          src: '/images/ubic-raspi.jpg',
          title: 'UBICネットワークプロジェクト',
          tags: ['Network'],
          date: '2021年5月',
          scrapbox: 'https://scrapbox.io/shinbunbun/UBIC%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88',
          slide: 'https://speakerdeck.com/shinbunbun_/ubicnetutowakupuroziekutonituite',
          description: `2021年5月〜製作中。
          会津大学にあるUBICという施設にラズパイを7台設置してネットワークの実験をするプロジェクト。
          先輩方の力を借りながらコアメンバー3人ほどで進行中。
          現在は全機にGentoo Linuxをインストールし、ホスト2台からnode5台をネットブートするという構成で運用している。
          試験的にdistccの分散コンパイルも実装しており、将来的にはk3sのクラスタなどを構築する予定。
          `
        },
        {
          src: '/images/vpn.png',
          title: 'ご自宅VPN関連システム',
          tags: ['Network'],
          date: '2021年5月',
          slide: 'https://docs.google.com/presentation/d/1WyGyQrJ1eFJu3ZrbJx6lbRwu3UfohVCFO9bdVaIfckI/edit?usp=sharing',
          description: `2021年3月〜2021年5月にかけて制作。
          VPNを用いたリモート開発システムを構築した。
          NAT越えなど色々ハードルはあったものの、現在はIntel NUCを使って快適なリモート開発を行っている。
          `
        },
        {
          src: '/images/catenary.png',
          title: 'Catenary',
          tags: ['TypeScript', 'CI/CD'],
          date: '2021年2月',
          github: 'https://github.com/sgg-catenary/catenary',
          description: `
         「Epson Hack Trek 2021」で優勝したプロダクト。
         コロナで放課後の時間が失われたことに着想を得て、放課後先生にオンラインで質問ができるサービスを開発した。
         このプロダクトはハッカソン終了後、Epson社協力のもと実証実験に向けてユーザーヒアリングなどを行なっていたが、現在は開発を休止している。
         自分は代表を務め、PMやユーザーヒアリング、ビジネルモデルの検討などを担当した。
          `
        },
        {
          src: '/images/portfolio.png',
          title: 'ポートフォリオサイト',
          tags: ['AWS', 'WebApp', 'Nuxt.js', 'Bootstrap'],
          date: '2021年1月',
          github: 'https://github.com/shinbunbun/portfolio',
          webapp: 'https://shinbunbun.info',
          description: `2020年12月〜2021年1月にかけて制作。
          高校一年生の頃から使っていたポートフォリオサイトが一つあったのだが、EC2のパーミッションをミスってSSHもFTPも入れなくなってしまい、1年ほど放置していた。
          が、さすがにそのままはよくないなーと思い、Nuxt.jsとBootstrap5を使って新しいポートフォリオサイト（これ）を制作した。
          GitHub Pagesにホスティングしている。
          `
        },
        {
          src: '/images/jikanwai-bot.png',
          title: '時間割bot',
          tags: ['AWS', 'LINE Bot', 'WebApp', 'Clova', 'Nuxt.js', 'Node.js', 'serverless', 'Vuetify', 'CI/CD'],
          date: '2018年8月(LINE Bot版)',
          youtube: 'https://www.youtube.com/embed/8OPSW_0tWmU',
          github: 'https://github.com/shinbunbun/jikanwari-bot',
          qiita: 'https://qiita.com/shinbunbun_/items/00c4064c8133a34cf7c3',
          webapp: 'https://jikanwari-bot.shinbunbun.info',
          linebot: 'https://line.me/R/ti/p/%40ywg0561x',
          clova: 'https://clova.line.me/clova-ai/skillstore/skill/com.takamuneyuto.skill.second',
          description: `2018年夏に制作。
          友達追加数3399人（2021/11/17現在）で、一番の人気作。
          LINEで時間割を確認できるLINE Bot。
          「今日の時間割」、「明日の時間割」などを確認できるほか、毎日指定した時間に時間割を通知してくれる機能もある。
          「時間割共有機能」もあり、同じクラスの友達内で時間割の共有ができる。
          グループでの使用も可能。
          Clovaスキル版、LIFFアプリ版もある。
          現在も継続的に改修をしている。
          `
        },
        {
          src: '/images/2019graduate.png',
          title: '2019年度卒業生お祝いページ',
          tags: ['AWS', 'WebApp', 'Vue.js', 'Node.js', 'Bootstrap'],
          date: '2020年3月',
          github: 'https://github.com/shinbunbun/2019_graduate',
          description: `2020年3月に制作。
          卒業する文化祭執行部の先輩に向けて、今までの文化祭の写真が見れるサイトを作った。
          フロントエンドはVue.jsとBootstrap4で作成し、S3&CloudFrontへホスティング。
          バックエンドはLambdaを使用し、認証はCognitoとAmplifyを使用した。
          また、PWAも実装した。
          `
        },
        {
          src: '/images/2019votesystem.png',
          title: '2019年文化祭投票システム',
          tags: ['AWS', 'WebApp', 'Vue.js', 'Node.js', 'Bootstrap'],
          date: '2019年9月',
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
          src: '/images/huro.jpg',
          title: '風呂のボタン押すやつ',
          tags: ['IoT', 'AWS', 'LINE Bot', 'Node.js'],
          date: '2019年5月',
          twitterId: '1125212225914818560',
          qiita: 'https://qiita.com/shinbunbun_/items/d4dcf2e3ce96c041e9d5',
          github: 'https://github.com/shinbunbun/huro',
          description: `2019年5月制作。
          LINE Botから風呂のボタンを押せる装置。
          帰宅前にボタンを押しておくと、帰宅する頃には風呂がわいている。
          最高。
          ちなみにLightsailの維持コストの関係で現在は停止中。
          `
        },
        {
          src: '/images/tmp.jpg',
          title: '気温チェッカー',
          tags: ['IoT'],
          date: '2019年6月',
          twitterId: '1138749064810356736',
          qiita: 'https://qiita.com/shinbunbun_/items/86cdd013a4abdf5ff49a',
          description: `2019年6月製作。
          祖母の熱中症対策で、気温が30度を超えたらLEDがチカチカする装置を作った。
          IoTのタグがついているが、Internetにつながってないので厳密にはIoTではない。
          `
        },
        {
          src: '/images/pushtool.png',
          title: 'Push Message送信ツール',
          tags: ['WebApp', 'Node.js', 'Bootstrap'],
          date: '2019年3月',
          github: 'https://github.com/shinbunbun/Sending-Push-Message',
          qiita: 'https://qiita.com/shinbunbun_/items/62b824a1205d31d56427',
          description: `2019年3月製作。
          GUIでLINE Botのプッシュメッセージを送信できるツール。
          PUSH APIは一度に送れる上限が150人だが、このツールを使えばそれ以上の人数でも一度に送ることができる。
          `
        },
        {
          src: 'http://img.youtube.com/vi/TQUemTeiCKM/hqdefault.jpg',
          title: '宿題終わってる？',
          tags: ['AWS', 'Clova', 'Node.js'],
          date: '2019年3月',
          youtube: 'https://www.youtube.com/embed/TQUemTeiCKM',
          clova: 'https://clova.line.me/clova-ai/skillstore/skill/info.shinbunbun.syukudai',
          description: `2019年3月に制作。
          みんなで宿題の進捗状況を共有することが出来る。

          Lambda&DynamoDBを使用している
          `
        },
        {
          src: 'http://img.youtube.com/vi/e3FB_Cc9RrQ/hqdefault.jpg',
          title: 'ひな祭りの豆知識',
          tags: ['AWS', 'Clova', 'Alexa', 'Node.js'],
          date: '2019年12月',
          youtube: 'https://www.youtube.com/embed/e3FB_Cc9RrQ',
          alexa: 'https://www.amazon.co.jp/%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93-%E3%81%B2%E3%81%AA%E7%A5%AD%E3%82%8A%E3%81%AE%E8%B1%86%E7%9F%A5%E8%AD%98/dp/B07P6QGDTP',
          clova: 'https://clova.line.me/clova-ai/skillstore/skill/com.takamuneyuto.skill.hinamaturi',
          description: `2019年2月製作。
          ひな祭りに関する豆知識を教えてくれる。
          Lambdaを使用している。
          `
        },
        {
          src: 'http://img.youtube.com/vi/3UH8_1woBak/hqdefault.jpg',
          title: '今日の太陽',
          tags: ['AWS', 'Alexa', 'Node.js'],
          date: '2019年1月',
          youtube: 'https://www.youtube.com/embed/3UH8_1woBak',
          alexa: 'https://www.amazon.co.jp/%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93-%E4%BB%8A%E6%97%A5%E3%81%AE%E5%A4%AA%E9%99%BD/dp/B07N6JJD46',
          description: `2019年1月製作。
          日の出時刻、日の入り時刻を教えてくれる。
          Lambdaを使用している。
          `
        },
        {
          src: 'http://img.youtube.com/vi/fG9QNzsgg_Q/hqdefault.jpg',
          title: 'トイレの音消し',
          tags: ['AWS', 'Clova', 'Alexa', 'Node.js'],
          date: '2018年12月',
          youtube: 'https://www.youtube.com/embed/fG9QNzsgg_Q',
          qiita: 'https://qiita.com/shinbunbun_/items/21129544134f8f725c83#1%E3%81%A4%E7%9B%AE%E3%83%88%E3%82%A4%E3%83%AC%E3%81%AE%E9%9F%B3%E6%B6%88%E3%81%97',
          alexa: 'https://www.amazon.co.jp/%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93-%E3%83%88%E3%82%A4%E3%83%AC%E3%81%AE%E9%9F%B3%E6%B6%88%E3%81%97/dp/B07LFRHLL4',
          clova: 'https://clova.line.me/clova-ai/skillstore/skill/com.takamuneyuto.skill.first',
          description: `2018年12月製作。
          「音を流して」と言うとトイレの音を掻き消す水音を流してくれる。

          Lambdaを使用している。
          `
        },
        {
          src: 'http://img.youtube.com/vi/uzbAfId6HkI/hqdefault.jpg',
          title: 'ぶんぶんの電車運行情報',
          tags: ['AWS', 'Clova', 'Alexa', 'Node.js'],
          date: '2018年12月',
          youtube: 'https://www.youtube.com/embed/uzbAfId6HkI',
          qiita: 'https://qiita.com/shinbunbun_/items/21129544134f8f725c83#2%E3%81%A4%E7%9B%AE%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93%E3%81%AE%E9%9B%BB%E8%BB%8A%E9%81%8B%E8%A1%8C%E6%83%85%E5%A0%B1',
          alexa: 'https://www.amazon.co.jp/%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93-%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93%E3%81%AE%E9%9B%BB%E8%BB%8A%E9%81%8B%E8%A1%8C%E6%83%85%E5%A0%B1/dp/B07LGMNQNR',
          description: `2018年12月製作。
          路線名を言うとその路線の運行情報を教えてくれる。

          Lambdaを使用しており、電車運行情報は鉄道遅延情報のjsonから取得している。`
        },
        {
          src: 'http://img.youtube.com/vi/tqTjjA9f_4M/hqdefault.jpg',
          title: 'ぶんぶんのルーレット',
          tags: ['AWS', 'Alexa', 'Node.js'],
          date: '2018年12月',
          youtube: 'https://www.youtube.com/embed/tqTjjA9f_4M',
          qiita: 'https://qiita.com/shinbunbun_/items/21129544134f8f725c83#4%E3%81%A4%E7%9B%AE%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AC%E3%83%83%E3%83%88',
          alexa: 'https://www.amazon.co.jp/%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93-%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AC%E3%83%83%E3%83%88/dp/B07LGMKZ1V',
          description: `2018年12月製作。
          好きな数字を言うと、1からその数字までのルーレットを回してくれる。

          Lambdaを使用している。
          `
        },
        {
          src: 'http://img.youtube.com/vi/9uzIM6ICO-U/hqdefault.jpg',
          title: '大晦日カウントダウン',
          tags: ['AWS', 'Alexa', 'Node.js'],
          date: '2018年12月',
          youtube: 'https://www.youtube.com/embed/9uzIM6ICO-U',
          qiita: 'https://qiita.com/shinbunbun_/items/21129544134f8f725c83#3%E3%81%A4%E7%9B%AE%E5%A4%A7%E6%99%A6%E6%97%A5%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%83%80%E3%82%A6%E3%83%B3',
          alexa: 'https://www.amazon.co.jp/%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93-%E5%A4%A7%E6%99%A6%E6%97%A5%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%83%80%E3%82%A6%E3%83%B3/dp/B07LF22NQR',
          description: `2018年12月製作。
          大晦日まであと何日か教えてくれる。

          Lambdaを使用している。
          `
        },
        {
          src: '/images/maruken.jpg',
          title: '部活出席管理ソフト',
          tags: ['Others'],
          date: '2018年11月',
          youtube: 'https://www.youtube.com/embed/2ag9Z2FxYYg',
          description: `2018年11月製作。
          唯一のC#作品。
          何もわからないままとりあえず動くものを作ってみた。
          2018年11月〜2019年11月までの1年間、私が所属していた部活で使用された。
          `
        },
        {
          src: '/images/weatherbot.jpg',
          title: 'お天気bot',
          tags: ['AWS', 'GAS'],
          date: '2018年10月',
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
          src: '/images/trainbot.jpg',
          title: 'ぶんぶんの運行情報bot',
          tags: ['AWS', 'LINE Bot', 'Node.js'],
          date: '2018年9月',
          youtube: 'https://www.youtube.com/embed/j_ET-VkRlNo',
          linebot: 'https://line.me/R/ti/p/%40buo7278w',
          description: `2018年9月製作。友達追加数162人(2021/1/1現在)
          運行情報を検索したい路線名を送信するとその路線の運行情報を返信する。
          Clovaスキルとも紐づいており、Clovaスキルで路線を検索した際にその路線が遅延・運休していたら、botがその路線の詳細な運行情報へのリンクを送信してくれる。

          GASで動いており、電車運行情報は鉄道遅延情報のjson（https://rti-giken.jp/fhc/api/train_tetsudo/）から取得している。
          `
        },
        {
          src: '/images/urlshoter.jpg',
          title: 'URL短縮bot',
          tags: ['GAS', 'LINE Bot'],
          date: '2018年9月',
          youtube: 'https://www.youtube.com/embed/BZ8KkrT5sHU',
          linebot: 'https://line.me/R/ti/p/%40shr5133j',
          description: `2018年9月製作。
          URLを送信するとそのURLの短縮URLを作成する。

          GASで動いており、bitlyのAPIを叩いて短縮URLを作成している。
          `
        },
        {
          src: '/images/2018votesystem.jpg',
          title: '2018年文化祭大賞投票bot',
          tags: ['AWS', 'LINE Bot', 'Node.js'],
          date: '2018年9月',
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
          src: '/images/2018tgc.jpg',
          title: '2018年ミスコン投票bot',
          tags: ['AWS', 'LINE Bot', 'Node.js'],
          date: '2018年9月',
          youtube: 'https://www.youtube.com/embed/mQTMMxiH_y8',
          linebot: 'https://line.me/R/ti/p/%40awj3413y',
          description: `2018年夏製作。僕が通っている高校は男子校だが文化祭でミスコンがある。その投票システムを制作した。
          リッチメニューの「投票」ボタンを押すと立候補者一覧のFlexMessageが表示される。
          投票したい候補者を選択すると確認のボタンが送られてくるので、「はい」を押すと投票が完了する。

          こちらも文化祭大賞投票botと同様に最初はGAS&スプレッドシートを使用して作っていたが、本番1週間前に行った負荷テストで高トラフィックに耐えられないことがわかり、3日かけて死に物狂いでLambda&DynamoDBに移行した。
          当日はDynamoDBのキャパシティユニットを40に設定するなどして高負荷対策を行ったが、蓋を開けてみると5で十分な程度の負荷しかかからなかった。

          上記の友達追加ボタンは、テスト用に作成した航空会社の投票botの追加リンク。これはGAS&スプレッドシートで動いている。
          `
        }
      ]
    }
  },
  mounted() {
    const tag = this.$route.query.tag
    if (!tag) {
      return
    }
    const tagArr = tag.split(',')
    this.allCheck('off')
    tagArr.forEach((element) => {
      this.changeCheckBox(element)
    })
  },

  methods: {
    openModal(data) {
      this.choseProduct = data
      this.$refs.ProductModal.openModal()
    },
    changeCheckBox(tag) {
      if (this.narrowDownTags.includes(tag)) {
        this.narrowDownTags = this.narrowDownTags.filter(n => n !== tag)
        return
      }
      this.narrowDownTags.push(tag)
    },
    allCheck(opt) {
      if (opt === 'on') {
        this.narrowDownTags = this.tags
      } else {
        this.narrowDownTags = []
      }
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
label {
  white-space: nowrap;
  margin: 3px;
  padding: 3px;
}
.form-check-input{
  margin-left: 3px;
}

.label-AWS{
  background-color: #f67c1b;
  color: white;
}
.label-LINE.Bot{
  background-color: #03ba1e;
  color: white;
}
.label-WebApp{
  background-color: #cd5c5c;
  color: white;
}
.label-Clova{
  background-color: #05d686;
  color: white;
}
.label-Nuxt\.js{
  background-color: #2f495e;
  color: white;
}
.label-Vue\.js{
  background-color: #2f495e;
  color: white;
}
.label-productCard {
  padding-bottom: 20px;
}
.label-Alexa{
  background-color: #31C4F3;
  color: white;
}
.label-GAS{
  background-color: #1a73e8;
  color: white;
}
.label-IoT{
  background-color: #D4BA11;
  color: white;
}
.label-Network{
  background-color: black;
  color: white;
}
.label-Others{
  background-color: #CA59F5;
  color: white;
}
.label-Go{
  background-color: #7fd5ea;
  color: white;
}
.label-Node\.js{
  background-color: #026e00;
  color: white;
}
.label-TypeScript{
  background-color: #3178c6;
  color: white;
}
.label-Bootstrap{
  background-color: #7952b3;
  color: white;
}
.label-Vuetify{
  background-color: #1867c0;
  color: white;
}
.label-serverless{
  background-color: #fd5750;
  color: white;
}
.label-CI\/CD{
  background-color: #24292e;
  color: white;
}
.label-Elm{
  background-color: #5c647b;
  color: white;
}

.tags-card{
  display: inline-block;
}
</style>

<style lang="scss" scoped>
.tags-card{
  transition-duration: none !important;
  transition-property: none !important;

  &:hover {
    transform: none !important;
  }
}
</style>
