import rspack from "@rspack/core";
import path from "path";

const mode = "production";
/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: "./src/index",
  },
  plugins: [
    new rspack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  output: {
    filename:
      mode === "production"
        ? "react-circular-genome-view.umd.production.min.js"
        : "react-circular-genome-view.umd.development.js",
    library: "JBrowseReactCircularGenomeView",
    libraryTarget: "umd",
  },
  experiments: {
    css: true,
  },
};

export default config;
