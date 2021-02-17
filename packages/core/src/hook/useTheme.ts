import { ThemeColor } from "../style";
import { useNebulaContext } from "./useNebulaContext";
import { setThemeClass } from "../context/theme";


export interface Theme {
	colors: ThemeColor,
	current: string,
	changeTheme?(value: string): void
}

export function useTheme(): Theme {
	const context = useNebulaContext()
	const theme: Theme = context.theme
	theme.changeTheme = function (value: string){
		setThemeClass(value)
		context.theme.current = value
	}
	return theme
}
