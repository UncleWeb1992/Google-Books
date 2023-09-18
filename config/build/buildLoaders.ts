import cssLoader from "./loaders/styleLoader";
import { IWebpackConfig } from "./types/types";

export function buildLoaders({ isDev }: IWebpackConfig) {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };

  const rules = [tsLoader, fileLoader, svgLoader, cssLoader(isDev)];

  return rules;
}
