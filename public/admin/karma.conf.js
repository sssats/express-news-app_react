var webpack = require('webpack');
module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/js/**/*.js',
      'src/js/**/*.html', {
        pattern: 'spec/*.spec.js',
        watched: true,
        served: true,
        included: true
      }
    ],
    plugins: [
      require('karma-phantomjs-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-ng-html2js-preprocessor'),
      require('karma-coverage'),
      require('karma-jasmine')
    ],

    preprocessors: {},

    webpack: {
      devtool: 'inline-source-map'
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity
  })
}
