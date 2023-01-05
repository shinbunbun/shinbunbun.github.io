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
      <li>写真撮影</li>
    </ul>
    <br>
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
