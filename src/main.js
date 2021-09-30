import "virtual:windi.css"
import "element-plus/theme-chalk/src/index.scss"
import { setupRouterMountedApp } from "@/router/"
import { setupEcharts } from "@/setup/echarts"
import { setupStore } from "@/stores/"
import { setupElementPlus } from "@/setup/element-plus"
import { setupSvgIcon } from "./setup/svg-icon"
import mitt from "mitt"
import { createApp } from "vue"
import App from "./App.vue"
import "./permission" // 注册路由权限
const app = createApp(App)
import "./styles/index.scss"

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
// 配置全局属性
app.config.globalProperties.$mitt = mitt()
app.config.performance = true
