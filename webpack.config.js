const env = process.env.ENV || "development";
const path = require('path');

module.exports = {
	context: path.join(__dirname, '/src/scripts/'),
	entry: "./table.js",
	output: {
		path: path.join(__dirname, '/src/static/'),
		filename: "bundle.js"
	},
	target: 'electron-renderer',
	mode: env,
	devtool: 'source-map',
	watch: env === 'development',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				options: {
					presets: ["env", "react"]
				}
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader",
					options: {
						url: false
					}
				}, {
					loader: "sass-loader"
				}]
			}
		]
	}
};