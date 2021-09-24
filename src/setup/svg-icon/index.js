import SvgIcon from "@/components/SvgIcon/index.vue"
import "virtual:svg-icons-register"

import ids from "virtual:svg-icons-names"

export function setupSvgIcon(app) {
  app.component("svg-icon", SvgIcon)
  console.log(ids)
}
