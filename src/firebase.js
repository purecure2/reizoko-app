import Vue from "vue"
import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBgWAi-TBTPkp8aEMtFxS_gXO7ZwoP2nn8",
  authDomain: "reizoko-app.firebaseapp.com",
  projectId: "reizoko-app",
  storageBucket: "reizoko-app.appspot.com",
  messagingSenderId: "750088048369",
  appId: "1:750088048369:web:7731f1fac71934e7ffe350",
  measurementId: "G-SFPWNNTWTT",
}

firebase.initializeApp(firebaseConfig)

/**
 * Vue.observable を使って、firebase.auth()をVueアプリ全体に共有する。
 * this.$authがアプリ全体でアクセスできる様になる。
 * @example
 * firebase.auth().currentUser.displayにアクセスする例。任意のコンポーネントで以下の様に記述できる。
 * ```js
 * this.$auth.currentUser.displayName // "displayName" or ""
 * ```
 */

const initialUserState = {
  uid: "",
  displayName: "",
  photoURL: "",
}
const $auth = Vue.observable({
  currentUser: { ...initialUserState },
})
firebase.auth().onAuthStateChanged((user) => {
  let state
  if (user) {
    const { uid, displayName, photoURL } = user
    state = {
      uid,
      displayName,
      photoURL,
    }
  } else {
    state = initialUserState
  }
  Object.assign($auth.currentUser, state)
})
Vue.prototype.$auth = $auth
