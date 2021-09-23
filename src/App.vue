<template>
	<img alt="Vue logo" :src="logosrc" />
	<HelloWorld msg="Hello Vue 3 + Vite" />
	<el-button type="primary">element button</el-button>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue"
import logosrc from "./assets/logo.png"
</script>
