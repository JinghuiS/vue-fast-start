import "element-plus/dist/index.css"
import "@fast-start/core/style.css"
import ElementPlus from "element-plus"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { FastStartCore } from "@fast-start/core"

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(FastStartCore)
app.mount("#app")
