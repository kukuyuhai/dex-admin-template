<template>
  <div style="padding: 40px"
    >Welocome {{ name }}!!!

    <span style="color: var(--el-color-primary)">nihao</span>

    <p class="text-red-400 dark:text-green-400">Preview</p>
  </div>
</template>
<script>
  import { defineComponent } from "vue"
  import { useUserStore } from "../../stores"

  export default defineComponent({
    setup() {
      const user = useUserStore()
      return {
        name: user.name
      }
    }
  })
</script>
