document.addEventListener("DOMContentLoaded", function(event) {
  $.getJSON( 'http://localhost:3000/', function( json ) {
    console.log(json);
   });
});
