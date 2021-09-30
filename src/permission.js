import router from "@/router/"
import getPageTitle from "@core/utils/get-page-title"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { getToken } from "@core/utils/auth"
import { useUserStore, usePermissionStore, pinia } from "@/stores/"
import { ElMessage } from "element-plus"
import defaultSettings from "@/settings"

// 路由白名单
const whiteList = ["/login"]

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  document.title = getPageTitle(to.meta.title, defaultSettings.title)

  // 判断用户是否已经登录
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === "/login") {
      // if is logged in, redirect to the home page
      next({ path: "/" })
      NProgress.done()
    } else {
      const userStore = useUserStore(pinia)
      const permissionStore = usePermissionStore(pinia)
      const hasRoles = userStore.hasRoles
      console.log("hasRoles", hasRoles)
      if (hasRoles) {
        next()
      } else {
        try {
          const { roles } = await userStore.getUserInfo()
          const accessRoutes = await permissionStore.generateRoutes(roles)
          console.log(accessRoutes)
          accessRoutes.forEach((route) => router.addRoute(route))
          next({ ...to, replace: true })
        } catch (error) {
          console.log("permission error", error)
          await userStore.reseToken()
          ElMessage.error(error || "Has Error")
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
