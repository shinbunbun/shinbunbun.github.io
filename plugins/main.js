import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import LightBox from 'vue-image-lightbox'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'
import Timeline from 'timeline-vuejs'

require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
Vue.component('Timeline', Timeline)

Vue.use(VueLazyLoad, {
  error: '/images/NotFound.jpg',
  loading: '/images/NowLoading.jpg',
  observer: true
})
Vue.component('light-box', LightBox)
