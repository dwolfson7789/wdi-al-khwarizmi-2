var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var PORT = 3000;

var app = express();

//adds the ability to ajax our server.
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));

//depending on the kind of req we get, fire the right callback.
app.get('/', function(request, response) {
    //read json file here.
    fs.readFile('./data/babbls.json', 'utf8', function(err,data) {
        if(err) return console.log(err);
        response.json(JSON.parse(data));
    }); //end of redfile
    console.log('request getting');
});

app.post('/', function(request, response) {
    console.log("request.body", request.body);
    var newBabble = request.body;
    console.log(newBabble);
    fs.readFile('./data/babbls.json', function(err, data) {
        var parsed = JSON.parse(data);
        console.log("data",parsed);
        parsed.unshift(newBabble);
        fs.writeFile('./data/babbls.json', JSON.stringify(parsed), function(err){
            response.json({"success": "true"});
        })
    }) // end of fs read
}) //end of app.post

app.listen(PORT, function() {
    console.log("server is up and running on port", PORT);
})
