<template>
<NotFound v-if="Object.keys(biodata).length === 0" objek="Alumni" />
  <div class="container" v-else>

    <div class="oke" >
      <div class="container__info">
      <h2>{{biodata.name}}</h2>
      <h4>{{bioDetail.title}}</h4>
      <p>
        Angkatan {{bioDetail.angkatan}} |
        {{bioDetail.jurusan}} |
        {{bioDetail.kelamin}} |
        {{ceritas.length}} cerita dibagikan
      </p>
      <p><font-awesome-icon :icon="['fas', 'phone']" /> <span> : </span> {{bioDetail.no_hp}}</p>
      <p><font-awesome-icon :icon="['fas', 'home']" /> <span> : </span> {{bioDetail.alamat}}</p>
      <hr>
      <p>Hubungkan diri anda dengan {{biodata.name}} pada :</p>
    <div class="container__sosmed">
        <a v-if="biodata.email" target="_blank" :href="` mailto:${biodata.email} `"><font-awesome-icon :icon="['fas', 'at']" /> </a>
        <a v-if="bioDetail.facebook" target="_blank" :href="bioDetail.facebook"><font-awesome-icon :icon="['fab', 'facebook']" /> </a>
        <a v-if="bioDetail.twitter"  target="_blank" :href="bioDetail.twitter"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        <a v-if="bioDetail.instagram" target="_blank" :href="bioDetail.instagram"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
      </div>
    </div>
    <div class="container__image">
      <img :src="bioDetail.foto" alt="">
    </div>

    <div class="container__cerita">
      <h2>Cerita dari {{biodata.name}}</h2>
      <CeritaTemplate
      :v-if="ceritas"
      v-for="cerita in ceritas"
      v-bind:key="cerita.id"
      v-bind:cerita="cerita"
    />
    </div>
    </div>

  </div>
</template>
<script>
import axios from 'axios';
import CeritaTemplate from '../components/CeritaTemplate';
import NotFound from '../components/NotFound';

export default {
  components: {
    CeritaTemplate,
    NotFound
  },
  data() {
    return {
      biodata: {},
      bioDetail: {},
      ceritas: []
    }
  },
  props: ["id"],
  mounted() {
    axios.get(`http://127.0.0.1:8000/api/alumni/${this.id}`)
    .then(res => {
      this.biodata = res.data.alumni;
      this.bioDetail = this.biodata.user_detail;
      this.ceritas = this.biodata.cerita;
    })
    .catch(err => (console.log(err)))
  }
};
</script>

<style scoped>
.svg-inline--fa {
  color: black;
}

.container {

}

.oke {
  margin-top: 20px;
  margin-left: 130px;
  display: grid;
  min-height: 75vh;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  "info image"
  "cerita cerita"
  ;
  grid-row-gap: 50px;
}

.container__info {
  grid-area: info;
}

.container__info h2, h4, p {
  margin-block-start: 10px;
  margin-block-end: 10px;
}

.container__image {
  grid-area: image;
}

.container__sosmed {
  grid-area: sosmed;
  display: flex;
  justify-content: center;
}

.container__cerita {
  grid-area: cerita;
  margin-top: 20px !important;
  display: flex;
  flex-direction: column;
}

.container__cerita h2 {
  padding-bottom: 10px;
}

.container__image img{
  height: 250px;
  width: 250px;
  object-fit: cover;
}

hr {
  width: 30%;
}
.container__sosmed .svg-inline--fa {
  font-size: 25px;
  padding: 10px;
}

@media only screen and (max-width: 900px) {
  .container {
    margin-left: 0;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
    "image"
    "info"
    "cerita"
    ;
    min-height: 75vh;
    grid-row-gap: 10px;
  }

  .container__image {
    display: flex;
    justify-content: center;
  }

  .container__info {
    text-align: center;
  }
}
</style>