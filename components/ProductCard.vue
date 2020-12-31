<template>
  <div class="col col-12 productCard">
    <div class="card h-100">
      <img :src="data.src" class="card-img-top" alt="">
      <div class="card-body border-top">
        <h5 class="card-title">
          {{ data.title }}
        </h5>
        <div v-for="tag in data.tags" :key="tag" class="tag col">
          <div class="rounded tag_text" :class="tag">
            #{{ tag }}
          </div>
        </div>
        <p class="card-text">
          追加日: {{ data.date }}
        </p>
      </div>
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

.card-title{
  text-align: left;
}

.card{
  text-align: left;
}

img{
   width: 100%;
   height: auto;
}

a{
  color: black;
  text-decoration: none;
}

.tag{
  padding-right: 10px;
  padding-bottom: 5px;
  display:inline-block;
  margin:0px;
}

.tag_text{
  padding: 3px;
}

.AWS{
  background-color: #f67c1b;
  color: white;
}

.LINE.Bot{
  background-color: #03ba1e;
  color: white;
}

.WebApp{
  background-color: #cd5c5c;
  color: white;
}

.Clova{
  background-color: #05d686;
  color: white;
}

.Nuxt\.js{
  background-color: #2f495e;
  color: white;
}

.Vue\.js{
  background-color: #2f495e;
  color: white;
}

.productCard {
  padding-bottom: 20px;
}

.Alexa{
  background-color: #31C4F3;
  color: white;
}

.GAS{
  background-color: #1a73e8;
  color: white;
}

</style>
