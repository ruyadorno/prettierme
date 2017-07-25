# prettierme

[![NPM version](https://badge.fury.io/js/prettierme.svg)](https://npmjs.org/package/prettierme)
[![Build Status](https://travis-ci.org/ruyadorno/prettierme.svg?branch=master)](https://travis-ci.org/ruyadorno/prettierme)

> The fastest way to prettier a single file


## About

This is a convenience script around [prettier_d](https://github.com/josephfrazier/prettier_d) to run it at [maximum speed](https://github.com/josephfrazier/prettier_d#moar-speed) using **netcat**.

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

- __Vim__: Install the [syntastic](https://github.com/scrooloose/syntastic) plugin, then make sure this is in your `.vimrc`:

```vim
let g:syntastic_javascript_checkers = ['prettier']
let g:syntastic_javascript_prettier_generic = 1
let g:syntastic_javascript_prettier_exec = 'prettierme'
```


## Support

Please note that this is a very platform-specific convenience wrapper around **prettier_d**, it only supports unix platforms where **netcat** is available. For usage in any other systems please stick with the regular [prettier_d](https://github.com/josephfrazier/prettier_d).


## License

MIT © [Ruy Adorno](http://ruyadorno.com)

