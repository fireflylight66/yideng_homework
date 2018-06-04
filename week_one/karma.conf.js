// Karma configuration
// Generated on Sun Jun 03 2018 03:29:28 GMT+0800 (CST)

const webpackConfig = require("./webpack.config.js");
require("./node_modules/babel-polyfill/lib/index");
const js = "./src/**/*.js";
module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: [
      // "./node_modules/requirejs/require.js",
      "./node_modules/babel-polyfill/dist/polyfill.min.js",
      "src/**/*.js",
      "tests/**/*.test.js"
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "src/**/*.js": ["babel"],
      "tests/**/*.js": ["babel"]
      // [js]: ["babel"]
    },
    // webpack: webpackConfig,
    // babelPreprocessor: {
    //   options: {
    //     presets: ["env"],
    //     plugins: ["transform-es2015-modules-amd"],
    //     sourceMap: "inline"
    //   },
    //   filename: function(file) {
    //     return file.originalPath.replace(/\.js$/, ".es5.js");
    //   },
    //   sourceFileName: function(file) {
    //     return file.originalPath;
    //   }
    // },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["PhantomJS"],
    // plugin: [
    //   "karma-jasmine",
    //   "karma-phantomjs-launcher",
    //   "karma-babel-preprocessor",
    //   "karma-webpack"
    // ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
