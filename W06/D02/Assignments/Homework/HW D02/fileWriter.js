

// fs.writeFile( file, text, function (err){
//   console.log("done writting file.");

  var fs = require('fs');
console.log("in fileWriter");
var makeAFile = function (fileName, str) {
    fs.writeFile(fileName, str, function(err){
      if (err) {
        console.log("error was: ", err);
      } else {
        console.log("Successful.");
        fs.watch(process.argv[2], {
          persistent: true
        }, function(event, filename){
          console.log("event ", event, "has occurred on", filename);
        });
      }
    });
}

makeAFile(process.argv[2],process.argv[3]);
//   fs.readFile( file, function (err, data){
//     console.log("reading the newly created file:", data.toString());
//   });
// });
// fs.stat(file, function (err, stats) {
//   console.log("file size:", stats.size);
// });
