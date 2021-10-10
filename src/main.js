import "virtual:windi.css"
import "element-plus/theme-chalk/src/index.scss"
import { setupRouterMountedApp } from "@/router/"
import { setupEcharts } from "@/setup/echarts"
import { setupStore } from "@/stores/"
import { setupElementPlus } from "@/setup/element-plus"
import { setupSvgIcon } from "./setup/svg-icon"
import { createApp } from "vue"
import { bootstrap } from "./core"
import App from "./App.vue"
import "./permission" // 注册路由权限
const app = createApp(App)
import "./styles/index.scss"
import { mockXHR } from "../mock/mockXHR"

if (import.meta.env.VITE_APP_USE_MOCK) {
  mockXHR()
}

// 启动app
bootstrap(app)
  .then(() => {
    // 装载Echarts
    setupEcharts(app)
    // 装载element-plus
    setupElementPlus(app)
    // 全局注册自定义模块组件
    setupSvgIcon(app)
    // 注册store
    setupStore(app)
    // 装在路由
    setupRouterMountedApp(app)
  })
  .catch(() => {
    console.error("程序启动失败!!!")
  })
// 配置全局属性

app.config.performance = true
