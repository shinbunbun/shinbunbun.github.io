<template>
  <div class="container">
    <div class="py-4" />
    <h1>閑話</h1>
    <br>
    <p>趣味など、どうでも良い話をつらつらと書き連ねていこうと思います。</p>
    <br>
    <h3>
      趣味
    </h3>
    <br>
    <ul>
      <li>読書</li>
      <li>アニメ</li>
      <li>音楽鑑賞</li>
      <li>写真撮影</li>
      <li>文化祭</li>
    </ul>
    <br>
    <div class="border" />
    <br>
    <h3>読書</h3>
    <h4>おすすめの本（作者名順）</h4>
    <br>
    <ul>
      <li>骨を彩る（彩瀬まる）</li>
      <li>わたしが・棄てた・女（遠藤周作）</li>
      <li>博士の愛した数式（小川洋子）</li>
      <li>変身（カフカ）</li>
      <li>砂糖菓子の弾丸は撃ち抜けない（桜庭一樹）</li>
      <li>私の男（桜庭一樹）</li>
      <li>赤朽葉家の伝説（桜庭一樹）</li>
      <li>ファミリーポートレイト（桜庭一樹）</li>
      <li>アンダスタンドメイビー（島本理生）</li>
      <li>神様のカルテシリーズ（夏川草介）</li>
      <li>イノセントデイズ（早見和真）</li>
      <li>ボッコちゃん（星新一）</li>
      <li>金閣寺（三島由紀夫）</li>
      <li>青の時代（三島由紀夫）</li>
    </ul>
    <div class="border" />
    <br>
    <h3>音楽</h3>
    <h4>おすすめの曲</h4>
    <br>
    <h5>東京事変</h5>
    <ul>
      <li>能動的三分間</li>
      <li>閃光少女</li>
      <li>永遠の不在証明</li>
      <li>りんごのうた</li>
      <li>群青日和</li>
      <li>キラーチューン</li>
      <li>心</li>
      <li>青のID</li>
      <li>透明人間</li>
      <li>21世紀宇宙の子</li>
      <li>空が鳴っている</li>
    </ul>
    <h5>椎名林檎</h5>
    <ul>
      <li>幸福論</li>
      <li>正しい街</li>
      <li>歌舞伎町の女王</li>
      <li>丸の内サディスティック</li>
      <li>NIPPON</li>
      <li>人生は夢だらけ</li>
      <li>ジユーダム</li>
      <li>ギブス</li>
      <li>長く短い祭（椎名林檎&浮雲）</li>
      <li>獣ゆく細道（椎名林檎&宮本浩次）</li>
      <li>目抜き通り（椎名林檎&トータス松本）</li>
      <li>二時間だけのバカンス（椎名林檎&宇多田ヒカル</li>
    </ul>
    <h5>宇多田ヒカル</h5>
    <ul>
      <li>Beautiful World</li>
      <li>桜流し</li>
      <li>あなた</li>
      <li>Can You Keep A Secret?</li>
      <li>Face My Fears</li>
      <li>花束を君に</li>
      <li>First Love</li>
      <li>Auomatic</li>
    </ul>
    <h5>King Gnu</h5>
    <ul>
      <li>三文小説</li>
      <li>飛行艇</li>
      <li>どろん</li>
      <li>Teenager Forever</li>
      <li>Prayer X</li>
      <li>Slumberland</li>
      <li>The hole</li>
    </ul>
    <h5>米津玄師</h5>
    <ul>
      <li>vivi</li>
      <li>ピースサイン</li>
      <li>海の幽霊</li>
      <li>LOSER</li>
      <li>砂の惑星（ハチ）</li>
      <li>Nighthawks</li>
      <li>Flamingo</li>
      <li>orion</li>
      <li>カムパネルラ</li>
      <li>アイネクライネ</li>
    </ul>
    <h5>H ZETTRIO</h5>
    <ul>
      <li>Dancing in the mood</li>
      <li>Beautiful Flight</li>
      <li>Neo Japaneseque</li>
      <li>あしたのワルツ</li>
    </ul>
    <div class="border" />
    <br>
    <h3>写真撮影</h3>
    <h4>撮影機材</h4>
    <br>
    <ul>
      <li>Canon EOS 6D MarkII</li>
      <li>Canon EF24-105mm F3.5-5.6 IS STM</li>
      <li>Canon EF50mm F1.8 STM</li>
      <li>Canon EF16-35mm F2.8L III USM</li>
      <li>SIGMA 100-400mm F5-6.3 DG OS HSM</li>
    </ul>
    <br>
    <div class="border" />
    <br>
    <h3>文化祭</h3>
    <p>
      中2から文化祭執行部をやり続けて、もはや文化祭が趣味になった。
      高3になってまでやってるのはもう末期。
    </p>
  </div>
</template>

<style scoped>
p{
  white-space: pre-line;
  text-indent: 0px;
}
</style>

<script>
export default {
  data() {
    return {
      meta: {
        title: 'Extra',
        description: '閑話',
        type: 'article'
      }
    }
  },
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description }
      ]
    }
  }
}
</script>
