// frontend: run `http-server` & navigate to localhost:8080
// then make ajax requests to localhost:3000, where the BE is listening

window.onload = function(){
  // get the elements:
  var allContactsDiv = document.getElementById('all-contacts-div');
  var addContactDiv = document.getElementById('add-contact-div');
  var findContactDiv = document.getElementById('find-contact-div');
  var deleteContactDiv = document.getElementById('delete-contact-div');
  var updateContactDiv = document.getElementById('update-contact-div');

  // hide upon load:
  allContactsDiv.style.display = 'none';
  addContactDiv.style.display = 'none';
  findContactDiv.style.display = 'none';
  deleteContactDiv.style.display = 'none';
  updateContactDiv.style.display = 'none';

  // the URL of our backend to use in our AJAX calls:
  var url = 'http://localhost:3000';

  /* Go! button */
  document.getElementById('go-button').addEventListener('click', function(){
    // get val of radios:
    var chosenRadio = document.querySelector('.contacts-radios:checked');
    if (chosenRadio.value == 'see-all') { // see all contacts
      console.log("See all contacts");
      // show the el
      allContactsDiv.style.display = 'block';
      // ajax to get all contacts
      $.ajax({
        url: url + '/contacts',
        dataType: 'json'
      }).done(function(response){
        console.log("response: ", response);
        /* Loop & append to DOM: */
        var contactsList = document.getElementById('contacts-list');
        for (var i = 0; i < response.length; i++) {
          var liText = response[i].name + ' | ' + response[i].email;
          var theLi = document.createElement('li');
          theLi.appendChild(document.createTextNode(liText));
          contactsList.appendChild(theLi);
        }
      });
    } else if (chosenRadio.value == 'add-new') { // add new contact
      // show add new inputs
      addContactDiv.style.display = 'block';
    } else if (chosenRadio.value == 'find-by-name') { // find contact
      // show find name input
      findContactDiv.style.display = 'block';
    } else if(chosenRadio.value == 'delete-by-name') { // delete contact
      // show delete name input
      deleteContactDiv.style.display = 'block';
    } else if(chosenRadio.value == 'update-by-name') { // update contact
      // show update name input
      updateContactDiv.style.display = 'block';
    }
  }); // end submit btn fxn

  /* 'add new contact' button */
  document.getElementById('add-contact-button').addEventListener('click', function() {
    console.log("Add contact button clicked");
    var newName = document.getElementById('add-new-name').value.toLowerCase();
    var newEmail = document.getElementById('add-new-email').value.toLowerCase();
    console.log( newName );
    var data = {
      name: newName,
      email: newEmail
    };
    // post:
    $.ajax({
      url: url + '/contacts/new',
      method: 'POST',
      data: data,
      dataType: 'json'
    }).done(function(response) {
      console.log( "response: ", response );
    }); // end AJAX
  }); // end Add Button listener

  /* 'find contact' button */
  document.getElementById('find-contact-button').addEventListener('click', function() {
    var searchName = document.getElementById('find-name').value.toLowerCase();
    console.log("finding: ", searchName);
    var data = {
      name: searchName
    };
    $.ajax({
      url: url + '/contacts/' + searchName,
      method: 'get',
      data: data,
      dataType: 'json'
    }).done(function(response){
      if (response.length){
        console.log(response);
      } else {
        console.log("none found");
      }
    }); // end ajax
  }); // end search name button listener

  /* 'delete contact' button */
  document.getElementById('delete-contact-button').addEventListener('click', function() {
    var deleteName = document.getElementById('delete-name').value.toLowerCase();
    console.log("deleting: ", deleteName);
    var data = {
      name: deleteName
    };
    $.ajax({
      url: url + '/contacts/' + deleteName,
      dataType: 'json',
      data: data,
      method: 'delete'
    }).done(function(response){
      console.log(deleteName + " has been deleted.");
      console.log(response);
    }); // end ajax
  }); // end delete contact button

  /* 'update contact' button */
  document.getElementById('update-contact-button').addEventListener('click', function() {
    var nameToUpdate = document.getElementById('update-name').value.toLowerCase();
    var newName = document.getElementById('new-update-name').value.toLowerCase();
    var newEmail = document.getElementById('new-update-email').value.toLowerCase();
    var data = {
      name: nameToUpdate,
      newName: newName,
      newEmail: newEmail
    }
    $.ajax({
      url: url + '/contacts/' + nameToUpdate,
      dataType: 'json',
      method: 'put',
      data: data
    }).done(function(response){
      console.log(response);
    }); // end ajax

  }); // end update contact button

}; // end window onload fxn
