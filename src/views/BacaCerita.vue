<template>
<div class="container">
  <div class="container__cerita">
    <img :src="cerita.foto ? cerita.foto : imgDefault" alt="">
    <h1>{{cerita.judul}}</h1>
    <p>
      oleh
      <span>{{penulis.name}}</span>
      pada
      <span>{{moment(cerita.created_at).format('LLL')}}</span>
    </p>
    <p v-html="cerita.cerita"></p>
  </div>

  <hr>

  <router-link class="alumni-link" :to="`/alumni/${penulis.id}`">
    <div class="container__penulis">
      <div class="penulis__foto">
        <img :src="penulisDetail.foto ? penulisDetail.foto : imageAvatar" alt="">
      </div>
      <div class="penulis__bio">
        <h4 class="ditulis">Ditulis Oleh</h4>
        <h3 class="penulis">{{penulis.name}}</h3>
        <h4 class="title">{{penulisDetail.title}}</h4>
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
      cerita : {},
      penulis: {},
      penulisDetail: {},
      imageAvatar: require('../assets/avatar.png'),
      imgDefault : require('../assets/cerita.jpg')
    }
  },
  props: ["id"],
  mounted() {
    axios.get(`http://127.0.0.1:8000/api/cerita/${this.id}`)
    .then(res => {
      this.cerita = res.data.cerita;
      this.penulis = res.data.cerita.user;
      this.penulisDetail = res.data.cerita.user.user_detail;
    })
    .catch(err => (console.log(err)))
  }
}
</script>

<style scoped>
  .container__cerita {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-top: 20px;
  }

  .container__cerita img {
    max-width: 100%;
  }

  .container h1, p, h4, h3 {
    margin-block-start: 5px;
    margin-block-end: 5px;
  }

  .container__cerita h1 {
    margin-top: 20px;
  }

  .container__cerita p span {
    font-weight: bold;
  }

  .container__penulis {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-areas:
    "foto bio"
    ;
    grid-row-gap: 30px;
  }

  .penulis__foto {
    max-width: 40vw;
    grid-area: foto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .penulis__foto img{
    width: 180px;
    height: 180px;
    border-radius: 95px;
    object-fit: cover;
    margin: auto;
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 50vh;
  }

  .penulis__bio {
    grid-area: bio;
    margin-top: 30px;
  }

  .penulis__bio .ditulis{
    font-weight: normal;
    color: gray;
  }

  .alumni-link {
    text-decoration: none;
    color: black;
    font-weight: normal;
  }
</style>