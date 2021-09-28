import { createPinia } from "pinia"
export const pinia = createPinia()
// 挂载pinia
export function setupStore(app) {
  app.use(pinia)
}
// 导出所有模块
export * from "./modules/permission"
export * from "./modules/app"
export * from "./modules/user"
