import login from "@/views/login/index.vue"
import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "@/views/layout/index.vue"

/**
 * 没有权限要求的基本页面
 * 所有角色都可以被访问
 */
export const constantRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    hidden: true,
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/dashboard/index.vue"),
        meta: { title: "首页" }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: login,
    meta: { title: "登录" }
  }
]

/**
 * 需要根据用户角色动态加载的路由
 */

export const asyncRoutes = [
  {
    path: "/form",
    name: "form",
    component: Layout,
    redirect: "/form/index",
    meta: { icon: "el-icon-document-copy", title: "color" },
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("@/views/form/index.vue"),
        meta: { icon: "error-404", title: "form" }
      },
      {
        path: "color",
        name: "color",
        component: () => import("@/views/home/index.vue"),
        meta: { icon: "error-404", title: "color" }
      }
    ]
  }
]

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
