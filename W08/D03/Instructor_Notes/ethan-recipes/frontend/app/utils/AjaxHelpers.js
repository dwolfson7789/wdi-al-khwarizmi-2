import axios from 'axios';

const AjaxHelpers = {
  getAllRecipes: function() {
    return axios.get('http://localhost:3000/recipes');
  },
  getOneRecipe: function(name) {

  },
  createNewRecipe: function(recipe) {

  },
  deleteARecipe: function(recipe) {

  },
  editARecipe: function(recipe) {

  }
};

export default AjaxHelpers;
