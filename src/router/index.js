import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "@/layouts/index.vue"
import menuRouter from "./modules/menu"
import formRouter from "./modules/form"
/**
 * 没有权限要求的基本页面
 * 所有角色都可以被访问
 */
export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    hidden: true
  },
  {
    path: "/auth-redirect",
    component: () => import("@/views/login/auth-redirect.vue"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: { title: "仪表盘", icon: "dashboard" }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/views/error-pages/404.vue"),
    hidden: true
  }
]

/**
 * 需要根据用户角色动态加载的路由
 */

export const asyncRoutes = [formRouter, menuRouter]

/**
 * 创建路由实例
 */
const createbaseRouter = () =>
  createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 })
  })

const router = createbaseRouter()

/**
 * 挂载路由方法
 * @param {*} app  app实例
 */
export function setupRouterMountedApp(app) {
  app.use(router)
  // 路由加载完成后挂载app
  router.isReady().then(() => {
    app.mount("#app")
  })
}

/**
 * 重置路由
 */
export function resetRouter() {
  const newRouter = createbaseRouter()
  router.resolve = newRouter.resolve // reset router
}

// 默认导出
export default router
