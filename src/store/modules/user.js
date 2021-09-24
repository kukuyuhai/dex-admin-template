import { defineStore } from "pinia"
import { getToken } from "@/utils/auth"

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: getToken(),
      name: "",
      avatar: "",
      roles: []
    }
  },
  actions() {}
})
