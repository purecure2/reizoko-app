<template>
  <div class="tabs">
    <input id="all" type="radio" name="tab_item" checked />
    <label class="tab_item" for="all">料理</label>
    <input id="programming" type="radio" name="tab_item" />
    <label class="tab_item" for="programming">材料</label>
    <div class="tab_content" id="all_content">
      <div class="tab_content_description">
        <div v-for="dish in dishes" :key="dish.name" class="c-txtsp">
          料理名：{{ dish.text }} 消費期限：{{ dish.date }}
          <button v-on:click="test(dish.text)">削除</button>
        </div>
      </div>
    </div>
    <div class="tab_content" id="programming_contennot">
      <div class="tab_content_description">
        <div
          v-for="ingredient in ingredients"
          :key="ingredient"
          class="c-txtsp"
        >
          材料名：{{ ingredient.text }} 消費期限：{{ ingredient.date }}
          <button v-on:click="test2(ingredient.text)">削除</button>
        </div>
      </div>
    </div>
  </div>
  <!-- <div id="app">
     <div v-on:click="add">データをとってきたい</div>
    ここにv-forとかを使って{{ dishes.name }}とかを表示する必要がある
    <div v-for="dish in dishes" :key="dish">
      料理名：{{ dish.name }}消費期限：{{ dish.data }}
    </div>
    <div v-for="ing in ings" :key="ing">
      料理名：{{ ing.name }}消費期限：{{ ing.data }}
    </div>
  </div> -->
</template>

<script>
import firebase from "firebase"
export default {
  data() {
    return {
      userId: "",
      ddoc: "",
      ddoc2: "",
      dishes: [{ date: "", text: "" }],
      ingredients: [{ date: "", text: "" }],
    }
  },
  //ここにfirebase AuthからユーザーIDを取得してthis.userIDに代入する文を書く
  computed: {
    user() {
      return this.$auth.currentUser
    },
  },
  methods: {
    async test(value) {
      const index = this.dishes.indexOf(value)
      this.dishes.splice(index, 1)
      const db = firebase.firestore()
      await db
        .collection("users")
        .doc(this.userId)
        .collection("dishes")
        .where("text", "==", value)
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            this.ddoc = doc.id
          })
        })
      await db
        .collection("users")
        .doc(this.userId)
        .collection("dishes")
        .doc(this.ddoc)
        .delete()
      window.location.reload()
    },
    async test2(value) {
      const index = this.ingredients.indexOf(value)
      this.ingredients.splice(index, 1)
      const db = firebase.firestore()
      await db
        .collection("users")
        .doc(this.userId)
        .collection("ingredients")
        .where("text", "==", value)
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            this.ddoc2 = doc.id
          })
        })
      await db
        .collection("users")
        .doc(this.userId)
        .collection("ingredients")
        .doc(this.ddoc2)
        .delete()
      window.location.reload()
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
      .collection("ingredients")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.ingredients.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

.tabs {
  
  margin-top: 50px;
  padding-bottom: 40px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 700px;
  margin: 0 auto;
  font-family: 'Noto Sans JP', sans-serif;
}

/*タブのスタイル*/
.tab_item {
  width: calc(100% / 2);
  height: 80px;
  border-bottom: 3px solid #01579b;
  background-color: #d9d9d9;
  line-height: 80px;
  font-size: 16px;
  text-align: center;
  color: #01579b;
  display: block;
  float: left;
  text-align: center;
  font-weight: bold;
  transition: all 0.2s ease;
}
.tab_item:hover {
  opacity: 0.75;
}

/*ラジオボタンを全て消す*/
input[name="tab_item"] {
  display: none;
}

/*タブ切り替えの中身のスタイル*/
.tab_content {
  display: none;
  padding: 40px 40px 0;
  clear: both;
  overflow: hidden;
}

/*選択されているタブのコンテンツのみを表示*/
#all:checked ~ #all_content,
#programming:checked ~ #programming_content,
#design:checked ~ #design_content {
  display: block;
}

/*選択されているタブのスタイルを変える*/
.tabs input:checked + .tab_item {
  background-color: #01579b;
  color: #fff;
}

.tab_content_description{
  text-align: left; 

}


</style>
