<template>
  <div class="example-modal-window">
    <!-- コンポーネント MyModal -->
    <MyModal v-if="modal" @close="closeModal">
      <img src="/images/close-black-18dp.svg" alt="" class="close-button" @click="closeModal">
      <br>
      <div class="container modal-container">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center">
            <div v-if="data.youtube" class="youtube-wrapper">
              <iframe
                class="embed-responsive-item"
                :src="data.youtube"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div v-else-if="data.twitterId" class="twitter">
              <Tweet :id="data.twitterId" />
            </div>
            <div v-else d-flex align-items-center>
              <img :src="data.src" alt="">
            </div>
            <div class="py-3" />
          </div>
          <div class="col-md-6">
            <div class="py-2" />
            <h2>{{ data.title }}</h2>
            <div class="py-2" />
            <div v-if="data.github" class="btn-wrapper">
              <button type="button" class="btn github-btn d-flex align-items-center d-flex align-items-center" @click="openLink(data.github)">
                <b>GitHub</b>
                <img class="new-tab-img" src="/images/open_in_new-black-18dp.svg" alt="">
              </button>
            </div>
            <div v-if="data.qiita" class="btn-wrapper">
              <button type="button" class="btn qiita-btn d-flex align-items-center" @click="openLink(data.qiita)">
                <b>Qiita記事</b>
                <img class="new-tab-img" src="/images/open_in_new-black-18dp.svg" alt="">
              </button>
            </div>
            <div v-if="data.webapp" class="btn-wrapper">
              <button type="button" class="btn webapp-btn d-flex align-items-center" @click="openLink(data.webapp)">
                <b>Webアプリ</b>
                <img class="new-tab-img" src="/images/open_in_new-black-18dp.svg" alt="">
              </button>
            </div>
            <div v-if="data.linebot" class="btn-wrapper">
              <button type="button" class="btn line-btn d-flex align-items-center" @click="openLink(data.linebot)">
                <b>LINE友達追加</b>
                <img class="new-tab-img" src="/images/open_in_new-black-18dp.svg" alt="">
              </button>
            </div>
            <div v-if="data.clova" class="btn-wrapper">
              <button type="button" class="btn clova-btn d-flex align-items-center" @click="openLink(data.clova)">
                <b>Clovaスキル</b>
                <img class="new-tab-img" src="/images/open_in_new-black-18dp.svg" alt="">
              </button>
            </div>
            <div v-if="data.alexa" class="btn-wrapper">
              <button type="button" class="btn alexa-btn d-flex align-items-center" @click="openLink(data.alexa)">
                <b>Alexaスキル</b>
                <img class="new-tab-img" src="/images/open_in_new-black-18dp.svg" alt="">
              </button>
            </div>
            <div v-if="data.slide" class="btn-wrapper">
              <button type="button" class="btn slide-btn d-flex align-items-center" @click="openLink(data.slide)">
                <b>スライド</b>
                <img class="new-tab-img" src="/images/open_in_new-black-18dp.svg" alt="">
              </button>
            </div>
            <br><br>
            <p class="description">
              {{ data.description }}
            </p>
          </div>
        </div>
      </div>
    </MyModal>
  </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'
export default {
  components: {
    Tweet
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      modal: false,
      message: ''
    }
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    },
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    doSend() {
      if (this.message.length > 0) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('メッセージを入力してください')
      }
    }
  }
}
</script>

<style>
.youtube-wrapper {
    position: relative;
    width: 100%;
}
.youtube-wrapper:before {
    content:"";
    display: block;
    padding-top: 56.25%; /* 高さと幅の比を16:9に固定。9/16*100=56.25 */
}
.youtube-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>

<style scoped>
.close-button {
  width: 45px;
}
.qiita-btn{
   background-color: #55c500;
   color: white;
}
.line-btn{
  background-color: #03ba1e;
  color: white;
}
.webapp-btn{
  background-color: #cd5c5c;
  color: white;
}
.clova-btn{
  background-color: #05d686;
  color: white;
}
.github-btn{
  background-color: black;
  color: white;
}
.alexa-btn{
  background-color: #31C4F3;
  color: white;
}
.slide-btn{
  background-color: #fcbc04;
  color: white;
}
.btn-wrapper{
  display: inline-block;
  padding-bottom: 5px;
}
.description{
  white-space: pre-line;
  text-align: left;
}
.twitter{
  width: 100%;
}
img{
  max-width: 100%;
}
.new-tab-img{
  width: 16px;
}
</style>
