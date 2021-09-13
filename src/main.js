import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./firebase.js"

Vue.config.productionTip = false



new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('fa-icon', FontAwesomeIcon)

import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faUserSecret)

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'