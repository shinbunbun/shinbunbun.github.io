<template>
  <div class="col">
    <div v-if="data.icon">
      <NuxtLink :to="data.to">
        <div class="card rounded">
          <span class="material-icons icon">
            {{ data.icon }}
          </span>
          <div class="card-body">
            <p class="card_title">
              {{ data.title }}
            </p>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div v-else>
      <a :href="data.to" target="_blank">
        <div class="card rounded">
          <div>
            <img :class="data.title" :src="data.src" alt="">
          </div>
          <div class="card-body">
            <p class="card_title">
              {{ data.title }}
            </p>
          </div>
        </div>
      </a>
    </div>
    <div class="py-2" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.icon{
  font-size: 120px;
}

.card_title{
  font-size: 25px;
}

.card{
  text-align: center;
}

img{
  height: 120px;
  padding-top: 15px;
}

a{
  color: black;
  text-decoration: none;
}
</style>
