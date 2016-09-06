var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');

module.exports.run = function() {

  const sourcePath = '/tmp/dietsmarts.info-master/metalsmith-site/src'

  return new Promise(function (resolve, reject) {
    Metalsmith(__dirname)
      .metadata({
        title: "Dietsmarts",
        description: "Is you're diet smart?",
      })
      .source(sourcePath)
      .destination('/tmp/build')
      .clean(false)
      .use(markdown())
      .use(layouts({
        engine: 'handlebars',
        directory: "/tmp/dietsmarts.info-master/metalsmith-site/layouts"
      }))
      .build(function(err, files) {
        if (err) {
          reject(err)
        } else {
          resolve('hello')
        }
      })
  })

}
