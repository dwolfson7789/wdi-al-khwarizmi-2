var express = require('express');
var cors = require('cors');
var fs = require('fs');
var bodyParser = require('body-parser');
var PORT = 3000;

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', function(request, response) {

    fs.readFile('./data/babbls.json', 'utf8', function(err,data) {
        if(err) return console.log(err);
        response.json(JSON.parse(data));
    });
    console.log('request getting');
});

// Respond to POST request on the root route (/), the application’s home page:
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
        });
    }); 
}); //end of app.post

app.listen(PORT, function() {
    console.log("server running on port", PORT);
});
