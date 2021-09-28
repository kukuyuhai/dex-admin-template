import { defineStore } from "pinia"
import { getToken } from "@/utils/auth"

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: getToken(),
      name: "",
      avatar: "",
      roles: ["admin"]
    }
  },
  getters: {
    items: (state) => {
      return state.token
    }
  },
  actions: {
    reseToken() {
      console.log("resetToken")
    }
  }
})
