import React from 'react';

const AddRecipe = React.createClass({
  handleName: function(e){
    this.props.nameInput(e);
  },
  handleIngredients: function(e){
    this.props.IngredientsInput(e);
  },

  componentPropsRecieved: function(nextProps) {
    console.log('ADD: componentPropsRecieved')
  },
  componentUnmount: function() {
    console.log('ADD: componentUnmount')
  },

  render: function() {
    return(
      <div>
        <h1>Add a Recipe: </h1>
        <label>Name:</label>
        <input onChange={this.handleName}/>
        <hr></hr>
        <label>Ingredients:</label>
        <input onChange={this.handleIngredients}/>
        <hr></hr>
        <button onClick={this.props.onSubmit}>Add Recipe</button>
        <hr></hr>
      </div>
    );
  }
});

export default AddRecipe;
