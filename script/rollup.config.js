import path from 'path'
import json from "@rollup/plugin-json";
import commonjs from '@rollup/plugin-commonjs';
import alias from "@rollup/plugin-alias";
import ts from "rollup-plugin-typescript2";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "rollup-plugin-replace";
import fs from 'fs'

if (!process.env.PACKAGE) {
	/**
	 * learn more about Command line flags
	 * https://rollupjs.org/guide/en/#command-line-flags
	 */
	throw new Error('PACKAGE must be specified via --environment flag.')
}

const pkgsDir = path.resolve(__dirname, '../packages')
const pkgName = process.env.PACKAGE
const pkgDir = path.resolve(pkgsDir, pkgName)
const resolve = (p) => path.resolve(pkgDir, p)
const pkgJson = require(resolve('package.json'))
const masterVersion = require('../package.json').version
const localConfig = fs.existsSync(resolve('config.js'))
	? require(resolve('rollup.config.js'))
	: {}

const tsPlugin = ts({
	check: process.env.NODE_ENV === 'production',
	tsconfig: resolve('tsconfig.json')
})

const replacePlugin = replace({
	__DEV__: `${process.env.NODE_ENV !== 'production'}`,
	__VERSION__: `"${masterVersion}"`
})

function createConfig(){

	const external = [
		...Object.keys(pkgJson.dependencies || {}),
		...Object.keys(pkgJson.peerDependencies || {})
	]

	const input = resolve('./src/index.ts')
	const output = [
		{
			file: resolve(`lib/${pkgName}.esm.js`),
			format: 'es'
		}
	]
	const plugins = [
		json(),
		nodeResolve({
			extensions: ['.ts', '.js', '.json', '.css', '.svg', '.vue']
		}),
		alias({
			entries: [
				{find: '@/', replacement: resolve('src')}
			]
		}),
		commonjs(),
		tsPlugin,
		replacePlugin,
	]

	if (localConfig && localConfig.plugins){
		plugins.push(...localConfig.plugins)
	}

	return {
		external,
		input,
		output,
		plugins
	}
}

const rollupConfig = createConfig()
export default rollupConfig
