// 参考官网：https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
  // 生产环境是否要生成 sourceMap
  productionSourceMap: false,
  publicPath: './',
  // build 时输出的文件目录
  outputDir: 'dist',
  // 放置静态文件夹目录
  assetsDir: 'assets',
  // dev环境下，webpack-dev-server 相关配置
  devServer: {
    // port: 8080, // 端口号
    // host: '0.0.0.0', // 开发运行时域名
    // https: false, // 是否启用 https
    // npm run serve 时是否直接打开浏览器
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9090/api', // api接口基础路径
        changeOrigin: true, // 是否支持跨域
        ws: true, // 是否代理websockets
        pathRewrite: {
          '^/api': '' // 重写路径：去掉路径中开头的 '/api'
        }
      }
    }
  },
  // 打包时起作用
  chainWebpack: config => {
    // 配置别名
    config.resolve.alias
    // set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('src'))
      .set('store', resolve('src/store'))
      .set('comps', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('modules', resolve('src/modules'))
      .set('router', resolve('src/router'))
      .set('widgets', resolve('src/widgets'))
      .set('mixins', resolve('src/mixins'))
  },
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: "@import './src/styles/element-variables.scss';"
  //     }
  //   }
  // }
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        // 这个是绝对路径,不能使用 alias中配置的别名路径，如@表示的src
        resolve('src/styles/element-variables.scss'),
        resolve('src/styles/mixin.scss')
      ]
    }
  }
}
