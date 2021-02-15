const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NebulaPlugin = require('@uai-nebula/webpack')

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	watchOptions: {
		poll: 1000
	},
	devServer: {
		hot: true,
		port: 3000,
		contentBase: path.resolve(__dirname, 'dist')
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
			template: 'src/index.html',
			inject: 'body'
		}),
	]
}
