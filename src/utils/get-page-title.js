import defaultSettings from "@/settings"

const title = defaultSettings.title || "上海数据交易所后台"

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
