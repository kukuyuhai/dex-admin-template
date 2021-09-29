import {
  ElButton,
  ElPopper,
  ElTable,
  ElTableColumn,
  ElTooltip,
  ElForm,
  ElFormItem,
  ElInput,
  ElConfigProvider,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownItem,
  ElMenu,
  ElMenuItem,
  ElScrollbar,
  ElDropdownMenu,
  ElSubMenu
} from "element-plus"
//  样式通过vite自动导入
const compList = [
  ElTable,
  ElTableColumn,
  ElTooltip,
  ElPopper,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElConfigProvider,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownItem,
  ElMenu,
  ElMenuItem,
  ElScrollbar,
  ElDropdownMenu,
  ElSubMenu
]
// element comp 全局引入注册,
const setupElementPlus = (app) => {
  compList.forEach((comp) => app.component(comp.name, comp))
}

export { setupElementPlus }
