import axios from 'axios';



const ajaxHelpers = {
  getContacts: function(){
    return axios.get('http://localhost:3000/recipes');
  },
  addContact: function(recipe){
    return axios.post('http://localhost:3000/recipes/new', recipe);
  },
  findContact: function(recipe){
    return axios.get('http://localhost:3000/recipes/' + recipe.name);
  },
  deleteContact: function(recipe){
    return axios.delete('http://localhost:3000/recipes/' + recipe.name);
  },
  updateContact: function(recipe){
    return axios.put('http://localhost:3000/recipes/' + recipe.name, recipe);
  }
}

export default ajaxHelpers;

//source is react-ajax-solution//
