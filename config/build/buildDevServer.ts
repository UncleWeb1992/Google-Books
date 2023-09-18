import { IWebpackConfig } from "./types/types";
import { Configuration } from "webpack-dev-server";

export function buildDevServer({
  paths: { output },
  port,
}: IWebpackConfig): Configuration {
  return {
    static: output,
    open: true,
    port,
    historyApiFallback: true,
  };
}
