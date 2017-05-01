var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './src/js/app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
         loaders: [
             {
                 test: /\.css$/,
                 loader: "style-loader!css-loader"
             }
         ]
     },
     plugins:[
         new webpack.ProvidePlugin({
             $:"jquery",       
             jQuery:"jquery",       
             "window.jQuery":"jquery"
         })
     ]
};