# start-standard


[![npm](https://img.shields.io/npm/v/start-standard.svg?style=flat-square)](https://www.npmjs.com/package/start-standard)
[![linux build](https://img.shields.io/circleci/project/github/effervescentia/start-standard/master.svg?label=linux&style=flat-square)](https://circleci.com/gh/effervescentia/start-standard)
[![windows build](https://img.shields.io/appveyor/ci/effervescentia/start-standard/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/effervescentia/start-standard)
[![coverage](https://img.shields.io/codecov/c/github/effervescentia/start-standard/master.svg?style=flat-square)](https://codecov.io/github/effervescentia/start-standard)
[![deps](https://david-dm.org/effervescentia/start-standard.svg?style=flat-square)](https://david-dm.org/effervescentia/start-standard)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![greenkeeper](https://badges.greenkeeper.io/effervescentia/start-standard.svg)](https://greenkeeper.io/)

🎏 [Standard Style](http://standardjs.com/) checker for [Start](https://github.com/start-runner/start)

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![Semistandard - JavaScript Style Guide](https://cdn.rawgit.com/flet/semistandard/master/badge.svg)](https://github.com/Flet/semistandard)
[![happiness - JavaScript Sytle Guide](https://cdn.rawgit.com/JedWatson/happiness/master/badge.svg)](https://github.com/JedWatson/happiness)

## Install

```sh
npm install --save-dev start-standard
# or
yarn add --dev start-standard
```

## Usage

```js
import Start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import standard from 'start-standard';

const start = Start(reporter());

export const lint = () => start(
  files([ 'lib/**/*.js', 'test/**/*.js' ]),
  standard()
);
```

This task relies on array of files and provides the same, see [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

To use styles other than `standard`, `semistandard` or `happiness` (such as `standard-react`)
you will have to add the dependency yourself.

`standard(style, options)`

* `style` – `'standard'`, `'semistandard'` or `'happiness'`.
`'standard'` by default
* `options` – [Standard Options](http://standardjs.com/#standardlintfilesfiles-opts-callback)
