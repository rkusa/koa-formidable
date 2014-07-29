# koa-formidable

[Formidable](https://github.com/felixge/node-formidable) middleware for Koa

[![NPM][npm]](https://npmjs.org/package/koa-formidable)
[![Dependency Status][dependencies]](https://david-dm.org/rkusa/koa-formidable)

**Breaking Change in 1.0.0:** both `body` and `files` are now added to Koa's `.request` instead of modifying the http request (`.req`) directly.

## API

`var formidable = require('koa-formidable')`

### formidable(opts)

Returns the formidable middleware that parses the incoming request and adds the `.request.body` and `.request.files` to the context.

**Arguments:**

* **opts** - the options that get passed to the [`Formidable.IncomingForm`](https://github.com/felixge/node-formidable#formidableincomingform) (you could also provide an instance of `IncomingForm` directly)

**Example:**

```js
var formidable = require('koa-formidable')
app.use(formidable())
```

### formidable.parse(opts, ctx)

Parse the incoming request manually.

**Arguments:**

* **opts** - the options that get passed to the [`Formidable.IncomingForm`](https://github.com/felixge/node-formidable#formidableincomingform) (you could also provide an instance of `IncomingForm` directly)
* **ctx** - the Koa context

**Example:**

```js
var formidable = require('koa-formidable')
app.use(function*(next) {
  var form = yield formidable.parse(this)
  ...
  yield next
})
```

## MIT License

Copyright (c) 2014 Markus Ast

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[npm]: http://img.shields.io/npm/v/koa-formidable.svg?style=flat
[dependencies]: http://img.shields.io/david/rkusa/koa-formidable.svg?style=flat
