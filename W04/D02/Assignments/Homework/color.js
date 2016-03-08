console.log('color.js has loaded');

var container = document.querySelector('.container'),
    button    = document.querySelector('#color-button');

button.addEventListener('click', function() {
  // $.ajax({
  //   url: "http://www.colourlovers.com/api/colors/random&format=json",
  //   crossDomain: true,
  //   success: function(data) {
  //     console.log(data);
  //   }
  // });

  fetch('http://www.colourlovers.com/api/colors/random&format=json', {mode: 'no-cors'})
  .then(function(response) {
    console.log(response);
    return response.text();
  })
  .then(function(text) {
    console.log('Request successful', text);
  })
  .catch(function(error) {
    log('Request failed', error)
  });

});
