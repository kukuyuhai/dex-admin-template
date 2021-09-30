<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue"
  import Sidebar from "./components/Sidebar/index.vue"
  import AppMain from "./components/AppMain.vue"
  import { computed, defineComponent } from "vue"
  import { useAppStore, useSettingsStore } from "@/stores"

  export default defineComponent({
    name: "Layout",
    components: {
      Navbar,
      Sidebar,
      AppMain
    },
    setup() {
      const appstore = useAppStore()
      const settings = useSettingsStore()
      const classObj = computed(() => {
        return {
          hideSidebar: !appstore.sidebar.opened,
          openSidebar: appstore.sidebar.opened,
          withoutAnimation: appstore.sidebar.withoutAnimation
        }
      })

      return {
        fixedHeader: settings.fixedHeader,
        classObj,
        sidebar: appstore.sidebar
      }
    }
  })
</script>
<style lang="scss" scoped>
  @import "~/styles/mixin.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px);
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
