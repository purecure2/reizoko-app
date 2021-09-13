<template>
  <div>
    <img class="img-wrap" src="../assets/001.jpg" width="100%" />

    <div class="second_part">
      <div class="line">
        <div class="site_about">冷蔵庫の中身（料理・材料）<br>を管理することでフードロスを<br>なくそう！という画期的なサイトです</div>
      </div>
    </div>

    <div class="container">
<p>about</p>
  <div class="wavy-line-upper">
    <div></div><div></div><div></div><div></div><div></div>
  </div>
    <div class="wavy-line-downer">
    <div></div><div></div><div></div><div></div><div></div>
  </div>
</div>
    <div class="first_part">
      <div class="zero">
        <div class="zero_left"><UserProfile /></div>
        <img class="img_reizoko" src="../assets/002.png" />
      </div>
    </div>
    <div class="part">
      <div class="circle">
        <img class="img-wrap" src="../assets/004.png" width="100px" />
        <div class="name">Ingredients</div>
      </div>
      <div class="circle">
        <img class="img-wrap" src="../assets/006.png" width="100px" />
        <div class="name">Dishes</div>
      </div>
    </div>


    <div class=""></div>
  </div>
</template>

<script>

import UserProfile from "../components/UserProfile.vue"

export default {
  components: {
    UserProfile,
  },

}
</script>
<style scoped>
.img-wrap {
  animation: img-wrap 2s cubic-bezier(.4, 0, .2, 1);
}

@keyframes img-wrap {
  0% {
    clip-path: circle(0 at 50% 50%);
    -webkit-clip-path: circle(0 at 50% 50%);
  }

  100% {
    clip-path: circle(100% at 50% 50%);
    -webkit-clip-path: circle(100% at 50% 50%);
  }
}

.second_part{
  padding-bottom: 70px;
  height: 270px;
  text-align: left; 
  font-family: "Noto Sans JP"; 
}

.line {
  padding-left: 100px;
  border-left: 5px solid #1976D2;
  margin-left: 200px;
  height: 350px;
}

.site_about{
 padding-top: 100px;
 font-size:30px;
 letter-spacing: 0.4em;
}

.zero_left{
  margin-top: 50px;
  margin-left: 50px;
}
.img_reizoko{
 width: 200px;
 margin-right: 100px;
}



.link {
  padding: 10px;
}

.container {
  background: #1976D2;

}
.zero{
  display: flex;
  justify-content: space-around;
  padding: 50px;
}

.container p {
  font-size: 40px;
  padding: 30px;
  margin:0;
  color: #FFF;
}

.wavy-line-upper {
  --wave-w: 200px;
  --wave-h: 100px;
  display: flex;
  height: calc(var(--wave-h) / 2 );
  margin-left: -200px;
  overflow: hidden;
}

.wavy-line-upper div {
  width: var(--wave-w);
  min-width: var(--wave-w);
  height: var(--wave-h);
  margin-left: calc(var(--wave-w) * 0.75);
  border-radius: 100px 100px 0 0;
  box-sizing: border-box;
/*  border: solid 2px #696969; */
  border-bottom: 0;
  overflow: hidden;
  background: #FFF;
}

.wavy-line-downer {
  --wave-w: 200px;
  --wave-h: 100px;
  display: flex;
  margin-left: -25px;
  overflow: hidden;
  background: #FFF;
}

.wavy-line-downer div {
  width: var(--wave-w);
  min-width: var(--wave-w);
  height: var(--wave-h);
  position: relative;
  top: calc(var(--wave-h) * -0.48);
  margin-left: calc(var(--wave-w) * 0.75);
  border-radius: 0 0 100px 100px;
  box-sizing: border-box;
/*  border: solid 2px #696969; */
  border-top: 0;
  background: #1976D2;
}

.part{
  height: 400px;
  background: #1976D2;
  margin: 80px 0;
  display: flex;
  justify-content: space-around;
  padding: 130px 130px 0 130px;

}

.circle{
  width: 240px;
  height: 240px;
  line-height: 200px;
  background-color: white;
  border-radius: 50%;
  color: #1976D2;
  text-align: center;
  
}

.name{
  margin-top: -150px; 
  font-size: 28px;
  font-family: 'Exo', sans-serif;
}
</style>
