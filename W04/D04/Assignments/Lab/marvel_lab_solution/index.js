window.onload = function() {
  // console.log('window loaded -- Marvel API Demo');

  // Get the elements:
  var searchTitle = document.getElementById('search-title');
  var charSearch = document.getElementById('search-character');
  var firstSubmitBtn = document.getElementById('submit-btn-first-api-call');
  var charsInfoContainer = document.getElementById('info-container-characters');
  var comicsInfoContainer = document.getElementById('info-container-comics');

  // hide upon load
  charsInfoContainer.style.display = 'none';
  comicsInfoContainer.style.display = 'none';

  // first-submit-button click fxn:
  firstSubmitBtn.addEventListener('click', function(ev) {
    // prevent default action of a submit button
    ev.preventDefault();

    // get the chosen endpoint from the dropdown:
    var chosenEndpoint = document.getElementById('search-endpoint').value;

    // Construct the query:
    var endPointUrl = "http://gateway.marvel.com:80/v1/public/" + chosenEndpoint;
    var apiPublicKeyQuery = "?apikey=" + MARVEL_PUBLIC_API_KEY;
    var queryString = '';

    // if choose characters endpoint:
    if (chosenEndpoint == 'characters') {
      console.log('CHARACTERS endpoint chosen');
      // get the user input:
      var userChosenCharacter = charSearch.value;
      console.log(userChosenCharacter);
      var queryString = '&name=' + userChosenCharacter;
    }

    // if choose comics endpoint:
    if (chosenEndpoint == 'comics') {
      console.log('COMICS endpoint chosen');
      // get the chosen search title
      var userChosenTitle = searchTitle.value;
      var queryString = '&title=' + userChosenTitle;
    }

    // the full query:
    var fullQuery = endPointUrl + apiPublicKeyQuery + queryString;

    // build the AJAX request:
    $.ajax({
      url: fullQuery
    }).done(function(response){
      console.log("fullQuery: ",  fullQuery);
      console.log("Success response: ", response);
      var resultsArr = response.data.results[0];

      // if characters:
      if (chosenEndpoint == 'characters') {
        var nameEl = document.getElementById('char-name');
        nameEl.innerHTML = resultsArr.name;
        var charIdEl = document.getElementById('char-id');
        charIdEl.innerHTML = resultsArr.id;
        var descriptionEl = document.getElementById('char-description');
        descriptionEl.innerHTML = resultsArr.description;
        var thumbEl = document.getElementById('char-thumb');
        thumbEl.innerHTML = '<img class="picture" src="' + resultsArr.thumbnail.path + '.' + resultsArr.thumbnail.extension + '"/>';

        charsInfoContainer.style.display = 'block';
      }

      // if comics:
      if (chosenEndpoint == 'comics') {
        comicsInfoContainer.style.display = 'block';

        // HBS //
        var context = {
        	comicsID: resultsArr.id,
        	comicsTitle: resultsArr.title,
        	comicsPgCount: resultsArr.pageCount,
          comicsDescrip: resultsArr.description,
          comicsThumb: resultsArr.thumbnail.path + '.' + resultsArr.thumbnail.extension,
          comicsPrice: resultsArr.prices[0].price
        };

        // source is a string representation of the HTML template
        var source = document.getElementById('comics-info-template').innerHTML;

        // HBS compiles `source` & returns a fxn, which we store in the `template` variable
        var template = Handlebars.compile(source);

        // We pass the obj `context` to this fxn, which we store in the `html` variable
        // the function returns computed HTML to us
        var html = template(context);

        // we set the computed HTML as the innerHTML of the infoContainer
        var infoContainer = document.getElementById('info-container-comics');
        infoContainer.innerHTML = html;
        comicsInfoContainer.style.display = 'block';
      }


    }).fail(function(response){
      console.log("Fail response: ", response);
    }).always(function(){
      // console.log("This always happens regardless of successful ajax request or not.")
    }) // end AJAX fxn

  }); // end click fxn
}; // end window onload fxn
