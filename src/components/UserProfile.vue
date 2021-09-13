<template>
  <div class="body">
    <p>ユーザー名：{{ user.displayName }}</p>
    <div>
      <div class="btn-square">
        <div v-on:click="addf">ユーザー情報の登録</div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  computed: {
    user() {
      return this.$auth.currentUser
    },
  },
  methods: {
    async addf() {
      console.log("uid:", this.user.uid),
        await firebase.firestore().collection("users").doc(this.user.uid).set({
          name: this.user.displayName,
          photo: this.user.photoURL,
        })
    },
  },
}
</script>

<style scoped>
.btn-square {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;/*ボタン色*/
  color: #FFF;
  border-bottom: solid 4px #627295;
  border-radius: 3px;


}
.btn-square:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
}

.body{
  font-family: "Noto Sans JP"; 
}
</style>
