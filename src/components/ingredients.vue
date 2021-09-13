<template>
  <div class="form__wrapper">
    <textarea
      class="form__textarea"
      v-model="text"
      placeholder="冷蔵庫にある食材"
    />
    <div class="line_1"></div>
    <div class="line_2"></div>
    <div class="date_form">
      <input type="date" v-model="date" id="date" />
    </div>
    <div class="line_3"></div>
    <div class="line_2"></div>
    <div class="form__buttons">
    <div class="form-buttons">
      <button v-on:click="post" class="btn btn-inside btn-boarder"><img src="https://i.cloudup.com/gBzAn-oW_S-2000x2000.png" width="64px" height="64px" ></button>
    </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
      text: "",
      date: "",
    }
  },
  computed: {
    user() {
      return this.$auth.currentUser
    },
  },
  methods: {
    post() {
      // alert("なにたべる？")
      firebase
        .firestore()
        .collection("users")
        .doc(this.user.uid)
        .collection("ingredients")
        .add({
          text: this.text,
          date: this.date,
        })
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

.line_1 {
  border-bottom: 2px solid white;
  margin-left: 67px;
  width: 335px;
  margin-top: 200px;
}

.line_2 {
  border-bottom: 2px solid white;
  margin-left: 67px;
  width: 335px;
  margin-top: 66px;
}
.line_3 {
  border-bottom: 2px solid white;
  margin-left: 67px;
  width: 335px;
}

.form__textarea {
  margin-bottom: -200px;
  margin-left: -180px;
}

.date_form {
  margin-top: 50px;
  margin-left: -200px;
}

.btn {
  margin-top: 70px;
  width: 100px;
  height: 100px;
  border: none;
  color: inherit;
  background: none;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
  outline: none;
}

.btn img{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.btn:after {
  position: absolute;
  z-index: -1;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.bg {
  height: 32px;
  width: 32px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.btn-boarder {
  border: 2px solid #fff;
  border-radius: 50%;
}

.btn:hover {
 background-color:rgba(255,255,255,0.4);
}

.form-wrapper{
 font-family: 'Noto Sans JP', sans-serif;
}
 
</style>
