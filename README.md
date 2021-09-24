#### 多页面

vite 配置 build rollup options 用于打包多页面应用。

#### dependence

- [element-plus]
- [vue-echarts](github.com/ecomfe/vue-echarts)
- [mitt](github.com/developit/mitt) 发布订阅 pub/sub
- [docsify](https://docsify.js.org/#/) docsify 文档地址
- [pinia](https://github.com/posva/pinia) store vue3 simple
- [tailwindcss](https://www.tailwindcss.cn/) 是一个功能类优先的 CSS 框架

#### 待办

- [ ] 黑夜模式 powerby tailwindcss
- [ ] 切换 tailwindcss 为 windcss
- [ ] 路由权限控制

#### 发布

**开发环境**

```
pnpm run dev
```

**测试环境**

```
pnmp run build:stage
```

**生产环境**

```
pnpm run build
```
