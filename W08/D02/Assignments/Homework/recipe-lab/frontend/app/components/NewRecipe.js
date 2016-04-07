import React from 'react';
import axios from 'axios';

const NewRecipe = React.createClass({
    getInitialState: function() {
      return {
        recipeAdded: false,
        ajaxReturn: [],
        newName: '',
        newAuthor: '',
        newDifficulty: '',
        newTime: '',
        newIngredients: [],
        newDescription: ''
      }
    },
    getAddData: function() {
      var newIngredientsArray = document.getElementById('ingredients-entry').value;
      this.setState({
        newName: document.getElementById('name-entry').value,
        newAuthor: document.getElementById('author-entry').value,
        newDifficulty: document.getElementById('difficulty-entry').value,
        newTime: document.getElementById('time-entry').value,
        newIngredients: newIngredientsArray.split(/[ ,]+/),
        newDescription:document.getElementById('description-entry').value
      })
    },
    doAdd: function() {
      var data = {
        name: 'name'
      };
      axios.post('http://localhost:3000/new', data)
      .then(function(response) {
        console.log("Response.data", response.data);
        this.setState({
          recipeAdded: true,
          ajaxReturn: response.data
        });
      }.bind(this))
      .catch(function(err) {
        console.warn("Error");
        return err;
      })
    },
    render: function() {
      return(
        <div>
          <h3>Add a new recipe</h3>
          <form>
            <label>Name:&nbsp;
              <input type="text" placeholder="i.e. Hamburger" id="name-entry" onChange={this.getAddData}></input>
            </label>
            <br /><br />
            <label>Author:&nbsp;
              <input type="text" placeholder="" id="author-entry" onChange={this.getAddData}></input>
            </label>
            <br /><br />
            <label>Difficulty:&nbsp;
              <input type="text" placeholder="" id="difficulty-entry" onChange={this.getAddData}></input>
            </label>
            <br /><br />
            <label>Time:&nbsp;
              <input type="text" placeholder="" id="time-entry" onChange={this.getAddData}></input>
            </label>
            <br /><br />
            <label>Ingredients (separate with commas):&nbsp;
              <input type="text" placeholder="i.e. Eggs, Cheese, Lettuce" id="ingredients-entry" onChange={this.getAddData}></input>
            </label>
            <br /><br />
            <label>Description:&nbsp;
              <input type="text" placeholder="" id="description-entry" onChange={this.getAddData}></input>
            </label>
            <br /><br />
            <button type="button" onClick={this.doAdd}>Add</button>
          </form>
          <br />
          <hr />
        </div>
      )
    }
});

export default NewRecipe;
