import { ref, watch, reactive, toRefs, getCurrentInstance } from "vue"
import { useTagRoute } from "./route"

export function useTagsViewLayout() {
  const visible = ref()
  const instance = getCurrentInstance()
  const { selectedTag } = useTagRoute()
  const menu = reactive({
    top: 0,
    left: 0
  })

  const closeMenu = () => {
    visible.value = false
  }

  function handleScroll() {
    closeMenu()
  }

  /**
   *  打开菜单栏
   * @param {*} tag 新增tag信息
   * @param {*} e event
   */
  function openMenu(tag, e) {
    const $el = instance.vnode.el
    const menuMinWidth = 105
    const left = $el.getBoundingClientRect().left
    const offsetWidth = $el.offsetWidth // container width
    const maxLeft = offsetWidth - menuMinWidth // left boundary
    const _left = e.clientX - left + 15 // 15: margin right
    if (_left > maxLeft) {
      menu.left = maxLeft
    } else {
      menu.left = _left
    }
    menu.top = e.clientY
    visible.value = true
    selectedTag.value = tag
  }

  watch(
    () => visible.value,
    (value) => {
      if (value) {
        document.body.addEventListener("click", closeMenu)
      } else {
        document.body.removeEventListener("click", closeMenu)
      }
    }
  )

  return {
    visible,
    ...toRefs(menu),
    closeMenu,
    openMenu,
    handleScroll
  }
}
