import { defineStore } from "pinia"

export const usePermissionStore = defineStore("permission", {
  state: () => ({
    routes: [],
    addRoutes: []
  }),
  actions: {
    generateRoutes() {
      this.addRoutes.push({
        path: "/asyn/view",
        name: "asyncview",
        component: "@/views/asyncRouteView/index.vue"
      })

      return this.addRoutes
    }
  }
})
