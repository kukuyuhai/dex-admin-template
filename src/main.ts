import "@/assets/css/index.scss"
import { setupRouter } from "@/router/"
import { setupEcharts } from "@/setup/echarts"
import { setupElementPlus } from "@/setup/element-plus"
import { setupStore } from "@/store/"
import mitt from "mitt"
import "normalize.css"
import { createApp } from "vue"
import App from "./App"

const app = createApp(App)
// 装载Echarts
setupEcharts(app)
// 装载element-plus
setupElementPlus(app)
// 注册store
setupStore(app)
// 全局注册自定义模块组件

// 配置全局属性
app.config.globalProperties.$mitt = mitt()

setupRouter(app)
app.mount("#app")
