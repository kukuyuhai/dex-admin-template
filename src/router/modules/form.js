import Layout from "@/layouts/index.vue"

const formRouter = {
  path: "/form",
  name: "form",
  component: Layout,
  redirect: "/form/create",
  children: [
    {
      path: "create",
      name: "create",
      component: () => import("@/views/form/create.vue"),
      meta: { icon: "el-icon-document-copy", title: "表单" }
    }
  ]
}

export default formRouter
