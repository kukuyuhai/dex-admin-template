<template>
  <span ref="el">我是红色</span>
</template>
<script setup>
  import { useCssVar } from "@vueuse/core"
  import { ref } from "vue"

  const theme = {
    color: "red"
  }
  const el = ref(null)

  const varColor = useCssVar("--color", el)
  console.log(varColor.value)
  varColor.value = theme.color
</script>

<style scoped>
  span {
    color: var(--color);
  }
</style>
