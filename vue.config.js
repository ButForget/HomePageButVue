module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '首页'
        return args
      })
  },
  transpileDependencies: ["vuetify"],
  publicPath: "./",
};
