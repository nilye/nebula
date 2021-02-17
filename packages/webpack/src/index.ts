import defaultOptions from "./options";


class NebulaPlugin {
	pluginName: string
	options: any

	constructor (options = {}) {
		this.pluginName = 'nebula-plugin'
		this.options = {
			...defaultOptions,
			...options,
		}
	}

	apply(compiler){
		const rules = compiler.options.module.rules
		rules.unshift({
			test: /\.[tj]s$/,
			use: [{
				loader: '@linaria/webpack-loader',
				options: {
					evaluate: true,
					classNameSlug: `${this.options.prefix}-[title]`
				}
			}]
		})
	}
}

export default NebulaPlugin
