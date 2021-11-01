import mitt from "mitt"
async function bootstrap(app) {
  if (!app) return

  app.provide("mitt", mitt())
  app.config.globalProperties.$mitt = mitt()

  return app
}

export { bootstrap }
// 导出所有hook
export * from "./composables"
