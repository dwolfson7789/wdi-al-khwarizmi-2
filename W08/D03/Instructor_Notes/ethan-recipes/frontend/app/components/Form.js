import React from 'react';

const Form = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.props.onSubmitRecipe}>
        <input type="text"
               name="recipeName"
               placeholder="(Recipe name...)"
               onChange={this.props.onUpdateRecipe}></input>
        <input type="text"
               name="recipeAuthor"
               placeholder="(Recipe author...)"
               onChange={this.props.onUpdateRecipe}></input>
        <br />
        <select name="recipeDifficulty" onChange={this.props.onUpdateRecipe}>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <input type="number"
               name="recipeTime"
               placeholder="(Time...)"
               onChange={this.props.onUpdateRecipe}></input>
{/* INPUT FOR INGREDIENTS HERE */}
{/* INPUT FOR INSTRUCTIONS HERE */}
        <button type="submit">Submit new recipe</button>
      </form>
    );
  }
});

export default Form;
