var fs = require('fs');
var colors = require('colors');
var file = "./contacts.json";

var obj = {"name":"drake", "email":"drake@ga.co"};

fs.readFile(file, function(err, data){
  var contacts = JSON.parse(data);
  contacts.push(obj);
  fs.writeFile(file, JSON.stringify(contacts), function(err){
    if (err) return console.log(err);
    console.log(colors.rainbow("object saved!"));
  });
});
fs.readFile(file, function(err, data){
  var contacts = JSON.parse(data);
  console.log(contacts);
});

/* read contacts.json and console.log the results */
