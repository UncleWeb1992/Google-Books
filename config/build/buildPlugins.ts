import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {
  ProgressPlugin,
  HotModuleReplacementPlugin,
  DefinePlugin,
} from "webpack";
import { IWebpackConfig } from "./types/types";
import { config } from "dotenv";

config();

export function buildPlugins(config: IWebpackConfig) {
  const {
    isDev,
    paths: { html },
  } = config;

  const plugins = [
    new HtmlWebpackPlugin({
      template: html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new ProgressPlugin(),
    new DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ];

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin());
  }

  return plugins;
}
