module.exports = {
  devServer: {
    open: true,
    port: 7777
    // 配置代理
    // proxy: {
    //   '/aa': {
    //     target: '192.168.2.23:8080/hbte-financial/hbte/currency/currencyInfoList',
    //     pathRewrite: { '^/aa': '' }
    //   }
    // }
  },
  // baseUrl: './',
  publicPath: './'
}
