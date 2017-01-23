# start-standard
🎏 [Standard Style](http://standardjs.com/) checker for [Start](https://github.com/start-runner/start)

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
