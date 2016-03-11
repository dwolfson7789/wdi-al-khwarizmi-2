document.addEventListener("DOMContentLoaded", function(event){
  $.ajax({
    url: 'https://data.ny.gov/resource/nyctransitsubwayentrance-and-exit.json?',
    dataType: 'json',
    success: function(result) {
      console.log(result)
    }
  });
});
