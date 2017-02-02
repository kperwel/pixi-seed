var path = require('path');
var DEBUG = process.env.NODE_ENV !== 'production';
var node_modules = path.resolve(__dirname, "/node_modules/");
var file_loader = "file-loader?name=[path][name].[ext]"

module.exports = {
    entry: './app.js',
    context: path.join(__dirname, './app'),
    output: {
      path: path.join(__dirname, './build'),
      publicPath: DEBUG ? "/" : "./",
      filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    module: {
      rules: [{
          test: /\.js$/,
          loader: "babel-loader",
          exclude: [node_modules]
        },{
          test: /\.html$/,
          exclude: [node_modules],
          loader: file_loader
        },{
          test: /\.jpe?g$|\.svg$|\.png$/,
          exclude: [node_modules],
          loader: file_loader
        }
      ]
    }
};
