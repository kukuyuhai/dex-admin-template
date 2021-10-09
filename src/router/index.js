import login from "@/views/login/index.vue"
import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "@/layouts/index.vue"

/**
 * 没有权限要求的基本页面
 * 所有角色都可以被访问
 */
export const constantRoutes = [
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
    path: "/form",
    name: "form",
    component: Layout,
    redirect: "/form/create",
    children: [
      {
        path: "create",
        name: "create",
        component: () => import("@/views/form/create.vue"),
        meta: { icon: "el-icon-document-copy", title: "表单" }
      }
    ]
  },
  {
    path: "/menu",
    name: "menu",
    component: Layout,
    redirect: "/menu/table",
    meta: { title: "Table", icon: "el-icon-menu" },
    children: [
      {
        path: "table",
        name: "menu-table",
        component: () => import("@/views/menu/table.vue"),
        meta: { title: "表格", icon: "el-icon-s-grid" }
      },
      {
        path: "chart",
        name: "menu-chart",
        component: () => import("@/views/menu/chart.vue"),
        meta: { title: "图表", icon: "el-icon-pie-chart" }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: login,
    hidden: true,
    meta: { title: "登录" }
  },

  {
    path: "/404",
    component: () => import("@/views/error-pages/404.vue"),
    hidden: true
  },
  { path: "/:catchAll(.*)", redirect: "/404", hidden: true }
]

/**
 * 需要根据用户角色动态加载的路由
 */

export const asyncRoutes = []

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
