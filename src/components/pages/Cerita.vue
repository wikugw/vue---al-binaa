<template>
  <div class="container">
    <h3 class="judul">Cerita Terbaru</h3>

    <router-link v-for="cerita in ceritas" :key="cerita.id" class="cerita-link" to="/">
    <div class="card">
      <div class="card-info">
        <p>{{cerita.user.name}} Menulis Tentang </p>
        <h3>{{cerita.judul}}</h3>
        <p>pada {{moment(cerita.created_at).format('LLL')}}</p>
      </div>
      <div class="card-image">
        <img :src="cerita.foto ? cerita.foto : bgDefault" alt="">
      </div>
    </div>
    </router-link>

  </div>
</template>

<script>
import axios from 'axios';
var moment = require('moment');

export default {
  data() {
    return {
      moment: moment,
      bgDefault: require('../../assets/cerita.jpg'),
      ceritas: [],
    }
  },
  computed: {
    date (created_at) {
      return  moment(created_at).format('MMM Do');
    }

  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/cerita")
    .then(res => {
      this.ceritas = res.data.ceritas;
      console.log(this.ceritas);
    })
    .catch(err => console.log(err))
  }
}
</script>

<style scoped>
.judul {
  width: 50vw;
}
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
  }
  }
</style>