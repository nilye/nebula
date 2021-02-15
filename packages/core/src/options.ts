import { NebulaInstallOptions } from "./type";
import * as components from '@uai-nebula/components'

export const defaultOptions: NebulaInstallOptions = {
	defaultTheme: 'light',
	componentPrefix: 'n',
	components: components
}

export default function mergeOptions(opts: NebulaInstallOptions){
	return {
		...defaultOptions,
		...opts
	}
}
