<template>
  <div style="padding: 40px">Welocome {{ name }}!!! </div>
</template>
<script>
  import { defineComponent } from "vue"
  import { useCore } from "@/core/hooks"

  export default defineComponent({
    setup() {
      const { store } = useCore()
      // const mitt = inject("mitt")
      // console.log(route, router, store.user.name, mitt)

      return {
        name: store.user.name
      }
    }
  })
</script>
