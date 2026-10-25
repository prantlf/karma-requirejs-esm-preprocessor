import esm from '../index.js'

export default function (config) {
  config.set({
    plugins: ['karma-jasmine', 'karma-brief-reporter', 'karma-chrome-launcher', esm],

    frameworks: ['jasmine'],
    reporters: ['brief'],
    browsers: ['ChromeHeadless'],

    files: [
      { pattern: 'index2.js' },
      { pattern: 'amd.js', included: false },
      { pattern: 'esm.js', included: false }
    ],

    preprocessors: {
      '*.js': ['requirejs-esm']
    },

    requirejsEsmPreprocessor: {
      isScript: path => !path.endsWith('/index2.js'),
      useStrict: false,
      sourceMap: false
    },

    briefReporter: {
      renderOnRunCompleteOnly: !!process.env.CI
    },

    autoWatch: false,
    singleRun: true
  })
}
