export default {
  /**
   * @type {string}
   * @description website title
   */
  title: import.meta.env.VITE_APP_TITLE || "dex-admin App",
  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true,
  /**
   *
   *
   *
   */
  sidebar: {
    menuText: "white",
    menuActiveText: "#4ab7bd",
    subMenuActiveText: "white",
    menuBg: "#08254f",
    menuHover: "#357fed",
    subMenuBg: "#041b3e",
    subMenuHover: "#357fed",
    sideBarWidth: "210px"
  },
  /**
   *
   *
   */
  theme: "#357fed"
}
