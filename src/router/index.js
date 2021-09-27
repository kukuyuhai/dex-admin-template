import login from "@/views/login/index.vue"
import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "@/views/layout/index.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
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
  ],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const syncRoutes = []

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

export default router
