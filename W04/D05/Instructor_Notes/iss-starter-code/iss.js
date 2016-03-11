var iss = {
    onLocation: function (response) {
      console.log(response);
      var pos = response.iss_position

      $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?lat='+ pos.latitude +'&lon='+ pos.longitude +'&appid=b150ee20258033d5838a4f945a306666',
        dataType: 'jsonp',
        success: iss.onWeather
      })

    },
    onWeather: function(response){
      console.log("the iss is flying over: " + response.name);
      console.log(response);
      var datas = {
        name: response.name,
        lat: response.coord.lat,
        lon: response.coord.lon,
        image: "https://maps.googleapis.com/maps/api/staticmap?center=" + response.coord.lat + "," + response.coord.lon + "&zoom=13&size=300x300&sensor=false"
      };

      // mustache stuff
      var theTemplateScript = $("#iss-widget").html();
      var theTemplate = Handlebars.compile(theTemplateScript);
      var theCompiledHtml = theTemplate(datas);
      $('.content-placeholder').html(theCompiledHtml);
    }
};
