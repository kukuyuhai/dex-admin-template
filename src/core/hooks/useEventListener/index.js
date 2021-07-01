import { onDeactivated, onUnmounted, unref } from "vue"
import { onMountedOrActivated } from "../onMonutedOrActivated"
export function useEventListener(type, listener, options) {
	const { target = window, passive = false, capture = false } = options
	let attached

	const add = () => {
		const element = unref(target)
		if (element && !attached) {
			element.addEventListener({
				type,
				listener
			})
			attached = true
		}
	}
	const remove = () => {
		const element = unref(target)

		if (element && attached) {
			element.removeEventListener(type, listener, capture)
			attached = false
		}
	}

	onUnmounted(remove)
	onDeactivated(remove)
	onMountedOrActivated(add)
}
