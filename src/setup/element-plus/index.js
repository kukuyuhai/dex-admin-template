import { ElButton, ElPopper, ElTable, ElTableColumn, ElTooltip, locale } from "element-plus"
import lang from "element-plus/lib/locale/lang/zh-cn"
//  样式通过vite自动导入
const compList = [ElTable, ElTableColumn, ElTooltip, ElPopper, ElButton]
// element comp 全局引入注册,
const setupElementPlus = (app) => {
  locale(lang)
  compList.forEach((comp) => {
    app.use(comp)
  })
}

export { setupElementPlus }
