import HelloWorld from "@/components/HelloWorld.vue"
import { defineComponent } from "vue"
import logosrc from "./assets/logo.png"
export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src={logosrc} />
        <HelloWorld msg="Hello Vue 3 + Vite" />
        <el-button type="primary">element button</el-button>
      </>
    )
  }
})
