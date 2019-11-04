const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	mode: 'development',
	entry: './index.js',
	devtool: 'eval-source-map',

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		library: {
      root: 'scrollPanel',
      amd: 'scroll-panel',
      commonjs: 'scroll-panel'
		},
		libraryExport: 'default',
		libraryTarget: 'umd',
	},

	plugins: [new webpack.ProgressPlugin(),
		new VueLoaderPlugin()],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
			},
			{
        test: /\.vue$/,
        loader: 'vue-loader'
			},
			{
				test: /\.less$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
			},
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
