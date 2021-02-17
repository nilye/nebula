import { App, getCurrentInstance } from "vue";

export function useApp(): App {
	return getCurrentInstance()?.appContext.app!
}
