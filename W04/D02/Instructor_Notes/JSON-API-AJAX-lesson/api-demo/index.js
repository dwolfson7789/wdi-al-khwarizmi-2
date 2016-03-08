window.onload = function() {
  // console.log('everything is awesome!');

  document.getElementById('submit-btn').addEventListener('click', function(ev){
    // prevent the default of the submit button
    ev.preventDefault();

    var apiInputBox = document.getElementById('api-input');
    var userChosenMovie = apiInputBox.value;
    // var query = 'http://omdbapi.com/?tomatoes=true&t=' + userChosenMovie;
    var query = 'http://api.wunderground.com/api/cc7b398f0f1266c4/conditions/q/CA/San_Francisco.json';

    $.ajax({
      url: query,
      dataType: "jsonp"
    }).done(function(response){
      console.log(response);
      var titleEl = document.getElementById('title');
      titleEl.innerHTML = response.Title;
      var yearEl = document.getElementById('year');
      yearEl.innerHTML = response.Year;
      var posterEl = document.getElementById('poster');
      posterEl.innerHTML = '<img class="picture" src="' + response.Poster + '"/>';

    }).fail(function(response){
      console.log("uh oh, fail");
      console.log(response);
    }).always(function(response){
      console.log("this code runs no matter what.");
    })


  }) // end click fxn


} // end window onload
