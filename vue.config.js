const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: '8888'
  },
  transpileDependencies: true,
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          blue: '#FA6D1D'
        }

      }
    }
  }
})
