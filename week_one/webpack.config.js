const path = require("path");

const htmlwebpackplugin = require("html-webpack-plugin");
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        },
        include: [path.resolve(__dirname, "../")],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
};
