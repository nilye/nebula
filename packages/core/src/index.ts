import install from "./install";
import { version } from '../package.json'
import { Plugin } from 'vue'

type NebulaPlugin = Plugin & {
	version?: string
}

const Nebula: NebulaPlugin = install
Nebula.version = version

export default Nebula
export * from './type'
