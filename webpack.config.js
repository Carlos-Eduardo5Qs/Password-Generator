const path = require('path'); 

module.exports = {
	mode: 'development',
	entry: './src/js/main.js',
	output: {
		path: path.resolve('public'),
		filename: 'bundle.js',
	},
	module: {
		rules:[{
			test: /\.m?js$/,
      		exclude: /node_modules/,
     		use: {
        		loader: 'babel-loader',
        		options: {
          			presets: ['@babel/preset-env'],
        		},
        	},
		},
		{
			test: /\.css$/i,
			use: ['style-loader', 'css-loader']
		},
		{
			test: /\.(jpg|png|svg|gif)$/,
      		type: 'asset/resource',
		}
		]
	},
	devtool: 'source-map',
};