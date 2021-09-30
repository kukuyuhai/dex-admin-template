import { defineStore } from "pinia"

export const useAppStore = defineStore("app", {
  state: () => ({
    sidebar: {
      opened: true,
      withoutAnimation: false
    }
  }),
  actions: {
    toggleSideBar() {
      this.sidebar.opened = !this.sidebar.opened
    }
  }
})
