import { App } from 'vue'
import { NebulaInstallOptions } from "./type";
import createContext from "./context";
import mergeOptions from "./options";

export default function install(
	app: App,
	opts: NebulaInstallOptions
): void {

	// merge options with default options
	const options = mergeOptions(opts)
	console.log(options)

	Object.keys(options.components).forEach(key => {
		const component = options.components[key];
		if (component && component.name) {
			app.component(options.componentPrefix + '-' + component.name, component);
		}
	});

	app.config.globalProperties.nebula = createContext(options)
}
