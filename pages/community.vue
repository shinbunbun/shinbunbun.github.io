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
      <Timeline
        class="timeline"
        :timeline-items="timelineItems"
        :message-when-no-items="messageWhenNoItems"
        color-dots="#3CB70D"
        order="desc"
      />
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      messageWhenNoItems: 'データが存在しません',
      timelineItems: [
        {
          from: new Date(2019, 11),
          title: 'title',
          description:
          'texttexttexttexttexttext'
        },
        {
          from: new Date(2018, 1),
          title: 'title',
          description:
          'texttexttexttexttexttext'
        },
        {
          from: new Date(2017, 6),
          title: 'title',
          description:
          'texttexttexttexttexttext'
        }
      ]
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
