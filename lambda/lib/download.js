const https = require('https');
const fs = require('fs');
const unzip = require('unzip');

module.exports.run = function() {

  return new Promise(function (resolve, reject){

    https.get('https://codeload.github.com/tatums/dietsmarts.info/zip/master', function(response) {
      response.pipe(unzip.Extract({ path: '/tmp' }))
        .on('error', (err) => {
          reject(err)
        })
        .on('close', (close) =>{
          resolve()
        })
    })
  })
}

