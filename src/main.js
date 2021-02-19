import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import axios from "axios"
import "./assets/index.css"

axios.defaults.baseURL = process.env.VUE_APP_API
axios.defaults.headers["content-type"] = "application/json; charset=utf-8"

createApp(App)
  .use(store)
  .use(router)
  .mount("#app")
