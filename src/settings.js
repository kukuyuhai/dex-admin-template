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
  fixedHeader: true
}
