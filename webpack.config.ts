import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { IConfigPaths, IWebpackConfig } from "./config/build/types/types";
import { Configuration } from "webpack";
import path from "path";

export default (env: IWebpackConfig) => {
  const paths: IConfigPaths = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    styles: path.resolve(__dirname, "src", "App", "styles"),
  };

  const mode = env?.mode || "development";
  const isDev = mode === "development";
  const port = +env.port || 3000;

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
