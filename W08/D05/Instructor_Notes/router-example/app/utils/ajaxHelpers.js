import axios from 'axios';

const helpers = {
  getContacts: function(){
    // fetch some data from using a promise
    return axios.get('http://localhost:3000/contacts');
  },
  addContact: function(contact){
    return axios.post('http://localhost:3000/contacts/new', contact);
  }
}

export default helpers;
