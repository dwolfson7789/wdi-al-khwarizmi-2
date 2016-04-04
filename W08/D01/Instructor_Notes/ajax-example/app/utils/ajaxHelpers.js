import axios from 'axios';

const helpers = {
  getContactName: function(){
    // fetch some data from using a promise
    axios.get('http://localhost:3000/contacts')
    /*
    .then(function(response){
      console.log(response);
      return response;
    })
    .catch(function(err){
      // good practice to add to promise chains
      console.warn('Error in ');
    })
    */
  }
}

export default helpers;
