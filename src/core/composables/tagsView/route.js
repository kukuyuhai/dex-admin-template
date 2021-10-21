import { useRoute } from "vue-router"
import { onMounted, watch, ref, computed } from "vue"
import { useTagsViewStore } from "@/stores/modules/tagsView"
import { usePermissionStore } from "@/stores"
import path from "path-browserify"

export function useTagRoute() {
  const $route = useRoute()
  const tagsViewStore = useTagsViewStore()
  const permission = usePermissionStore()
  const routes = computed(() => {
    return permission.routes
  })
  const affixTags = ref([])
  const visitedViews = computed(() => {
    return tagsViewStore.visitedViews
  })
  /**
   *
   * @param {*} route
   * @returns
   */
  const isActive = (route) => {
    return route.path === $route.path
  }

  /**
   *
   * @param {*} tag
   * @returns
   */
  const isAffix = (tag) => {
    return tag.meta && tag.meta.affix
  }

  /**
   * 添加tag
   * @returns
   */
  function addTags() {
    const { name } = $route
    if (name) {
      tagsViewStore.addView($route)
    }
    return false
  }

  /**
   *
   */
  function moveToCurrentTag() {}

  /**
   * 初始化Tags
   */
  function initTags() {
    affixTags.value = _filterAffixTags(routes.value)
    for (const tag of affixTags.value) {
      // Must have tag name
      if (tag.name) {
        tagsViewStore.addVisitedView(tag)
      }
    }
  }

  /**
   * 过滤RouteLocation中meta固定的tagview
   * @param {*} routes 路由数
   * @param {*} basePath 跟路由路径
   * @returns tag集合
   */
  function _filterAffixTags(routes, basePath = "/") {
    let tags = []
    routes.forEach((route) => {
      if (route.meta && route.meta.affix) {
        const tagPath = path.resolve(basePath, route.path)
        tags.push({
          fullPath: tagPath,
          path: tagPath,
          name: route.name,
          meta: { ...route.meta }
        })
      }
      if (route.children) {
        const tempTags = _filterAffixTags(route.children, route.path)
        if (tempTags.length >= 1) {
          tags = [...tags, ...tempTags]
        }
      }
    })
    return tags
  }

  onMounted(() => {
    initTags()
    addTags()
  })

  // 监听路由变化，添加tag
  watch($route, () => {
    addTags()
    moveToCurrentTag()
  })

  return {
    affixTags,
    visitedViews,
    isActive,
    isAffix,
    initTags,
    addTags
  }
}
