document.addEventListener("DOMContentLoaded", function(event) {

  $.ajax({
    url: 'http://api.open-notify.org/iss-now.json',
    jsonp: 'callback',
    dataType: 'jsonp',
    success: iss.onLocation
  });


});
