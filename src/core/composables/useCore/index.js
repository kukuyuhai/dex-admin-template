import { useRoute, useRouter } from "vue-router"
import { inject } from "vue"

export function useCore() {
  const route = useRoute()
  const router = useRouter()
  const mitt = inject("mitt")
  // 注册所有modules

  return {
    router,
    route,
    mitt
  }
}
