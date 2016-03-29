var fs = require('fs');
var prompt = require('prompt');
var colors = require('colors');
var file = "./contact-list.json";

console.log("please pick one!");
console.log("type in 1 to save a new contact");
console.log("type in 2 find all contact information by name");
console.log("type 3 to list all contacts");
console.log("type 4 to update a name by email");
console.log("type 5 to update a email by name");
console.log("type 6 to delete a contact by name")

prompt.start();
prompt.get(['choice'], function(err, result){
  if(result.choice === '1'){
    console.log('please enter the following info: ');
    prompt.get(['name','email'], function(err, result){
      if (err) return console.log(err);
      fs.readFile(file, function(err, data){
        var contacts = JSON.parse(data);
        contacts.push(result);
        fs.writeFile(file, JSON.stringify(contacts), function(err){
          if (err) return console.log(err);
          console.log(colors.rainbow("object saved!"));
        });
      });
    });
  } else if(result.choice === '2') {
    //stuff is done here.
    console.log("choice 2");
  }
});
