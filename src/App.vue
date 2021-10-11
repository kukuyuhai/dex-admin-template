<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script>
  import zhCN from "element-plus/es/locale/lang/zh-cn"

  export default {
    name: "App",
    data() {
      return {
        locale: zhCN
      }
    }
  }
</script>
