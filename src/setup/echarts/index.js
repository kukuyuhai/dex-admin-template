// 按需导入,减少打包体积
import { PieChart } from "echarts/charts"
import { LegendComponent, TooltipComponent } from "echarts/components"
import { use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import ECharts from "vue-echarts"

use([CanvasRenderer, PieChart, TooltipComponent, LegendComponent])

export function setupEcharts(app) {
  // 全局注册组件（也可以使用局部注册）
  app.component("v-chart", ECharts)
}
