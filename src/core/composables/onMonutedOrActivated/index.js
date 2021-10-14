import { onMounted, nextTick, onActivated } from "vue"
export function onMountedOrActivated(hook) {
  let monuted

  onMounted(() => {
    hook()
    nextTick(() => {
      monuted = true
    })
  })

  onActivated(() => {
    if (monuted) {
      hook()
    }
  })
}
