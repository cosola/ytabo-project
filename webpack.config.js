const path = require ('path');   //Path is part of node

module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: path.resolve( __dirname, "./app/temp/scripts" ),  //Will generate an absolute path as required by Webpack
		filename: "App.js"     // filename could be any anme

	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},	
				test: /\.js$/,    		//Apply babel-loader only to js files
				exclude: /[node_modules]/   		 //exclude node_modules in conversion
			}
		]
	}

}
