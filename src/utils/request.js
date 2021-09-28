import axios from "axios"
import { ElMessage } from "element-plus"
import { useUserStore, pinia } from "@/stores/"
import { getToken } from "@/utils/auth"
const user = useUserStore(pinia)
console.log(import.meta.env)
// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // 请求头塞入token，token过期时间为1天

    if (user.token) {
      config.headers["Authorization"] = getToken()
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    // 处理流数据返回
    if (res instanceof Blob) {
      // 记录文件名
      const fileName = response.headers["content-disposition"].split("filename=")[1]
      if (fileName) {
        res.fileName = fileName
      }
      return res
    } else {
      if (res.code !== 200) {
        ElMessage({
          ElMessage: res.ElMessage || "Error",
          type: "error",
          duration: 2 * 1000
        })

        if (res.code == 401 || res.code == 403) {
          user.reseToken()
          // store.dispatch("user/resetToken").then(() => {
          //   location.reload()
          // })
        }
        // 处理除了200以外的其他异常，直接抛出由请求自己处理
        return Promise.reject(new Error(res.ElMessage || "Error"))
      } else {
        return res
      }
    }
  },
  (error) => {
    console.log("err" + error) // for debug
    user.reseToken()
    ElMessage({
      ElMessage: error.ElMessage,
      type: "error",
      duration: 2 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
