<template>
  <div id="app">
    <div class="hearder shadow">
      <div class="logo">Refcon</div>
      <div id="nav">
        <router-link to="/home" class="hearder_part">Home</router-link> |
        <router-link to="/about" class="hearder_part">About</router-link>|
        <router-link to="/my-page " class="hearder_part">Mypage</router-link>
      </div>
    </div>
    <router-view />
    <div></div>
    <button v-if="isLoggin" v-on:click="logOut">ログアウト♡</button>
    <button v-else v-on:click="login">ログイン♡</button>
  </div>
  
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
      isLoggin: false,
    }
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log({ result })
          if (result.user) {
            this.isLoggin = true
          }
        })
    },
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.isLoggin = false
        })
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@1,900&display=swap');



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #01579b;
}
.hearder {
  height: 85px;
  display: flex;
  justify-content: flex-end;
  padding: 0 50px;
}

.shadow {
  box-shadow: 0 3px 10px rgb(0 0 0 / 16%);
}

.hearder_part {
  color: white;
  font-size: 20px;
}

.logo{
  font-size: 55px;
  color: #1976D2;
  font-family: 'Exo', sans-serif;
  margin-right: 300px;
}
</style>
