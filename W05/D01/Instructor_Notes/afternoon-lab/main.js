document.addEventListener("DOMContentLoaded", function(event){

  $.ajax({
    //example call
    //if you get a 504 error then that means you have an incorrect request
    url: 'http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/C000880.json?api-key=8e4fe03bcb43ab502d5dbb6bb5994b39:13:74703480',
    dataType: 'jsonp',
    success: function(response){
      console.log(response);
    }
  });

});
