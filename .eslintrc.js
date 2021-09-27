const { defineConfig } = require("eslint-define-config")
module.exports = defineConfig({
  root: true,
  env: {
    node: true,
    browser: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: true
    }
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
    $ref: "readonly"
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "plugin:prettier/recommended"],
  settings: {
    "import/resolver": {
      alias: {
        map: ["/@", "./src"],
        extensions: [".ts", ".js", ".jsx", ".json", ".vue"]
      }
    }
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "error"
    // 添加rules
  }
})
