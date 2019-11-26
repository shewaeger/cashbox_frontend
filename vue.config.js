module.exports = {
  assetsDir: 'static',
  publicPath: undefined,
  outputDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined,
  devServer: {
    watchOptions: {
      poll: 1000,
    },
    proxy: {
      '^/': {
        target: 'http://localhost:38081'
      }
    }
  }
}