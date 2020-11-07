<template>
  <header>
      <div class="logo">
        <img :src="logo" alt="tidak ada">
      </div>
      <div class="menu">
        <ul>
          <li class="menu__list poof">
            <router-link  class="menu__link" to="/">Home</router-link>
          </li>
          <li class="menu__list poof">
            <router-link  class="menu__link" to="/cerita">Cerita</router-link>
          </li>
          <li class="menu__list poof">
            <router-link class="menu__link" to="/alumni">Alumni</router-link>
          </li>
          <li class="menu__list">
            <a class="menu__link" href="#">Login</a>
          </li>
        </ul>
      </div>
  </header>
</template>
<script>
export default {
    data() {
      return {
      logo: require('../assets/ilumina black.png')
    }
    }
  }
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
}

.logo {
  padding: 10px;
}

.logo img{
  height: 50px;
}
.menu ul {
  display: flex;
}

.menu__list {
  padding: 10px 10px;
  list-style-type: none;
  align-items: center;
}

.menu__link {
  text-decoration: none;
  color: black;
}

@media only screen and (max-width: 900px) {
  .poof {
    display: none;
  }
}
</style>