var fs = require('fs');
var prompt = require('prompt');
var colors = require('colors');
var file = "./etc/contact-list.json";

console.log("please press");
console.log("1 to save a new contact");
console.log("2 to save a retrieve a contact by name");
console.log("3 to list all contacts");

// saving a contact
prompt.start();
prompt.get(['choice'], function(err, result){
  if(result.choice === '1'){
    console.log('please enter the following info: ');
    prompt.get(['name', 'email'], function(err, result){
      if(err) return console.log(err);
      // get our contact list
      fs.readFile(file, function(err, data){
        var contacts = JSON.parse(data);
        contacts.push(result);
        //now write our results
        fs.writeFile(file, JSON.stringify(contacts), function(err){
          if (err) return console.log(err);
          console.log(colors.rainbow("object saved!"));
        });
      });
    });
  } else if(result.choice === '2'){
    console.log('please enter a name');
    prompt.get(['name'], function(err, result){
      if (err) return err;
      fs.readFile(file, function(err, data){
        var contacts = JSON.parse(data);
        var filterd = contacts.filter(function(obj){
          if (obj.name === result.name){
            return true;
          } else {
            return false;
          }
        });
        for (contact of filterd){
          console.log("found: " + colors.rainbow(contact.email));
        }
      });
    });
  } else if(result.choice == '3'){
    console.log("name - email");
    fs.readFile(file, function(err, data){
      if (err) return err;
      var contacts = JSON.parse(data);
      for (contact of contacts){
        console.log(colors.rainbow(contact.name + " - " + contact.email));
      }
    })
  }
});
