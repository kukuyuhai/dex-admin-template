import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { defineConfig } from "vite"
import ElementPlus from "unplugin-element-plus/vite"
import viteSvgIcons from "vite-plugin-svg-icons"
import { viteMockServe } from "vite-plugin-mock"
import WindiCSS from "vite-plugin-windicss"
const { resolve } = require("path")

// https://vitejs.dev/config/
export default ({ command }) => {
  const isBuild = command === "build"
  return defineConfig({
    base: "./",
    plugins: [
      vue({
        refTransform: true
      }),
      vueJsx(),
      ElementPlus({
        useSource: true
      }),
      viteSvgIcons({
        // 配置路劲在你的src里的svg存放文件
        iconDirs: [resolve(process.cwd(), "src/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      viteMockServe({
        // default
        ignore: /^\_/,
        mockPath: "mock",
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        injectCode: `
          import { setupProdMockServer } from '../mock/_createProductionServer.js';
          setupProdMockServer();
        `
      }),
      WindiCSS()
    ],
    resolve: {
      extensions: [".mjs", ".js", ".json"],
      alias: {
        "@": resolve(__dirname, "src"),
        "~/": `${resolve(__dirname, "src")}/`,
        "@core": resolve(__dirname, "src/core")
      }
    },
    server: {
      open: true,
      port: 8900
    },
    optimizeDeps: {
      include: ["@vueuse/core"],
      exclude: ["vue-demi", "consolidate"]
    },
    css: {
      preprocessorOptions: {
        // 配置scss，less等
        scss: {
          additionalData: `
          @use "~/styles/element/index.scss" as *;
          @use "~/styles/variables.scss" as *;
          `
        }
      }
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html")
        }
      },
      sourcemap: "inline"
      // minify: "terser",

      // terserOptions: {
      //   compress: {
      //     // warnings: false,
      //     drop_console: false, // console
      //     drop_debugger: false,
      //     pure_funcs: ["console.log"] // 移除console
      //   }
      // }
    }
  })
}
