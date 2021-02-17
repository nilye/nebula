import { nextTick, App } from "vue";
import { ThemeColor, themeColors } from "../style";
import { defaultOptions } from "./options";
import { setThemeClass } from "./theme";

interface NebulaContext {
	theme: {
		color: Record<string, ThemeColor>,
		current: string
	}
}

export default function createContext(
	app: App,
	options: any
){

	// create context
	const context: NebulaContext = {
		theme: {
			color: Object.freeze(themeColors),
			current: options?.defaultTheme || defaultOptions.defaultTheme
		}
	}

	// set
	setThemeClass(context.theme.current)

	return context
}
