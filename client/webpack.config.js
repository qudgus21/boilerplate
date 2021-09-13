const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",

  devtool: "source-map",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },

    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },

  entry: {
    app: "./src/index.tsx",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "./.env"),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },

  devServer: {
    historyApiFallback: true,
  },
};
