const {
  override,
  addLessLoader,
  fixBabelImports,
  addBabelPlugin,
  addBabelPlugins,
  useBabelRc,
  useEslintRc,
  addWebpackAlias,
  addDecoratorsLegacy
} = require("customize-cra");
const path = require("path");

// const addCustomize = () => config => {
//   if (process.env.NODE_ENV === 'production') {
//     config.devtool = false; //去掉map文件
//     if (config.plugins) {
//       config.plugins.push(new BundleAnalyzerPlugin());
//     }
//     const splitChunksConfig = config.optimization.splitChunks;
//      if (config.entry && config.entry instanceof Array) {
//        config.entry = {
//          main: config.entry,
//          vendor: ["react", "react-dom", "react-router-dom", "react-redux", "redux", 'react-router-config',
//            "lodash", "moment", 'react-intl', 'react-addons-pure-render-mixin', 'redux-promise-middleware', "react-router", 
//          ]
//        }
//      } else if (config.entry && typeof config.entry === 'object') {
//        config.entry.vendor = ["react", "react-dom", "react-router-dom", "react-redux", "redux", 'react-router-config', 
//           "lodash", "moment", 'react-intl', 'react-addons-pure-render-mixin', 'redux-promise-middleware', "react-router", 
//        ];
//      }
 
//     Object.assign(splitChunksConfig, {
//       chunks: 'all',
//       cacheGroups: {
//         vendors: {
//           test: /node_modules/,
//           name: 'vendors',
//           priority: -10,
//         },
//         common: {
//           name: 'common',
//           minChunks: 2,
//           minSize: 30000,
//           chunks: 'all'
//         }
//       }
//     })
//   }
//   return config;
// };
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  addLessLoader({
    // strictMath: true,
    // noIeCompat: true,
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA570" }
  }),
  addBabelPlugin(["@babel/plugin-proposal-decorators", { legacy: true }]),
  // ...addBabelPlugins(
  //  ["@babel/plugin-proposal-decorators", {"legacy": true}]
  // ),
  // useBabelRc(),
  // useEslintRc(),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
    ["@public"]: path.resolve(__dirname, "public"),
    ["@pages"]: path.resolve(__dirname, "src/pages"),
    ["@utils"]: path.resolve(__dirname, "src/utils")
  })
  // addCustomize(),
  // 启用装饰器语法
  // addDecoratorsLegacy()
);