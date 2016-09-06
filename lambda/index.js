'use strict'

exports.handler = (event, context) => {

  const download = require('./lib/download')
  const build = require('./lib/build')
  const publish = require('./lib/publish')

  download.run()
    .then(resp => { return build.run() })
    .then(resp => { return publish.run() })
    .then(resp => {
      console.log('RESP =>', resp)
      context.succeed({message: resp})
    })
    .catch(err => {
      console.log('ERRRRRRR', err)
      context.fail({message: err})
    })

}
