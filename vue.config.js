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
        target: 'http://192.168.1.111:38081'
      }
    }
  }
}