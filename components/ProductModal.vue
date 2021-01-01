<template>
  <div class="example-modal-window">
    <!-- コンポーネント MyModal -->
    <MyModal v-if="modal" @close="closeModal">
      <span class="material-icons colse-button" @click="closeModal">
        close
      </span>
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
            <div class="py-3" />
          </div>
          <div class="col-md-6">
            <div class="py-2" />
            <h2>{{ data.title }}</h2>
            <div class="py-2" />
            <div v-if="data.github" class="btn-wrapper">
              <button type="button" class="btn github-btn" @click="openLink(data.github)">
                <b>GitHub</b>
                <span style="font-family: Material Icons">
                  open_in_new
                </span>
              </button>
            </div>
            <div v-if="data.qiita" class="btn-wrapper">
              <button type="button" class="btn qiita-btn" @click="openLink(data.qiita)">
                <b>Qiita記事</b>
                <span style="font-family: Material Icons">
                  open_in_new
                </span>
              </button>
            </div>
            <div v-if="data.webapp" class="btn-wrapper">
              <button type="button" class="btn webapp-btn" @click="openLink(data.webapp)">
                <b>Webアプリ</b>
                <span style="font-family: Material Icons">
                  open_in_new
                </span>
              </button>
            </div>
            <div v-if="data.linebot" class="btn-wrapper">
              <button type="button" class="btn line-btn" @click="openLink(data.linebot)">
                <b>LINE友達追加</b>
                <span style="font-family: Material Icons">
                  open_in_new
                </span>
              </button>
            </div>
            <div v-if="data.clova" class="btn-wrapper">
              <button type="button" class="btn clova-btn" @click="openLink(data.clova)">
                <b>Clovaスキル</b>
                <span style="font-family: Material Icons">
                  open_in_new
                </span>
              </button>
            </div>
            <div v-if="data.alexa" class="btn-wrapper">
              <button type="button" class="btn alexa-btn" @click="openLink(data.alexa)">
                <b>Alexaスキル</b>
                <span style="font-family: Material Icons">
                  open_in_new
                </span>
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
.colse-button {
  font-size: 45px;
}
p{
font-size: 110%;
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
</style>
