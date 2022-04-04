const { preprocess } = require('requirejs-esm-preprocessor')

function createPreprocessor(args, config, helper) {
  const { logLevel, LOG_DEBUG, LOG_DISABLE, requirejsEsmPreprocessor } = config
  const defaults = { sourceMap: true }
  const { isScript, sourceMap } = helper.merge(defaults, args, requirejsEsmPreprocessor || {})
  const verbose = logLevel === LOG_DEBUG
  const silent = logLevel === LOG_DISABLE

  return (contents, file, done) => {
    const { originalPath: path } = file
    if (!isScript || isScript(path)) {
      contents = preprocess({ path, contents, isScript, sourceMap, verbose, silent })
    }
    done(null, contents)
  }
}

createPreprocessor.$inject = ['args', 'config', 'helper']

module.exports = { 'preprocessor:requirejs-esm': ['factory', createPreprocessor] }
