// kick off babel with live transpiling
require('babel-register')({
   presets: [ 'es2015' ]
});

// once bable is loaded head over to server for es6 goodness
require('./server');
