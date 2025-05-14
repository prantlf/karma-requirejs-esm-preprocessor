# karma-requirejs-esm-preprocessor

[![Latest version](https://img.shields.io/npm/v/karma-requirejs-esm-preprocessor)
 ![Dependency status](https://img.shields.io/librariesio/release/npm/karma-requirejs-esm-preprocessor)
](https://www.npmjs.com/package/karma-requirejs-esm-preprocessor)

[Karma] preprocessor for converting ES modules to AMD in [RequireJS] projects. Uses [requirejs-esm-preprocessor].

## Synopsis

```js
module.exports = config => config.set({
  preprocessors: {
    'src/**/*.js': ['requirejs-esm']
  },
  requirejsEsmPreprocessor: {
    isScript: path => !path.includes('/test/'),
    sourceMap: true
  }
})
```

## Installation

This module can be installed in your project using [NPM], [PNPM] or [Yarn]. Make sure, that you use [Node.js] version 14 or newer.

```sh
npm i -D karma-requirejs-esm-preprocessor
pnpm i -D karma-requirejs-esm-preprocessor
yarn add karma-requirejs-esm-preprocessor
```

## Configuration

```ts
isScript(path: string): boolean
```

Allows further filtering the files before passing them to the preprocessor. If the patterns are inconvenient to specify what files should be preprocessed, a simple pattern can be used to capture all files and the final filtering be done by `isScript` returning `true` only for the paths to files which need preprocessing. The default is `undefined` - no extra filtering.

```ts
sourceMap: boolean
```

Enables an inline source map in the preprocessed output to support debugging in the browser. The default is `true`.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Lint and test your code.

## License

Copyright (c) 2022-2025 Ferdinand Prantl

Licensed under the MIT license.

[RequireJS]: http://requirejs.org/
[Karma]: http://karma-runner.github.io/
[requirejs-esm-preprocessor]: https://www.npmjs.com/package/requirejs-esm-preprocessor#readme
[Node.js]: http://nodejs.org/
[NPM]: https://www.npmjs.com/
[PNPM]: https://pnpm.io/
[Yarn]: https://yarnpkg.com/
