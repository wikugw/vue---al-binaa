<template>
    <Header />
    <router-view class="content" />
    <Footer />
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

* {
  font-family: 'Roboto', sans-serif;
  padding: 0 100px;
}

.content {
  min-height: 75vh;
}

@media only screen and (max-width:900px) {
 * {
  padding: 0;
}
}
</style>