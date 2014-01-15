var formidable = require('formidable')

var middleware = module.exports = function(opts) {
  return function*(next) {
    var res = yield middleware.parse(opts, this)
    this.req.body = res.fields
    this.req.files = res.files
    yield next
  }
}

middleware.parse = function(opts, ctx) {
  if (!ctx) {
    ctx = opts
    opts = {}
  }
  
  return function(done) {
    var form = opts instanceof formidable.IncomingForm
      ? opts
      : new formidable.IncomingForm(opts)
    form.parse(ctx.req, function(err, fields, files) {
      if (err) return done(err)
      done(null, { fields: fields, files: files })
    })
  }
} 