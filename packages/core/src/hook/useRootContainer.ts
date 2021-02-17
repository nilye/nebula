import { getCurrentInstance, nextTick, onMounted, ref, Ref } from "vue";
import { useApp } from "./useApp";
import { isFunction } from "../shared";

/**
 * https://v3.vuejs.org/guide/composition-api-template-refs.html#template-refs
 * @param cb
 */
export function useRootContainer(
	cb?: (el: any) => void
): Ref<any> {
	const rootRef = ref(null)
	onMounted(()=>{
		const app = useApp()
		if (app) {

			nextTick().then(()=>{
				rootRef.value = app._container

				if (isFunction(cb)){
					cb(rootRef.value)
				}

			})
		}
	})

	return rootRef
}
