<template>
  <div class="container">
    <div class="sorting__container">
      <h4>Sorting berdasarkan</h4>
      <div class="sorting__button__container">
        <button :class="newestActive ? 'active' : ''" @click="newestSortHandle">Paling baru</button>
        <button :class="MostPopularActive ? 'active' : ''" @click="popularitySortHandle">Paling Popluer</button>
      </div>
    </div>

    <h3 class="judul">{{judulCerita}}</h3>

    <CeritaTemplate
      v-for="cerita in ceritas"
      v-bind:key="cerita.id"
      v-bind:cerita="cerita"
    />

  </div>
</template>

<script>
import axios from 'axios';

import CeritaTemplate from '../CeritaTemplate';
export default {
  components : {
    CeritaTemplate
  },
  data() {
    return {
      ceritas: [],
      judulCerita : 'Cerita Terbaru',
      newestActive : true,
      MostPopularActive : false,
    }
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/cerita")
    .then(res => {
      this.ceritas = res.data.ceritas;
    })
    .catch(err => console.log(err))
  },
  methods: {
    popularitySortHandle(){
      axios.get("http://127.0.0.1:8000/api/cerita/popular-sort")
    .then(res => {
      this.ceritas = res.data.ceritas;
      this.judulCerita = 'Cerita Terpopuler';
      this.newestActive = false;
      this.MostPopularActive = true;
    })
    .catch(err => console.log(err))
    },
    newestSortHandle(){
      axios.get("http://127.0.0.1:8000/api/cerita/")
    .then(res => {
      this.ceritas = res.data.ceritas;
      this.judulCerita = 'Cerita Terbaru';
      this.newestActive = true;
      this.MostPopularActive = false;
    })
    .catch(err => console.log(err))
    },
  }
}
</script>

<style scoped>
.judul {
  width: 50vw;
}

.sorting__container{
  display: flex;
  align-items: center;
}

.sorting__button__container{
  margin-left: 10px;
}

.sorting__button__container button{
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
  background-color: darkgrey;
  border-color: darkgrey !important;
  border-radius: 5px;
  cursor: pointer;
  border-style: none;
  font-weight: bold;
}

.sorting__button__container button.active{
  background-color: black;
  border-color: black;
  color: #fff;
}
</style>