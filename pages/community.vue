<template>
  <div class="container">
    <div class="py-4" />
    <h1>Community</h1>
    <div class="py-4" />
    <div class="row">
      <div class="col">
        <p>
          高校一年生からコミュニティ活動を開始し、LINE Developer Communityの運営スタッフなどをしていました。<br>
          LTやハッカソンにもいくつか参加しています。<br>
          また、高校三年生の時に友達と共同で「すごくなりたいがくせいぐるーぷ」という学生エンジニアコミュニティを立ち上げ、そちらでも活動を行っています。
        </p>
      </div>
      <div class="py-2" />
      <h3>参加イベント</h3>
      <p>※このデータはconnpass APIから取得しています</p>
      <Timeline
        class="timeline"
        :timeline-items="timelineItems"
        :message-when-no-items="messageWhenNoItems"
        color-dots="#c82a16"
        order="desc"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      meta: {
        title: 'Community',
        description: 'コミュニティ活動',
        type: 'article',
        url: 'https://shinbunbun.info/about/',
        image: 'https://shinbunbun.info/images/ogp.png'
      },
      messageWhenNoItems: '読み込み中',
      timelineItems: [],
      events: {}
    }
  },
  async mounted() {
    const res = await axios.get('https://zoyoir8xag.execute-api.ap-northeast-1.amazonaws.com/dev/?user_name=unix_yuto&count=100')
      .catch((e) => {
        console.error(e)
      })
    const events = res.data.events
    console.log(events)
    for (const event of events) {
      console.log(event)
      const date = new Date(event.started_at)
      let description = ''
      if (event.series) {
        description = event.series.title
      }
      const value = {
        from: date,
        title: `<a href='${event.event_url}' target='_blank' style='color: black'>${event.title}</a>`,
        description,
        showDayAndMonth: true
      };
      (this.timelineItems).push(value)
    }
  }
}
</script>

<style scoped>
.timeline {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
