import ElementPlus from "element-plus"
import { Apple, Setting } from "@element-plus/icons"
const Icons = [Apple, Setting]
// element comp 全局引入注册,
const setupElementPlus = (app) => {
  // Icon 按需导入
  Icons.forEach((icon) => {
    app.component(icon.name, icon)
  })
  app.use(ElementPlus)
}

export { setupElementPlus }
