<template>
  <div class="col">
    <div v-if="data.icon" class="card rounded h-100" :class="data.title" :style="{ 'background-color': data.color}">
      <NuxtLink :to="data.to">
        <div>
          <span class="material-icons icon">
            {{ data.icon }}
          </span>
        </div>
        <div class="card-body">
          <p class="card_title">
            {{ data.title }}
          </p>
        </div>
      </NuxtLink>
    </div>
    <div v-else class="card rounded h-100" :class="data.title" :style="{ 'background-color': data.color}">
      <a :href="data.to" target="_blank">
        <div>
          <img :src="data.src" alt="">
        </div>
        <div class="card-body">
          <p class="card_title">
            {{ data.title }}
          </p>
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
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  border: solid 2px;
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
