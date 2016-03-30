window.onload = function () {
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

    // Event listener on Go! button:
    document.getElementById('go-button').addEventListener('click', function(){
      // get val of radios:
      var chosenRadio = document.querySelector('.contacts-radios:checked');
      // See All Contacts:
      if (chosenRadio.value == 'see-all') {
        console.log("You've chosen to see all contacts");
        allContactsDiv.style.display = 'block';
        /* ajax - get all contacts */
        $.ajax({
          url: url + '/contacts',
          dataType: 'json'
        }).done(function(response){
          console.log("response: ", response);
        });
      } else if (chosenRadio.value == 'add-new') { // add new contact
        // show add new inputs
        addContactDiv.style.display = 'block';
        console.log("You've chosen to add a new contact");
      } else if (chosenRadio.value == 'find-by-name') { // find contact
        // show find name input
        findContactDiv.style.display = 'block';
        console.log("You've chosen to find a contact");
      } else if(chosenRadio.value == 'delete-by-name') { // delete contact
        // show delete name input
        deleteContactDiv.style.display = 'block';
        console.log("You've chosen to delete a contact");
      } else if(chosenRadio.value == 'update-by-name') { // update contact
        // show update name input
        updateContactDiv.style.display = 'block';
        console.log("You've chosen to update a contact");
      }
    }); // end go btn listener

    /* 'add new contact' button */
    document.getElementById('add-contact-button').addEventListener('click', function() {
      var newName = document.getElementById('add-new-name').value.toLowerCase();
      var newEmail = document.getElementById('add-new-email').value.toLowerCase();
      var data = {
        name: newName,
        email: newEmail
      };
      /* ajax - add new contact */
      $.ajax({
        url: url + '/contacts/new',
        dataType: 'json',
        method: 'post',
        data: data
      }).done(function(response) {
        console.log("response:", response);
      });


    }); // end Add Button listener

    /* 'find contact' button */
    document.getElementById('find-contact-button').addEventListener('click', function() {
      var searchName = document.getElementById('find-name').value.toLowerCase();

      /* ajax - find contact by name */
      $.ajax({
        url: url + '/contacts/' + searchName,
        method: 'get',
        dataType: 'json'
      }).done(function(response) {
        console.log("response:", response);
      });

    }); // end search name button listener

    /* 'delete contact' button */
    document.getElementById('delete-contact-button').addEventListener('click', function() {
      var deleteName = document.getElementById('delete-name').value.toLowerCase();
      var data = {
        name: deleteName
      };
      /* ajax - delete contact */
      $.ajax({
        url: url + '/contacts/' + deleteName,
        dataType: 'json',
        method: 'delete',
        data: data
      }).done(function(response) {
        console.log("response:", response);
      });

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
      };

      /* ajax - update contact  */
      $.ajax({
        url: url + '/contacts/' + nameToUpdate,
        dataType: 'json',
        method: 'put',
        data: data
      }).done(function(response){
        console.log("response: ", response);
      });

    }); // end update contact button

  }; // end window onload fxn
