<template>
  <div class="home__wrapper">
    <div class="title">
      <div class="title_box">
        <p class="title_left">ingredients</p>
        <div class="line_1"></div>
      </div>
      <div class="title_box">
        <p class="title_right">dishes</p>
        <div class="line_2"></div>
      </div>
    </div>
    <div class="post_box">
      <div class="post_ing"><ingredients /></div>
      <div class="post_dish"><dishes /></div>
    </div>
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
.title {
  display: flex;
  color: #01579b;
  font-size: 75px;
}

.title_left {
  margin-left: 109px;
}

.line_1 {
  border-bottom: 6px solid #01579b;
  margin-left: 20px;
  width: 80px;
  margin-bottom: 110px;
}

.line_2 {
  border-bottom: 6px solid #01579b;
  margin-left: 20px;
  width: 220px;
  margin-bottom: 110px;
}

.title_right {
  margin-left: 200px;
}

.post_box {
  display: flex;
}
.post_ing {
  width: 522px;
  height: 700px;
  background-color: #f4caa1;
  margin-left: 109px;
  margin-right: 89px;
}

.post_dish {
  width: 522px;
  height: 700px;
  background-color: #f4caa1;
  margin-left: 109px;
  margin-right: 89px;
}
.title_box {
  display: flex;
}
</style>
