window.onload = function (){
  console.log('content loaded');

  document.getElementById('viewAllButton').addEventListener('click', function(){


    var url = 'http://localhost:3000/';

    $.getJSON(url, function(data){
      console.log(data);
// compiile handlebars//
    var templateSource= document.getElementById("name-template").innerHTML;
    var template = Handlebars.compile(templateSource);
    var compiledHtml = template(data);
    var container = document.getElementById("name-container");
    container.innerHTML = compiledHtml;
    });

  }); //end view all listener


  document.getElementById('submit-btn').addEventListener('click', function(){
    console.log("click click");

    var author = document.getElementById('author').value;
    var babbl = document.getElementById('babblrText').value;

    var newObj = {
      author: author,
      babbl: babbl
    };

    $.post({
      url: url,
      data: newObj,
      dataType: 'json'
    }).done(function(response){
      console.log(response);
    });
  }); //end submit listener
