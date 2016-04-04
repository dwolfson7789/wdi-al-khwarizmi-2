import axios from 'axios';

function getContacts(contact){
  return axios.get('https://localhost:3000/contacts')
}

const helpers = {
  getContactName: function(contacts){
    // fetch some data from using a promise
    return axios.all(players.map(function (username){
        return getUserInfo(username);
    })).then(function (response){ //kind of like on() from jquery
      // when promise is resolved
      // map or loop over the two calls so we just get data
      return response.map(function (restaurant){
        return restaurant.data; // this returns another promise
      });
    }).catch(function(err){
      // good practice to add to promise chains
      console.warn('Error in ');
    })
  }
}
