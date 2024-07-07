import path from "path";
import webpack from "webpack";

import { buildWebpackConfig } from "./src/shared/config/build/buildWebpackConfig";
import { BuildPaths } from "./src/shared/config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};
const mode = "development";
const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
});

export default config;
