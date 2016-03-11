document.addEventListener("DOMContentLoaded", function(event){
  $.ajax({
    url: 'https://data.ny.gov/resource/nyctransitsubwayentrance-and-exit.json?',
    dataType: 'json',
    success: function(result) {
      console.log(result);
      var filtered = result.filter(function(obj){
        if(obj.entrance_type === "Stair"){
          return false;
        } else {
          return true;
        }
      })
      console.log(filtered);
    }
  });
});
