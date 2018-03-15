var HtmlwebpackPlugin = require("html-webpack-plugin");
var path = require("path");
module.exports = {
	entry: {
		app: './src/index.js',
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './build/'),
		filename: 'app.js'
	},
	plugins: [
		new HtmlwebpackPlugin({
			title:"index",
			filename:"index.html",
			chunks:['app'],
			template:"./src/index-tem.html"
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
						{loader: "style-loader"},
						{
							loader: "css-loader",
							// options: {
							// 	modules: true, // 开启css module
							// 	importLoaders: 1,
							// 	localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
							// }
						},
						{
							loader: "postcss-loader",
						}
				]
			}
		]
	},
}