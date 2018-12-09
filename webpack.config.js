//var path = require ('path');   //Path is part of node

module.export = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: path.resolve( __dirname, "./app/temp/scripts" ),  //Will generate an absolute path as required by Webpack
		filename: "App.js",     // filename could be any anme

	}

}