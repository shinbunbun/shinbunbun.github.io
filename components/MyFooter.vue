<template>
  <div class="footerFixed">
    <div class="py-4" />
    <footer>
      <p>©︎2020 しんぶんぶん</p>
    </footer>
  </div>
</template>

<style scoped>
body{
    min-height: 100vh; /* ←コンテンツの高さの最小値＝ブラウザの高さに指定 */
    position: relative;/* ←相対位置 */
    padding-bottom: 60px; /* ←フッターの高さを指定 */
    box-sizing: border-box;
    /* ↑ヘッダーやフッターを含むすべての要素の高さ＝min-height:100vhになるように指定 */
}

footer{
    position: absolute;/* ←絶対位置 */
    bottom: 0;
    text-align: center;
    width: 100%;
}
</style>
