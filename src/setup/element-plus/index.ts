import { ElButton, ElPopper, ElTable, ElTableColumn, ElTooltip, locale } from "element-plus"
import localelib from "element-plus/lib/locale"
import lang from "element-plus/lib/locale/lang/zh-cn"
//  样式通过vite自动导入
const compList = [ElTable, ElTableColumn, ElTooltip, ElPopper, ElButton]
// element comp 全局引入注册,
const setupElementPlus = (app) => {
  // hack element 打包error。
  import.meta.env.DEV ? locale(lang) : localelib.use(lang)

  compList.forEach((comp) => {
    app.component(comp.name, comp)
  })
}

export { setupElementPlus }
