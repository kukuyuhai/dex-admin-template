#### 项目介绍

> 使用 composition Api 重新构建 Vue-element-admin。

#### dependence

- [element-plus](https://element-plus.gitee.io/zh-CN/)
- [vue-echarts](github.com/ecomfe/vue-echarts)
- [mitt](github.com/developit/mitt) 发布订阅 pub/sub
- [docsify](https://docsify.js.org/#/) docsify 文档地址
- [pinia](https://github.com/posva/pinia) store vue3 simple
- [windcss](https://windicss.org/) 是一个功能类优先的 CSS 框架

#### 待办

- [ ] 黑夜模式 powerby windcss
- [x] 切换 tailwindcss 为 windcss
- [ ] 路由权限控制
- [ ] Mock
- [ ] 使用 composition Api 重构
- [ ] 编写文档

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
