import { defineStore } from "pinia"

export const usePermissionStore = defineStore("permission", {
  state: () => ({
    routes: [],
    addRoutes: []
  }),
  actions: {
    async login() {
      try {
        // const result = await api.login({})
        // console.log(result)
      } catch (error) {
        return error
      }
    }
  }
})
