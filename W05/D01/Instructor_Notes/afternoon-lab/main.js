document.addEventListener("DOMContentLoaded", function(event){

  $.ajax({
    // example call
    // if you get a 504 error then that means you have an incorrect request
    // replace 1234 with your nytimes api key!
    url: 'http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/C000880.json?api-key=1234',
    dataType: 'jsonp',
    success: function(response){
      console.log(response);
    }
  });

});
