import { useRouter } from "vue-router"
import { useRoute } from "vue-router"
// mapstores
export function useCore() {
  const route = useRoute()
  const router = useRouter()

  return {
    router,
    route
  }
}