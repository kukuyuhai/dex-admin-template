import Index from "@/views/index.vue"
import type { App } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    }
  ],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
