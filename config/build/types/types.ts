export interface IConfigPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
  styles: string;
}

export type ModeType = "development" | "production";

export interface IWebpackConfig {
  paths: IConfigPaths;
  mode: ModeType;
  port: number;
  isDev: boolean;
}
