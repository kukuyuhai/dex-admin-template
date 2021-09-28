import { defineStore } from "pinia"
import { getToken, setToken } from "@/utils/auth"
import { login as userLogin } from "@/api/user"

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
    async login(userInfo) {
      try {
        const result = await userLogin(userInfo)
        if (result) {
          this.setToken(result.token)
          setToken(result.token)
        }
        return result
      } catch (error) {
        return error
      }
    },
    setToken(token) {
      this.token = token
    },
    reseToken() {
      console.log("resetToken")
    }
  }
})
