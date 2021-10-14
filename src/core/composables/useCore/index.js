import { useRoute, useRouter } from "vue-router"
import { useStore } from "@/stores/index"
import { inject } from "vue"
export function useCore() {
  const route = useRoute()
  const router = useRouter()
  const store = useStore()
  const mitt = inject("mitt")

  return {
    router,
    route,
    store,
    mitt
  }
}
