<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="false"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <!-- <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />  -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  // import { mapGetters } from "vuex"
  import Logo from "./Logo.vue"
  // import SidebarItem from "./SidebarItem"
  // import variables from "@/styles/variables.scss"
  import { computed, defineComponent } from "vue"
  import { useAppStore } from "@/stores"
  import { useRoute } from "vue-router"
  import { useSettingsStore } from "../../../../stores/modules/settings"

  export default defineComponent({
    name: "Sidebar",
    components: { Logo },
    setup() {
      const appstore = useAppStore()
      const $route = useRoute()
      const settings = useSettingsStore()
      const isCollapse = computed(() => {
        return !appstore.sidebar.opened
      })

      const showLogo = computed(() => {
        return settings.sidebarLogo
      })
      // ...mapGetters(["permission_routes", "sidebar"]),
      const activeMenu = computed(() => {
        const route = $route
        const { meta, path } = route
        // if set path, the sidebar will highlight the path you set
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return path
      })

      return {
        showLogo,
        activeMenu,
        isCollapse
        // variables
      }
    }
  })
</script>
