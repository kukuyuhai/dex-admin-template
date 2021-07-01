import { onMounted } from "vue"
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
