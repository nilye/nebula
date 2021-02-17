const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NebulaPlugin = require('@uai-nebula/webpack')

const resolve = p => path.resolve(__dirname, '../', p)


module.exports = {
	mode: 'development',
	entry: resolve('src/index.ts'),
	output: {
		path: resolve('dist'),
		filename: 'index.js'
	},
	watchOptions: {
		poll: 1000
	},
	devServer: {
		hot: true,
		port: 3000,
		contentBase: resolve('dist')
	},
	resolve: {
		extensions: ['.ts', '.js', '.json', '.vue'],
		modules: ['node_modules'],
		symlinks: true
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}, {
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			}, {
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					}, {
						loader: 'css-loader',
					}
				]
			}
		]
	},
	plugins: [
		new NebulaPlugin(),
		new MiniCssExtractPlugin(),
		new VueLoaderPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: resolve('src/index.html'),
			inject: 'body'
		}),
	]
}

