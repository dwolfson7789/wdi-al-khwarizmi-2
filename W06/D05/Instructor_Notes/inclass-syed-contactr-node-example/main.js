var fs = require('fs');
var prompt = require('prompt');
var colors = require('colors');
var file = "./contact-list.json";

console.log(colors.rainbow("PICK A DANG NUMBER!"));
console.log(colors.rainbow("TYPE 1 TO SAVE A CONTACT"));
console.log(colors.rainbow("TYPE 2 TO FIND CONTACT BY NAME"));
console.log(colors.rainbow("TYPE 3 TO LIST ALL CONTACTS!"));


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
    });/////enter name //
  } else if(result.choice === '2'){
    console.log('please enter your name!');
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
        for (contact of filterd) {
          console.log("found: " + colors.rainbow(contact.email + contact.email));
        }
      });
    });
  } else if(result.choice == '3'){
    fs.readFile(file, function(err, data){
      if (err) return err;
      var contacts = JSON.parse(data);
      for (contact of contacts){
        console.log(colors.rainbow(contact.name + " - " + contact.email));
      }
    });
  }else if (result.choice == '4'){
    fs.

    }
  }
});
