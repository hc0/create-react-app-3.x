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
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    // strictMath: true,
    // noIeCompat: true,
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#cc0000" }
  }),
  // addBabelPlugin(["@babel/plugin-proposal-decorators", { legacy: true }]),
  // ...addBabelPlugins(
  //  ["@babel/plugin-proposal-decorators", {"legacy": true}]
  // ),
  // useBabelRc(),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
    ["@public"]: path.resolve(__dirname, "public"),
    ["@pages"]: path.resolve(__dirname, "src/pages"),
    ["@utils"]: path.resolve(__dirname, "src/utils")
  }),
  // 启用装饰器语法
  addDecoratorsLegacy(),
  useEslintRc(".eslintrc"),
);