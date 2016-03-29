console.log('main.js is loaded');

$(document).ready(function(){
  $('#author-button').on('click', function(e) {
    var $option = $('option:selected')[0];
    var selection = $option.value;
    console.log(selection);

    $.get('http://localhost:3000/author/' + selection + '/posts').success(function(data) {
      console.log(JSON.parse(data));
    });
  });





});
