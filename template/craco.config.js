const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    // 支持普通less
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
    // 支持css-module的less
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
        modifyLessRule(lessRules, context) {
          return {
            ...lessRules,
            test: /\.module.less$/,
            exclude: [],
          }
        },
        cssLoaderOptions: {
          modules: { localIdentName: "[local]_[hash:base64:5]" }
        }
      },
    },
  ],
};