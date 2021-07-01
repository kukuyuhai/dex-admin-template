const { defineConfig } = require("eslint-define-config")
module.exports = defineConfig({
	root: true,
	env: {
		node: true
	},
	extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
	parserOptions: {
		parser: "babel-eslint"
	},
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
		"prettier/prettier": [
			"error",
			{
				printWidth: 100,
				tabWidth: 2,
				useTabs: false,
				semi: false,
				vueIndentScriptAndStyle: true,
				singleQuote: false,
				quoteProps: "as-needed",
				bracketSpacing: true,
				trailingComma: "none",
				jsxBracketSameLine: false,
				jsxSingleQuote: false,
				arrowParens: "always",
				insertPragma: false,
				requirePragma: false,
				proseWrap: "never",
				htmlWhitespaceSensitivity: "strict",
				endOfLine: "lf"
			}
		]
	}
})
