import { defineComponent, reactive } from "vue"
import { useDark, useToggle } from "@vueuse/core"

export default defineComponent({
  name: "UseDark",
  // eslint-disable-next-line
  props: ["selector", "attribute", "valueDark", "valueLight", "onChanged", "storageKey", "storage"],
  setup(props, { slots }) {
    const isDark = useDark(props)
    const data = reactive({
      isDark,
      toggleDark: useToggle(isDark)
    })

    return () => {
      if (slots.default) return slots.default(data)
    }
  }
})
