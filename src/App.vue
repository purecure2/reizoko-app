<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/my-page">Mypage</router-link>
    </div>
    <router-view />
    <div v-if="isLoggin">ログイン中</div>
    <div v-else>ログアウトしました</div>
    <div></div>
    <button v-if="isLoggin" v-on:click="logOut">LOGOUT!</button>
    <button v-else v-on:click="login">LOGIN!</button>
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
  color: #42b983;
}
</style>
