module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '主页'
        return args
      })
  },
  transpileDependencies: ["vuetify"],
  publicPath: "./",
};
