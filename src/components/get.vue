<template>
  <div id="app">
    <!-- <div v-on:click="add">データをとってきたい</div>
    ここにv-forとかを使って{{ dishes.name }}とかを表示する必要がある -->
    <div v-for="dish in dishes" :key="dish">
      料理名：{{ dish.name }}消費期限：{{ dish.data }}
    </div>
    <div v-for="ing in ings" :key="ing">
      料理名：{{ ing.name }}消費期限：{{ ing.data }}
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  data() {
    return {
      userId: "",
      dishes: [{ data: "", name: "" }],
      ings: [{ data: "", name: "" }],
    }
  },
  //ここにfirebase AuthからユーザーIDを取得してthis.userIDに代入する文を書く
  computed: {
    user() {
      return this.$auth.currentUser
    },
  },
  async created() {
    this.userId = this.user.uid
    // usersからdishesコレクションの中身をgetする
    await firebase
      .firestore()
      .collection("users")
      .doc(this.userId)
      .collection("dishes")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.dishes.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
    // usersからingコレクションの中身をgetする
    await firebase
      .firestore()
      .collection("users")
      .doc(this.userId)
      .collection("ing")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.ing.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
  },
}
</script>
