<template>
  <img alt="Vue logo" :src="logosrc" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <el-button type="primary">element button</el-button>
  <svg-icon icon-class="error-404" color="#363635"></svg-icon>
</template>

<script setup>
  import HelloWorld from "@/components/HelloWorld.vue"
  import SvgIcon from "@/components/SvgIcon/index.vue"
  import logosrc from "./assets/logo.png"
</script>
