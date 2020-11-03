# prettierme

[![NPM version](https://badge.fury.io/js/prettierme.svg)](https://npmjs.org/package/prettierme)
[![Build Status](https://travis-ci.org/ruyadorno/prettierme.svg?branch=master)](https://travis-ci.org/ruyadorno/prettierme)

> The fastest way to prettier a single file


## About

This is a convenience script around [prettierd](https://github.com/fsouza/prettierd) to run it at [maximum speed](https://github.com/mantoni/core_d.js#moar-speed) using **netcat**.

**prettier_d** is an amazing tool that keeps a local server running **prettier** to cut linting time for a single file, so that we can get instant linting in our preferred editor.


## Install

```
$ npm install -g prettierme
```


## Usage

To start the server and lint a file, just run:

```js
$ prettierme file.js
```


## Editor Integration

- __Vim__: I'm running an extra vim configuration file that sets up commands to run after saving each file, that allows me to keep a seamless integration with [eslintme](https://github.com/ruyadorno/eslintme) for syntax/lint errors:

```vim
:autocmd BufWritePost *.js silent! !prettierme <afile> >/dev/null 2>&1
:autocmd BufWritePost *.js silent! e | redraw! | SyntasticCheck | SignifyRefresh
```

## Support

Please note that this is a very platform-specific convenience wrapper around **prettierd**, it only supports unix platforms where **netcat** is available. For usage in any other systems I'd recommend starting with the [prettier cli](https://www.npmjs.com/package/prettier).


## License

MIT © [Ruy Adorno](http://ruyadorno.com)

