import axios from 'axios'

function getUserInfo(restaurant){
  // name of the url get request to
  // pass in local zip code as well
  return axios.get('https://data.cityofnewyork.us/resource/xx67-kt59.json?dba=' +  restaurant)
}


const helpers = {
  getPlayersInfo: function(players){
    // fetch some data from github using a promise
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
      console.warn('Error in getPlayersInfo');
    })

  }
}

export default helpers
