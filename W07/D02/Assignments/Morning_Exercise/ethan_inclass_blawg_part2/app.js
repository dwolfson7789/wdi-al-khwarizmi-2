var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var PORT = 3000;
var fs = require('fs');
var app = express();
var authorsData = {};
var postsData = {};

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

<<<<<<< HEAD
=======
// reads in the datafiles (so we don't have to write this code over and over)
>>>>>>> b084dd9eed05df94865a8b486120a7b1e3e5018c
function readData() {
  fs.readFile('./data/authors.json', function(err, data) {
    if (err) {
      console.log('error reading authors.json', err);
    } else {
      authorsData = JSON.parse(data);
    }
  });

  fs.readFile('./data/posts.json', function(err, data) {
    if (err) {
      console.log('error reading posts.json', err);
    } else {
      postsData = JSON.parse(data);
<<<<<<< HEAD
      console.log(postsData);
=======
      // console.log(postsData);
>>>>>>> b084dd9eed05df94865a8b486120a7b1e3e5018c
    }
  });
}

// ROUTES
app.get('/author/:id/posts', function(req, res) {
  var id = req.params.id;
<<<<<<< HEAD
  console.log(id);
=======
  // console.log(id);
>>>>>>> b084dd9eed05df94865a8b486120a7b1e3e5018c

  var author = authorsData.authors.filter(function(item) {
    if (item.author_id == id) {
      return true;
    } else {
      return false;
    }
  });

<<<<<<< HEAD
  // function filter(array, test) {
  //   var result = [];
  //   for (var i = 0; i < array.length; i++) {
  //     if (test(array[i])) {
  //       result.push(array[i])
  //     }
  //   }
  //   return result;
  // }


=======
>>>>>>> b084dd9eed05df94865a8b486120a7b1e3e5018c
  if (author.length > 1) {
    return 'WTF';
  }

  author = author[0];

  var data = postsData.posts.filter(function(item) {
    if (author.posts.indexOf(item.post_id) > -1) {
      return true;
    } else {
      return false;
    }
  });
<<<<<<< HEAD
  console.log(data);
=======
>>>>>>> b084dd9eed05df94865a8b486120a7b1e3e5018c

  if (data) {
    res.json(JSON.stringify(data));
  } else {
    res.json({success:false});
  }
});

<<<<<<< HEAD
=======
// EDIT a post
app.put('/posts/:id', function(req, res) {
  console.log('Incoming PUT request to /posts/:' + req.params.id);
  var userEdits = req.body;
  var post = postsData.posts.filter(function(item) {
    if (req.params.id == item.post_id) {
      return true;
    } else {
      return false;
    }
  })[0];

  post.title = userEdits.title;
  post.body = userEdits.body;

  fs.writeFile('./data/posts.json', JSON.stringify(postsData), function(err) {
    if (err) {
      console.log('error writing file to posts.json', err);
    } else {
      console.log('data/posts.json successfully updated');
      readData();
      res.json({infoStatus:"post successfully updated", editedPost: post});
    }
  });
});

>>>>>>> b084dd9eed05df94865a8b486120a7b1e3e5018c
app.post('/new', function(req,res) {
  // grab the new post info from the client: author, title, body of post
  // put them in a new post object
  // add in a date_created property and set it equal to current date/times
  // add in a post_id property and set it equal to postData.postCount++
  // push the new post into postData.posts
  // find the author of the post in the authorData.authors array
  // push the new post's id number into that author's posts array
  // write over the JSON files with the updated postsData and authorData
  // (run readData();)
});

// START UP SERVER
app.listen(PORT, function(){
  readData();
  console.log('server up and running on port', PORT);
});
