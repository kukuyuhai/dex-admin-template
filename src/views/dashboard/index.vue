<template>
  <div style="padding: 40px"
    >Welocome {{ name }}!!!

    <span style="color: var(--el-color-primary)">nihao</span>

    <p class="text-red-400 dark:text-green-400">Preview</p>
  </div>
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
