window.onload = function() {
  console.log('window loaded.');
  var baseURL = "http://swapi.co/api";

  /* bonus: create character dropdown dynamically */
  var peopleQuery = baseURL + '/people';
  // make call to `/people` upon pg load:
  $.ajax({
    url: peopleQuery
  }).done(function(peopleQueryResponse){
    var charDropdown = document.getElementById('char-dropdown');
    for (var i = 0; i < peopleQueryResponse.results.length; i++) {
      var val = i + 1;
      var name = peopleQueryResponse.results[i].name;
      var optionEl = document.createElement('option');
      optionEl.innerHTML = name;
      optionEl.value = val;
      charDropdown.appendChild(optionEl);
    }
  }).fail(function(peopleQueryResponse){
    console.log(peopleQueryResponse);
  }).always(function(peopleQueryResponse){
  }) // end people query

  // Character HBS:
  var charSource = document.getElementById('character-info-template').innerHTML;
  var charTemplate = Handlebars.compile(charSource);
  var charInfoContainer = document.getElementById('character-info');

  // Planet HBS:
  var planetSource = document.getElementById('planet-info-template').innerHTML;
  var planetTemplate = Handlebars.compile(planetSource);
  var planetInfoContainer = document.getElementById('planet-info');

  // submit btn click fxn:
  document.getElementById('submit-btn').addEventListener('click', function() {
    var chosenChar = document.getElementById('char-dropdown').value;
    var query = baseURL + '/people/' + chosenChar;
    console.log("query:", query);

    /* character query */
    $.ajax({
      url: query
    }).done(function(response){
      // give character HBS the object to stuff into the template
      var html = charTemplate(response);
      charInfoContainer.innerHTML = html;

      // construct homeworld query:
      var homeworldQuery = response.homeworld;

      /* homeworld query */
      $.ajax({
        url: homeworldQuery
      }).done(function(homeworldResponse){
        // give planet HBS the object to stuff into the template
        var html = planetTemplate(homeworldResponse);
        planetInfoContainer.innerHTML = html;

      }).fail(function(homeworldResponse){
        console.log(homeworldResponse);
      }).always(function(homeworldResponse){
      }) // end homeworld query

    }).fail(function(response){
      console.log(response);
    }).always(function(response){
    })

  }); // end char query

} // end window onload
