<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p class="font-bold">
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
  import { reactive } from "vue"

  defineProps({
    msg: String
  })

  let a = $ref(0)
  console.log(a)

  const state = reactive({ count: 0 })
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>
