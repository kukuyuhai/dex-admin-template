import { createPinia } from "pinia"
export const pinia = createPinia()
import { usePermissionStore } from "./modules/permission"
import { useAppStore } from "./modules/app"
import { useUserStore } from "./modules/user"
import { useSettingsStore } from "./modules/settings"
// 挂载pinia
export function setupStore(app) {
  app.use(pinia)
}

/**
 * 导出所有store模块
 * @returns stores
 */
export function useStore() {
  const permission = usePermissionStore()
  const app = useAppStore()
  const user = useUserStore()
  const settings = useSettingsStore()

  return {
    permission,
    app,
    user,
    settings
  }
}

// 导出所有模块
export * from "./modules/permission"
export * from "./modules/app"
export * from "./modules/user"
export * from "./modules/settings"
