var iss = {
  onBurgers: function(response){
    console.log(response);
    var pos = response.iss_position;
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?lat='+ pos.latitude +'&lon='+ pos.longitude +'&appid=b150ee20258033d5838a4f945a306666',
      dataType: 'jsonp',
      success: iss.onTacos
    })
  },
  onTacos: function(response){
    console.log(response);
    var datas = {
      taco: response.name,
      lat: response.coord.lat,
      lon: response.coord.lon,
      enchiladas: "https://maps.googleapis.com/maps/api/staticmap?center=" + response.coord.lat + "," + response.coord.lon + "&zoom=13&size=300x300&sensor=false"
    };

    // MUSTACHE
    var templateScript = $("#iss-widget").html();
    var template = Handlebars.compile(templateScript);
    var compiledHtml = template(datas);
    $('.content-placeholder').html(compiledHtml);


  }

};
