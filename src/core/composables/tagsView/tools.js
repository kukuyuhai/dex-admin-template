import { useTagsViewStore } from "@/stores/modules/tagsView"
import { nextTick } from "vue"
import { useRouter } from "vue-router"
import { useTagRoute } from "./route"

export function useTagsViewTools() {
  const tagsViewStore = useTagsViewStore()
  const $router = useRouter()
  const { affixTags, isActive, selectedTag, moveToCurrentTag } = useTagRoute()

  /**
   * 刷新选中的标签
   * @param {*} view
   */
  const refreshSelectedTag = (view) => {
    tagsViewStore.delCachedView(view).then(() => {
      const { fullPath } = view
      nextTick(() => {
        $router.replace({
          path: "/redirect" + fullPath
        })
      })
    })
  }

  const closeSelectedTag = (view) => {
    tagsViewStore.delView(view).then(({ visitedViews }) => {
      console.log(visitedViews)
      if (isActive(view)) {
        _toLastView(visitedViews, view)
      }
    })
  }

  const closeOthersTags = () => {
    $router.push(selectedTag.value)
    tagsViewStore.delOthersViews(selectedTag.value).then(() => {
      moveToCurrentTag()
    })
  }

  const closeAllTags = (view) => {
    tagsViewStore.delAllViews().then(({ visitedViews }) => {
      if (affixTags.value.some((tag) => tag.path === view.path)) {
        return
      }
      _toLastView(visitedViews, view)
    })
  }

  function _toLastView(visitedViews, view) {
    const latestView = visitedViews.slice(-1)[0]
    if (latestView) {
      $router.push(latestView.fullPath)
    } else {
      // now the default is to redirect to the home page if there is no tags-view,
      // you can adjust it according to your needs.
      if (view.name === "Dashboard") {
        // to reload home page
        $router.replace({ path: "/redirect" + view.fullPath })
      } else {
        $router.push("/")
      }
    }
  }

  return {
    refreshSelectedTag,
    closeSelectedTag,
    closeOthersTags,
    closeAllTags
  }
}
