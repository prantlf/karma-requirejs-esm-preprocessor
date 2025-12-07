const { preprocess } = require('requirejs-esm-preprocessor')

function createPreprocessor(args, config, helper) {
  const { basePath, logLevel, LOG_DEBUG, LOG_DISABLE, requirejsEsmPreprocessor } = config
  const defaults = { useStrict: true, sourceMap: true }
  const {
    isScript, useStrict, sourceMap,
    onBeforeTransform, onAfterTransform, onBeforeUpdate, onAfterUpdate
  } = helper.merge(defaults, args, requirejsEsmPreprocessor || {})
  const verbose = logLevel === LOG_DEBUG
  const silent = logLevel === LOG_DISABLE
  const { length: basePathLen } = basePath

  return (contents, file, done) => {
    let { originalPath: path } = file
    if (path.startsWith(basePath)) path = path.substring(basePathLen)
    if (!isScript || isScript(path)) {
      contents = preprocess({
        path, contents, isScript, useStrict, sourceMap, verbose, silent,
        onBeforeTransform, onAfterTransform, onBeforeUpdate, onAfterUpdate
      })
    }
    done(null, contents)
  }
}

createPreprocessor.$inject = ['args', 'config', 'helper']

module.exports = { 'preprocessor:requirejs-esm': ['factory', createPreprocessor] }
