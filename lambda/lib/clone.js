const Git = require("nodegit");

module.exports.run = function() {

  Git.Clone("https://github.com/tatums/dietsmarts.info", "./tmp")
    .then(function(repo) {
      return repo.getMasterCommit();
    })
    .then(function(commit) {
      return commit.getEntry("README.md")
    })
    .then(function(entry) {
      return entry.getBlob()
        .then(function(blob) {
          blob.entry = entry
          return blob
        })
    })
    .then(function(blob) {
      console.log(String(blob))
    })
    .catch(function(err) {
      console.log(err)
    })
}
