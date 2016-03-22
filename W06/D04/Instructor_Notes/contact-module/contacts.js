const fs = require('fs')

module.exports = {
  list: function(args, callback){
    process.nextTick(() => {
      fs.readFile(args, (err, data) => {
        console.log(args);
        parsed = JSON.parse(data);
        callback(parsed);
      })
    })
  }
}
