import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { IWebpackConfig } from "./types/types";
import { Configuration } from "webpack";
import webpackDevServer from "webpack-dev-server";

export function buildWebpackConfig(config: IWebpackConfig): Configuration {
  const {
    paths: { entry, output },
    mode,
  } = config;

  const configSett: Configuration = {
    entry: entry,
    mode,
    output: {
      filename: "[name]-[contenthash].js",
      path: output,
      clean: true,
      assetModuleFilename: "assets/[hash][ext]",
    },
    resolve: buildResolvers(config.paths),
    module: {
      rules: buildLoaders(config),
    },
    plugins: buildPlugins(config),
    devtool: config.isDev ? "inline-source-map" : undefined,
    devServer: config.isDev ? buildDevServer(config) : undefined,
    optimization: {
      runtimeChunk: "single",
    },
  };

  return configSett;
}
