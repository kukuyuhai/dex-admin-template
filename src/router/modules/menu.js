import Layout from "@/layouts/index.vue"

const menuRouter = {
  path: "/menu",
  name: "menu",
  component: Layout,
  redirect: "/menu/table",
  meta: { title: "Table", icon: "el-icon-menu" },
  children: [
    {
      path: "table",
      name: "menu-table",
      component: () => import("@/views/menu/table.vue"),
      meta: { title: "表格", icon: "el-icon-s-grid", affix: true }
    },
    {
      path: "chart",
      name: "menu-chart",
      component: () => import("@/views/menu/chart.vue"),
      meta: { title: "图表", icon: "el-icon-pie-chart" }
    }
  ]
}

export default menuRouter
