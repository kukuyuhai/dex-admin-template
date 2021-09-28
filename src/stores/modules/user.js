import { defineStore } from "pinia"
import { getToken, setToken } from "@/utils/auth"
import { login as userLogin, getInfo } from "@/api/user"

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: getToken(),
      name: "",
      avatar: "",
      roles: []
    }
  },
  getters: {
    hasRoles: (state) => {
      return state.roles && state.roles.length > 0
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
    async getUserInfo() {
      try {
        const result = await getInfo(this.token)
        const { roles } = result
        if (!roles || roles.length <= 0) {
          return "用户角色必须是数组"
        }
        // 设置用户信息
        this.roles = result.roles
        this.name = result.name
        this.avatar = result.avatar
        return { roles: this.roles }
      } catch (error) {
        return { roles: [] }
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
