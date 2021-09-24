import { createPinia } from "pinia"
const store = createPinia()

// 导出所有模块
export * from "./modules/permission"
export * from "./modules/app"
export * from "./modules/user"

export function setupStore(app) {
  app.use(store)
}

export { store }
