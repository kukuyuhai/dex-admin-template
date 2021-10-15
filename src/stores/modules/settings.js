import { defineStore } from "pinia"
import defaultSettings from "@/settings"
const { showSettings, fixedHeader, sidebarLogo, sidebar, theme, tagsView } = defaultSettings

export const useSettingsStore = defineStore("settings", {
  state: () => {
    return {
      showSettings: showSettings,
      fixedHeader: fixedHeader,
      sidebarLogo: sidebarLogo,
      rightPanelShow: false,
      theme: theme,
      sidebar: sidebar,
      pageSwitchAnimation: true,
      tagsView: tagsView
    }
  },
  actions: {
    changeSetting({ key, value }) {
      console.log(key, value)
      this.$state[key] = value
    }
  }
})
