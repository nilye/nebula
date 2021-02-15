import { NebulaContext } from "./type";

export default function createContext(
	options: any
){

	// create context
	const context: NebulaContext = {
		theme: options.defaultTheme
	}

	return context
}
