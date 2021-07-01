import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { defineConfig } from "vite"
import styleImport from "vite-plugin-style-import"

const { resolve } = require("path")
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    styleImport({
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            if (name !== "locale") {
              name = name.slice(3)
            }
            return `element-plus/packages/theme-chalk/src/${name}.scss`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/")
    }
  },
  optimizeDeps: {},
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
    minify: {
      removeComments: false,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    },
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
