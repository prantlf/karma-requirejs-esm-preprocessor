module.exports = function(config) {
  config.set({
    plugins: [
      'karma-jasmine', 'karma-brief-reporter', 'karma-chrome-launcher', require('..')
    ],

    frameworks: ['jasmine'],
    reporters: ['brief'],
    browsers: ['ChromeHeadless'],

    files: [
      { pattern: 'index1.js' },
      { pattern: 'amd.js', included: false },
      { pattern: 'esm.js', included: false }
    ],

    preprocessors: {
      'amd.js': ['requirejs-esm'],
      'esm.js': ['requirejs-esm']
    },

    autoWatch: false,
    singleRun: true
  })
}
