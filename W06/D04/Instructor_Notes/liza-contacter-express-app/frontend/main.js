window.onload = function(){
  // console.log("hi there.");
  // hide upon load:
  document.getElementById('add-new-option').style.display = 'none';
  document.getElementById('search-option').style.display = 'none';
  document.getElementById('all-contacts-div').style.display = 'none';

  var url = 'http://localhost:3000';
  document.getElementById('submit-button').addEventListener('click', function(){
    // console.log('submit button pressed');
    // get the val of the radio:
    var chosenRadio = document.querySelector('.contacts-radios:checked');
    // console.log(chosenRadio.value);

    if (chosenRadio.value == 'add-new') {
      document.getElementById('add-new-option').style.display = 'block';
    } else if (chosenRadio.value == 'search-by-name') {
      document.getElementById('search-option').style.display = 'block';
    } else if (chosenRadio.value == 'see-all') {
      // make get request
      $.ajax({
        url: url,
        dataType: 'json'
      }).done(function(response){
        console.log("response", response);
      });
    }
  }); // end submit btn listener
  // add button event listener
  document.getElementById('add-button').addEventListener('click', function() {
    console.log("add new button clicked");
    var newName = document.getElementById('add-new-name').value.toLowerCase();
    var newEmail = document.getElementById('add-new-email').value.toLowerCase();
    console.log(newName, newEmail);
    var data = {};
    data.name = newName;
    data.email = newEmail;
    $.ajax({
      url:url,
      method: 'POST',
      data: data,
      dataType: 'json'
    }).done(function(response) {
      console.log("response:", response);
    });
  }); // end add new event listener

  // search for name:
  document.getElementById('search-contact-button').addEventListener('click', function() {
    var searchName = document.getElementById('search-name').value.toLowerCase();
    console.log(searchName);
    $.ajax({
      url: url,
      dataType: 'json'
    }).done(function(response){
      console.log(response);
      var searchedContact = response.filter(function(obj){
        if( obj.name == searchName ) {
          return true;
        }
      }); // end filter Fxn
      for ( contactObj of searchedContact ) {
        console.log(contactObj.name);
        console.log(contactObj.email);
      }
      
    }); // end done
  }); // end button listener



} // end window onload fxn
