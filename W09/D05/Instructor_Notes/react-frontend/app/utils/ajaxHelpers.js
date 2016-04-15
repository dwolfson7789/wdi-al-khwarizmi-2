import axios from 'axios';

const helpers = {
  getTacos: function(){
    // fetch some data from using a promise
    return axios.get('http://localhost:3000/api/tacos');
  },
  getTaco: function(){
    return axios.get('http://localhost:3000/api/taco')
  },
  addTaco: function(taco){
    return axios.post('http://localhost:3000/api/taco', taco);
  },
  deleteTaco: function(taco){
    return axios.delete('http://localhost:3000/api/taco', taco);
  },
  updateTaco: function(taco){
    return axios.put('http://localhost:3000/api/taco', taco);
  }

}

export default helpers;
