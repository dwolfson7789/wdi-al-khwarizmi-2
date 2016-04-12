import React from 'react';
//update ingredient//

const UpdateRecipe = React.createClass({
  handleName: function(e){
    this.props.nameInput(e);
  },
  handleNewName: function(e){
    this.props.newNameInput(e);
  },
  handleNewIngredient: function(e){
    this.props.newIngredientInput(e);
  },

  render: function() {
    return(
      <div>

        <p>Update Recipe: </p>
        <label>Recipe to update:</label>
        <input onChange={this.handleName}/>
    

        <label>New Name:</label>
        <input onChange={this.handleNewName}/>
        
        <label>New Ingredient:</label>
        <input onChange={this.handleNewIngredient}/>

        
        <button onClick={this.props.onSubmit}>Update</button>
        <hr></hr>
        
      </div>
    );
  }
});

export default UpdateRecipe;
