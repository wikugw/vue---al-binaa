<template>
  <div class="container">
    <h3 class="judul">Cerita Terbaru</h3>

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
</style>