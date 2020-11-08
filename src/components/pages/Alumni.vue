<template>
  <div class="container">
    <h3>Alumni yang telah Bergabung</h3>
    <router-link v-for="alumni in alumnis" :key="alumni.id" :to="{ name: 'BioAlumni', params: { id: alumni.id }}" class="alumni-link">
    <div class="card">
      <div class="card-info">
        <p>
          <span>{{alumni.name}}</span><br>
        dari angkatan <span>{{alumni.user_detail.angkatan}}</span><br>
        Telah Bergabung
        </p>
      </div>
      <div class="card-avatar">
        <img :src="alumni.user_detail.foto ? alumni.user_detail.foto : imageAvatar" alt="">
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      imageAvatar: require('../../assets/avatar.png'),
      alumnis: []
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/alumni')
    .then(res => {
      this.alumnis = res.data.alumnis
    })
    .catch(err => (console.log(err)))
  }
}
</script>

<style scoped>
.container {
  margin-left: 30px;
}

@media only screen and (max-width: 900px) {
  .container {
    display: none;
  }
}

.container h3 {
  margin-block-start: 0;
}

.alumni-link {
  text-decoration: none;
  color: black;
}

.card {
  display: flex;
  width: 30vw;
  justify-content: space-between;
  margin-bottom: 20px;
}

.card-info p span {
  font-weight: bold;
}

.card-avatar img {
  margin-right: 100px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  object-fit: cover;
}
</style>