<template>
  <div class="footerFixed">
    <div class="py-4" />
    <footer>
      <p>©︎{{ year }} しんぶんぶん</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>
body{
  min-height: 100vh;
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
