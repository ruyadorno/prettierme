# eslintme

[![NPM version](https://badge.fury.io/js/eslintme.svg)](https://npmjs.org/package/eslintme)
[![Build Status](https://travis-ci.org/ruyadorno/eslintme.svg?branch=master)](https://travis-ci.org/ruyadorno/eslintme)

> The fastest way to eslint a single file


## About

This is a convenience script around [eslint_d](https://github.com/mantoni/eslint_d.js) to run it at [maximum speed](https://github.com/mantoni/eslint_d.js#moar-speed) using **netcat**.

**eslint_d** is an amazing tool that keeps a local server running **eslint** to cut linting time for a single file, so that we can get instant linting in our preferred editor.


## Install

```
$ npm install -g eslintme
```


## Usage

To start the server and lint a file, just run:

```js
$ eslintme file.js
```


## Editor Integration

- __Vim__: Install the [syntastic](https://github.com/scrooloose/syntastic) plugin, then make sure this is in your `.vimrc`:

```vim
let g:syntastic_javascript_checkers = ['eslint']
let g:syntastic_javascript_eslint_generic = 1
let g:syntastic_javascript_eslint_exec = 'eslintme'
```


### Using eslint plugins

Due to the nature of how `eslint` plugins work, you usually have to install them globally in order for the global `eslint` to find them. Unfortunately that will translate into duplicated npm global installs in your system to lint projects relying on plugins.

**How to lint a project that has a eslint plugin:**

0. Install **eslint**: `npm install -g eslint`
0. Install **eslint_d**: `npm install -g eslint_d.js`
0. Install **eslintme**: `npm install -g eslintme`
0. Install the required plugins (example): `npm install -g eslint-plugin-react`


## Support

Please note that this is a very platform-specific convenience wrapper around **eslint_d**, it only supports unix platforms where **netcat** is available. For usage in any other systems please stick with the regular [eslint_d](https://github.com/mantoni/eslint_d.js).


## License

MIT © [Ruy Adorno](http://ruyadorno.com)

