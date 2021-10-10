<template>
  <div class="drawer-container">
    <h3 class="drawer-title">页面设置</h3>

    <div class="drawer-item">
      <span>主题颜色</span>
      <theme-picker
        style="float: right; height: 26px; margin: -3px 8px 0 0"
        @change="themeChange"
      />
    </div>

    <div class="drawer-item">
      <span>历史访问</span>
      <el-switch v-model="tagsView" class="drawer-switch" />
    </div>

    <div class="drawer-item">
      <span>头部固定</span>
      <el-switch v-model="fixedHeader" class="drawer-switch" />
    </div>

    <div class="drawer-item">
      <span>系统LOGO</span>
      <el-switch v-model="sidebarLogo" class="drawer-switch" />
    </div>

    <div class="drawer-item">
      <span>页面切换动画</span>
      <el-switch v-model="pageSwitchAnimation" class="drawer-switch" />
    </div>
  </div>
</template>

<script>
  import { computed } from "vue"
  import { useSettingsStore } from "../../../stores"
  import ThemePicker from "@/components/ThemePicker/index.vue"

  export default {
    name: "Settings",
    components: {
      ThemePicker
    },
    setup() {
      const store = useSettingsStore()
      const fixedHeader = computed({
        get() {
          return store.fixedHeader
        },
        set(val) {
          store.changeSetting({
            key: "fixedHeader",
            value: val
          })
        }
      })

      const sidebarLogo = computed({
        get() {
          return store.sidebarLogo
        },
        set(val) {
          store.changeSetting({
            key: "sidebarLogo",
            value: val
          })
        }
      })

      const tagsView = computed({
        get() {
          return store.tagsView
        },
        set(val) {
          store.changeSetting({
            key: "tagsView",
            value: val
          })
        }
      })

      const pageSwitchAnimation = computed({
        get() {
          return store.pageSwitchAnimation
        },
        set(val) {
          store.changeSetting({
            key: "pageSwitchAnimation",
            value: val
          })
        }
      })

      function themeChange(val) {
        this.$store.dispatch("settings/changeSetting", {
          key: "theme",
          value: val
        })
      }
      return {
        fixedHeader,
        sidebarLogo,
        tagsView,
        pageSwitchAnimation,
        themeChange
      }
    }
    // computed: {

    //   tagsView: {
    //     get() {
    //       return this.$store.state.settings.tagsView
    //     },
    //     set(val) {
    //       this.$store.dispatch("settings/changeSetting", {
    //         key: "tagsView",
    //         value: val
    //       })
    //     }
    //   },
    //   pageSwitchAnimation: {
    //     get() {
    //       return this.$store.state.settings.pageSwitchAnimation
    //     },
    //     set(val) {
    //       this.$store.dispatch("settings/changeSetting", {
    //         key: "pageSwitchAnimation",
    //         value: val
    //       })
    //     }
    //   }
    // },
  }
</script>

<style lang="scss" scoped>
  .drawer-container {
    padding: 24px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;

    .drawer-title {
      margin-bottom: 12px;
      color: rgba(0, 0, 0, 0.85);
      font-size: 14px;
      line-height: 22px;
    }

    .drawer-item {
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      padding: 12px 0;
    }

    .drawer-switch {
      float: right;
    }
  }
</style>
