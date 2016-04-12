import React from 'react';
import axios from 'axios';

//ajax helpers//
import ajaxHelpers from '../utils/ajaxHelpers';
//FSC title//

import Title from '../fsc/Title';
import ResultsComponent from '../fsc/ResultsComponent';

//import Component folder//

import FormComponent from '../components/FormComponent';
import AddRecipe from '../components/AddRecipe';
import DeleteRecipe from '../components/DeleteRecipe';
import UpdateRecipe from '../components/UpdateRecipe';
import FindRecipe from '../components/FindRecipe';
import GetRecipe from '../components/GetRecipe';


const App = React.createClass({

  getInitialState: function() {
    return {
      ajaxReturn: [],
      radioVal: '',
      name: '',
      ingredients: '',
      newName: '',
      newIngredient: ''
    };
  },
//react ajax solution//

  updateValState: function() {
    console.log("You've chosen:", e.target.value);
    this.setState({
      radioVal: e.target.value
    });
  },

  getRecipeAjaxCall: function() {
    console.log('Get all Recipe!');
    ajaxHelpers.getRecipe()
    .then(function(response){
      console.log("response.data", response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this));
  },

  addRecipeAjaxCall: function() {
    console.log('Add new Recipe:', this.state.name, this.state.ingredients;

    const Recipe = {
      name: this.state.name,
      ingredients: this.state.ingredients
    };
    ajaxHelpers.addRecipe()
  },

  findRecipeAjaxCall: function() {
    console.log('Find this Recipe:', this.state.name);
    const recipe = {
      name: this.state.name,
    };
    ajaxHelpers.findRecipe(Recipe)
    .then(function(response){
      console.log("response.data", response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this));
  },

  deleteRecipeAjaxCall: function() {
    console.log('Delete this Recipe:', this.state.name);
    const Recipe = {
      name: this.state.name,
    };
    ajaxHelpers.deleteRecipe()
    .then(function(response){
      console.log("response.data", response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this));
  },

  updateRecipeAjaxCall: function() {
    console.log('Update this Recipe:', this.state.name);
    const recipe = {
      name: this.state.name,
      newName: this.state.newName,
      newRecipe: this.state.newIngredient
    };
    ajaxHelpers.updateRecipe()
    .then(function(response){
      console.log("response.data", response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this));
  },

  nameInput: function(e){
    this.setState({
      name: e.target.value
    })
  },
  recipeInput: function(e){
    this.setState({
      Ingredient: e.target.value
    })
  },
  newNameInput: function(e){
    this.setState({
      newName: e.target.value
    })
  },
  newRecipeInput: function(e){
    this.setState({
      newIngredient: e.target.value
    })
  },

  getAppropriateFormComponent: function() {
    switch (this.state.radioVal) {
      case 'see-all recipes':
        console.log('see-all case');
        return (
          <GetRecipe onSubmit={this.getRecipeAjaxCall} />
        );
        break;

      case 'add-new Recipe!':

        return (
          <AddRecipe
            nameInput={this.nameInput} IngredientInput={this.IngredientInput}
            onSubmit={this.addRecipeAjaxCall}
          />
        );
        break;

      case 'find-recipe':
        console.log('find-recipe case');
        return (
          <FindRecipe
            nameInput={this.nameInput}
            onSubmit={this.findRecipeAjaxCall}
          />
        )
        break;

      case 'delete-recipe':
        console.log('delete-recipe case');
        return (
          <DeleteRecipe
            nameInput={this.nameInput}
            onSubmit={this.deleteRecipeAjaxCall}
          />
        )
        break;

      case 'update-recipe':
        console.log('update-Recipe case');
        return (
          <UpdateRecipe
            nameInput={this.nameInput}
            newNameInput={this.newNameInput}
            newIngredientInput={this.newIngredientInput}
            onSubmit={this.updateRecipeAjaxCall}
          />
        )
        break;

      default:
        return <p>Make a choice</p>
    }
  },

  render: function(){
    return(
      <div className="main-container">
        <Title/>
        <FormComponent
          updateValState={this.updateValState}
        />
        {this.getAppropriateFormComponent()}
        <ResultsComponent
          recipe={this.state.ajaxReturn}
        />
      </div>
    )
  }
});

export default App;
