<template>
  <div class="not-found-container">
    <img :src="image" alt="">
    <h1>{{objek}} tidak dapat ditemukan 😢</h1>
    <p>
      Pindahkan saya pada halaman
      <router-link class="home-link" to="/">
      Utama
      </router-link>
    </p>
  </div>
</template>
<script>
export default {
  props: ['objek'],
  data() {
    return {
      image: require('../assets/not-found.gif')
    }
  }
}
</script>
<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  width: 200px;
  height: 200px;
}

.home-link {
  color: black;
  font-weight: bold;
}
</style>