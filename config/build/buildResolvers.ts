import { IConfigPaths } from "./types/types";

export function buildResolvers({ src, styles }: IConfigPaths) {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      styles,
    },
  };
}
