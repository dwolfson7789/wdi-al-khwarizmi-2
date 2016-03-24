//
//
// var badJokes = [
//   "A man walks into a bar. Ouch",
//   "Your momma's so fat that when she sits around the house, \
//   she REALLY sits around the house.",
//   "What's that on your shoe? (slaps you upside the face)"
// ];
//
var fs = require('fs');
//read method//
fs.readFile('badJokes.js', 'utf8',
function (error, data){
  console.log(error);
  console.log(data);

});








// What do require and module.exports do? Write your answers in a new markdown file.
//
// "require" gives the JS file access to that particular module after you've installed it with NPM. Without requiring any given module, the JS file wouldn't know where to go to find that module's methods or prototypes. "module.exports" gives you a way to write your own custom modules for your programs and export them into your node modules folder to in turn use them in your JS file(s).
// What is a Node module? A package? What's the difference?
//
// A module is an "external" (i.e. not written by you) javascript file designed to perform a specific task.
// A package is a collection of module, which can be downloaded using NPM and incorporated into an app.
// Write a node file called jokeTeller.js that picks a bad joke at random from the above array and logs it to the console. You can copy and paste th
