import { useApp } from "./useApp";


export function useNebulaContext(){
	const global = useApp().config.globalProperties
	if ('nebula' in global){
		return global['nebula']
	}
	return null
}
