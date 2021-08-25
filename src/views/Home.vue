<template>
  <div class="home__wrapper">
    <div><ingredients /></div>
    <div><dishes /></div>
  </div>
</template>

<script>
import ingredients from "../components/ingredients.vue"
import dishes from "../components/dishes.vue"
export default {
  components: { ingredients, dishes },
}
</script>

<style scoped>
.home__wrapper {
  margin: 0 auto;
  max-width: 1200px;
  background-color: #ccc;
}
</style>
