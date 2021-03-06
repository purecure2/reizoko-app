import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Mypage from "../views/Mypage.vue"
import About from "../views/About.vue"
import firebase from "firebase"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "User",
    component: Home,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/my-page",
    name: "MyPage",
    component: Mypage,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

/*const isSignedIn = async () => {
  // Promise を使って、onAuthStateChanged が完了するまで待つ
  return await new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          unsubscribe()
          resolve(true)
        } else {
          unsubscribe()
          resolve(false)
        }
      },
      (error) => {
        unsubscribe()
        reject(error)
      }
    )
  })
}

// Vue Router のグローバルガードで、ログインしてない場合は、BeforeSignInにしか行けなくする。

router.beforeEach(async (to, from, next) => {
  const auth = await isSignedIn()
  if (to.name !== "Mypage" && !auth) {
    next("/my-page")
  } else {
    next()
  }
})*/

const isSignedIn = async () => {
  // Promise を使って、onAuthStateChanged が完了するまで待つ
  return await new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          unsubscribe()
          resolve(true)
        } else {
          unsubscribe()
          resolve(false)
        }
      },
      (error) => {
        unsubscribe()
        reject(error)
      }
    )
  })
}

router.beforeEach(async (to, from, next) => {
  const auth = await isSignedIn()
  if (to.name !== "MyPage" && !auth) {
    next("/my-page")
  } else {
    next()
  }
})
export default router
