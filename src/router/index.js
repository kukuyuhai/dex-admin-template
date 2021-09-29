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
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("@/views/form/index.vue"),
        meta: { icon: "el-icon-arrow-right", title: "form" }
      }
    ]
  }
]

/**
 * 创建路由实例
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

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

// 默认导出
export default router
