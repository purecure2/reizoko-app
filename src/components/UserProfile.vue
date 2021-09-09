<template>
  <div>
    {{ user.displayName }}
    <div v-on:click="addf">冷蔵庫を作る</div>
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
