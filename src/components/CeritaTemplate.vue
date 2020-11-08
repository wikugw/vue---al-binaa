<template>
  <router-link class="cerita-link" :to="`/cerita/${cerita.id}`">
    <div class="card">
      <div class="card-info">
        <p v-if="cerita.user.name">{{cerita.user.name}} Menulis Tentang </p>
        <h3>{{cerita.judul}}</h3>
        <p>pada {{moment(cerita.created_at).format('LLL')}}</p>
      </div>
      <div class="card-image">
        <img :src="cerita.foto ? cerita.foto : bgDefault" alt="">
      </div>
    </div>
    </router-link>
</template>

<script>
var moment = require('moment');

export default {
  props: ['cerita'],
  data() {
    return {
      moment: moment,
      bgDefault: require('../assets/cerita.jpg')
    }
  },
  computed: {
    date (created_at) {
      return  moment(created_at).format('MMM Do');
    }
  }
}
</script>

<style scoped>
.cerita-link {
      text-decoration: none;
      color: black;
  }
  .card {
    padding: 5px;
    width: 50vw;
    height: 200px;
    display: flex;
    justify-content: space-between;
  }

  .card-info{
    margin-top: 20px;
  }

  .card-info p, h3{
    margin-block-start: 5px;
    margin-block-end: 5px;
  }

  .card-info  h3{
    font-weight: bold;
  }

  .card-image {
    width: 300px;
  }
  .card-image img{
    height: 200px;
    width: 300px;
  }

  @media only screen and (max-width: 900px) {
    .card {
    padding: 5px;
    width: 93vw;
  }
  .card-image {
    width: 150px;
  }
    .card-image img{
    height: 150px;
    width: 150px;
    object-fit: cover;
  }
  }
</style>