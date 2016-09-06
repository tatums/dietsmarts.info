const fs = require('fs')
const AWS = require('aws-sdk')
const mime  = require('mime-types')
const config = require('../config.json')

const s3 = new AWS.S3({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey
})

const bucket = 'www.dietsmarts.info'

function putObject(path) {
  const Key = path.replace(new RegExp(/\/tmp\/build\//), '')
  const params = {
    Bucket: bucket,
    Key: Key,
    Body: fs.readFileSync(path, "utf8"),
    ContentType: mime.lookup(Key),
  };
  return s3.putObject(params).promise();
}

const glob = require("glob")

function readHtmlFiles () {
  return new Promise((resolve, reject) => {
    glob("/tmp/build/**/*.*", (er, files) => {
      if (er) reject(er)
      resolve(files)
    })
  })
}

function uploadFiles(files) {
  return Promise.all(
    files.map(file => { return putObject(file) })
  )
}


module.exports.run = function() {
  return readHtmlFiles()
    .then(files => { return uploadFiles(files) })
}
