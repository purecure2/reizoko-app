<template>
  <div class="form-wrapper">
    <textarea
      class="form-textarea"
      v-model="text"
      placeholder="冷蔵庫にある料理"
    />
    <input type="date" id="date" />
    <div class="form-buttons">
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
      //   date: "",
    }
  },
  methods: {
    post() {
      // alert("なにたべる？")
      firebase.firestore().collection("users").doc("").add({
        text: this.text,
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
