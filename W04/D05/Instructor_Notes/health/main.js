document.addEventListener("DOMContentLoaded", function(event){
  $.ajax({
    url: 'https://data.cityofnewyork.us/resource/xx67-kt59.json',
    dataType: 'json',
    success: function(result) {
      console.log(result)
    }
  });
});
