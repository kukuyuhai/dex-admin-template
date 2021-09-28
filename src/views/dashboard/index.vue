<template>
  <div>
    <img alt="Vue logo" :src="logosrc" />
    <el-button type="primary">element button</el-button>
    <svg-icon icon-class="error-404" color="#363635"></svg-icon>
  </div>
</template>

<script setup>
  import SvgIcon from "@/components/SvgIcon/index.vue"
  import logosrc from "@/assets/logo.png"
</script>
