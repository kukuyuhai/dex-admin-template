import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { defineConfig } from "vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import ElementPlus from "unplugin-element-plus/vite"
import viteSvgIcons from "vite-plugin-svg-icons"

const { resolve } = require("path")

// https://vitejs.dev/config/
export default () =>
  defineConfig({
    plugins: [
      vue({
        refTransform: true
      }),
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      }),
      ElementPlus(),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass"
          })
        ]
      }),
      viteSvgIcons({
        // 配置路劲在你的src里的svg存放文件
        iconDirs: [resolve(process.cwd(), "src/icons")],
        symbolId: "icon-[dir]-[name]"
      })
    ],
    resolve: {
      extensions: [".mjs", ".js", ".json"],
      alias: {
        "@": resolve(__dirname, "src")
      }
    },
    optimizeDeps: {
      exclude: ["vue-demi", "consolidate"]
    },
    css: {
      preprocessorOptions: {
        // 配置scss，less等
      }
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html")
        }
      },
      minify: "terser",
      terserOptions: {
        compress: {
          // warnings: false,
          drop_console: true, // console
          drop_debugger: false,
          pure_funcs: ["console.log"] // 移除console
        }
      }
    }
  })
