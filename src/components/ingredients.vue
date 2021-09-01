<template>
  <div class="form__wrapper">
    <textarea
      class="form__textarea"
      v-model="text"
      placeholder="冷蔵庫にある食材"
    />
    <input type="date" v-model="date" id="date" />
    <div class="form__buttons">
      <button v-on:click="post" class="form__submit-button">記録</button>
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
.form__wrapper {
  padding: 1rem;
}
.form__textarea {
  width: 100%;
  height: 50px;
  padding: 0.3rem;
  line-height: 1.3rem;
  border-radius: 5px;
  border: none;
  resize: none;
}
.form__textarea:focus {
  outline: none;
}
.form__buttons {
  display: flex;
  justify-content: flex-end;
}
</style>
