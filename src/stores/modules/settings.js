import { defineStore } from "pinia"
import defaultSettings from "@/settings"
const { showSettings, fixedHeader, sidebarLogo } = defaultSettings
import variables from "@/styles/vairables.js"

export const useSettingsStore = defineStore("settings", {
  state: () => {
    return {
      showSettings: showSettings,
      fixedHeader: fixedHeader,
      sidebarLogo: sidebarLogo,
      rightPanelShow: false,
      theme: variables.theme,
      pageSwitchAnimation: true,
      tagsView: true
    }
  },
  actions: {
    changeSetting({ key, value }) {
      console.log(key, value)
      this.$state[key] = value
    }
  }
})
