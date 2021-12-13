module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
  // 在生产构建时禁用 eslint-loader
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 取消提前加载组件
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  },
}
