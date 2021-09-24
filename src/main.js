import "@/assets/css/index.scss"
import { setupRouter } from "@/router/"
import { setupEcharts } from "@/setup/echarts"
import { setupElementPlus } from "@/setup/element-plus"
import { setupSvgIcon } from "./setup/svg-icon"
import { setupStore } from "@/store/"
import mitt from "mitt"
import "normalize.css"
import { createApp } from "vue"
import App from "./App.vue"
import "./styles/index.css"
import "./permission" // 注册路由权限

const app = createApp(App)
// 装载Echarts
setupEcharts(app)
// 装载element-plus
setupElementPlus(app)
// 注册store
setupStore(app)
// 全局注册自定义模块组件
setupSvgIcon(app)

// 配置全局属性
app.config.globalProperties.$mitt = mitt()

setupRouter(app)
app.mount("#app")
