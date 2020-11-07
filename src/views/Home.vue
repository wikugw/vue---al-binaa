<template>
  <div class="contener">
    <Cerita />
    <Alumni />
  </div>
</template>
<script>
import Cerita from '../components/pages/Cerita'
import Alumni from '../components/pages/Alumni'

export default {
  components : {
    Cerita,
    Alumni
  }
}
</script>

<style scoped>
.contener {
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
}
</style>