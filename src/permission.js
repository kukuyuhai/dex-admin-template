import router from "@/router/"
import getPageTitle from "@/utils/get-page-title"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { getToken } from "@/utils/auth"
// 路由白名单
const whiteList = ["/login"]

router.beforeEach(async (to, from, next) => {
  // if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" })
  // else next()
  NProgress.start()
  document.title = getPageTitle(to.meta.title)

  // 判断用户是否已经登录
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === "/login") {
      // if is logged in, redirect to the home page
      next({ path: "/" })
      NProgress.done()
    } else {
      next()
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