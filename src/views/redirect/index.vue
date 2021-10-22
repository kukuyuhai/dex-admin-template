<script>
  import { useRoute, useRouter } from "vue-router"
  import { onBeforeMount, defineComponent, h } from "vue"

  export default defineComponent({
    setup() {
      const $router = useRouter()
      const $route = useRoute()
      onBeforeMount(() => {
        const { params, query } = $route
        const { path } = params
        $router.replace({ path: "/" + path, query })
      })
    },
    render() {
      // <transition /> 子组件必须是一个真实的元素，不能使用Fragment。
      return h("div", null, {})
    }
  })
</script>

<style></style>
