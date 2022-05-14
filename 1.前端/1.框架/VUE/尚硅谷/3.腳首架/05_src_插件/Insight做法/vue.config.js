// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  outputDir: "build/insight",
  assetsDir: "Insight",
  productionSourceMap: process.env.VUE_APP_PENV !== "outside" && process.env.VUE_APP_PENV !== "outsideTest",
  devServer: {
    host: "rd3-localhost-test.opview.com.tw",
    https: true
  },
  configureWebpack: {
    devtool: process.env.VUE_APP_PENV === "outside" || process.env.VUE_APP_PENV === "outsideTest" ? false : "source-map",
    /**
     * @link https://webpack.js.org/plugins/split-chunks-plugin/#root
     * @type {{splitChunks: {cacheGroups: {xdfsdk: {name: string, test: RegExp, priority: number, chunks: string}}}}}
     * @priority 權重  chunk-vendors: -10  chunk-common: -20
     * @chunks initial(初始)、async(按需求加載)、all(全部)
     */
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: `chunk-vendors`,
            minChunks: 2,
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: "all"
          },
          common: {
            name: `chunk-common`,
            minChunks: 2,
            priority: -20,
            chunks: "all",
            reuseExistingChunk: true
          },
        }
      }
    },
    plugins: [
      new CompressionPlugin({ algorithm: "gzip", }),
      // new BundleAnalyzerPlugin()
    ]
  }
};
