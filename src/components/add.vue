<template>
  <div id="app">
    <div v-on:click="add">データをとってきたい</div>
    ここにv-forとかを使って{{ dishes.name }}とかを表示する必要がある
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  data() {
    return {
      userId: "",
      dishes: [{ data: "0515", name: "やさいいため" }],
      ing: [{ data: "0909", name: "キャベツ" }],
    }
  },
  async created() {
    //ここにfirebase AuthからユーザーIDを取得してthis.userIDに代入する文を書く

    // usersからdishesコレクションの中身をgetする
    await firebase
      .firestore()
      .collection("users")
      .doc("this.userId")
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
      .doc("this.userId")
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
