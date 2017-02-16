[js-bucketsort](http://aureooms.github.io/js-bucketsort)
==

Bucketsort code bricks for JavaScript. Parent is
[aureooms/js-sort](https://github.com/aureooms/js-sort).

[![NPM license](http://img.shields.io/npm/l/@aureooms/js-bucketsort.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-bucketsort/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/@aureooms/js-bucketsort.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-bucketsort)
[![Bower version](http://img.shields.io/bower/v/@aureooms/js-bucketsort.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-bucketsort)
[![Build Status](http://img.shields.io/travis/aureooms/js-bucketsort.svg?style=flat)](https://travis-ci.org/aureooms/js-bucketsort)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-bucketsort.svg?style=flat)](https://coveralls.io/r/aureooms/js-bucketsort)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-bucketsort.svg?style=flat)](https://david-dm.org/aureooms/js-bucketsort#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-bucketsort.svg?style=flat)](https://david-dm.org/aureooms/js-bucketsort#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-bucketsort.svg?style=flat)](https://codeclimate.com/github/aureooms/js-bucketsort)
[![NPM downloads per month](http://img.shields.io/npm/dm/@aureooms/js-bucketsort.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-bucketsort)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-bucketsort.svg?style=flat)](https://github.com/aureooms/js-bucketsort/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-bucketsort.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-bucketsort)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-bucketsort
# or
jspm install npm:@aureooms/js-bucketsort
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-bucketsort
```

### bower
```terminal
bower install @aureooms/js-bucketsort
```

### ender
```terminal
ender add @aureooms/js-bucketsort
```

### jam
```terminal
jam install @aureooms/js-bucketsort
```

### spm
```terminal
spm install @aureooms/js-bucketsort --save
```

### npm
```terminal
npm install @aureooms/js-bucketsort --save
```

## Require
### jspm
```js
let bucketsort = require( "github:aureooms/js-bucketsort" ) ;
// or
import bucketsort from '@aureooms/js-bucketsort' ;
```
### duo
```js
let bucketsort = require( "aureooms/js-bucketsort" ) ;
```

### component, ender, spm, npm
```js
let bucketsort = require( "@aureooms/js-bucketsort" ) ;
```

### bower
The script tag exposes the global variable `bucketsort`.
```html
<script src="bower_components/@aureooms/js-bucketsort/js/dist/bucketsort.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-bucketsort" ] , function ( bucketsort ) { ... } ) ;
```
