<template>
  <div v-if="data.modal" class="homeCard">
    <!--<div v-if="data.icon" class="card rounded h-100" :class="data.title" :style="{ 'border-color': data.color}">
        <div @click="$emit('openModal', data)">
          <div class="row">
            <div class="col-md-12 col-3">
              <span class="material-icons icon">
                {{ data.icon }}
              </span>
            </div>
            <div class="card-body col-md-12 col-9">
              <p class="card_title">
                {{ data.title }}
              </p>
            </div>
          </div>
        </div>
      </div>-->
    <div class="card rounded h-100" :class="data.title" :style="{ 'border-color': data.color}">
      <div @click="$emit('openModal', data)">
        <div class="row">
          <div class="col-md-12 col-3">
            <img :src="data.src" alt="">
          </div>
          <div class="card-body col-md-12 col-9">
            <p class="card_title">
              {{ data.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="homeCard">
    <div v-if="data.internal" class="card rounded h-100" :class="data.title" :style="{ 'border-color': data.color}">
      <NuxtLink :to="data.to">
        <div class="row">
          <div class="col-md-12 col-3">
            <img :src="data.src" alt="">
          </div>
          <div class="card-body col-md-12 col-9">
            <p class="card_title">
              {{ data.title }}
            </p>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div v-else class="card rounded h-100" :class="data.title" :style="{ 'border-color': data.color}">
      <a :href="data.to" target="_blank">
        <div class="row">
          <div class="col-md-12 col-3">
            <img :src="data.src" alt="">
          </div>
          <div class="card-body col-md-12 col-9">
            <p class="card_title">
              {{ data.title }}
            </p>
          </div>
        </div>
      </a>
    </div>
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
@media screen and (min-width:768px) {
  .icon{
    font-size: 120px;
  }
  img{
    height: 120px;
    padding-top: 15px;
    max-width: 100%;
  }
}

@media screen and (max-width:768px) {
  .icon{
    font-size: 80px;
    padding-left: 5px;
  }
  img{
    height: 80px;
    padding: 10px;
  }
  .card{
    height: 88px;
  }
}

.card_title{
  font-size: 25px;
}

.card{
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}

a{
  color: black;
  text-decoration: none;
}
.Lapras img{
  width: 110%;
  height: 110%;
  max-height: 120px;
  object-fit: cover;
}
.homeCard {
  padding-bottom: 20px;
}
</style>
