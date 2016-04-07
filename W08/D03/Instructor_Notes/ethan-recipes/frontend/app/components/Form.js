import React from 'react';

const Form = React.createClass({
<<<<<<< HEAD

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
            <option value="Batshit insane">Batshit insane</option>
          </select>
          <input type="number"
                 name="recipeTime"
                 placeholder="(Time...)"
                 onChange={this.props.onUpdateRecipe}></input>
          <br />
          <label htmlFor="ingredients">Enter required ingredients, separated by commas</label>
          <input type="text"
                 name="ingredients"
                 placeholder="(Recipe ingredients...)"
                 onChange={this.props.onUpdateRecipe}></input>
          <textarea row="8"
                    cols="40"
                    name="recipeInstructions"
                    onChange={this.props.onUpdateRecipe}
                    placeholder="(Recipe instructions...)"></textarea>
          <button type="submit">Submit new recipe</button>
        </form>
=======
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
>>>>>>> origin/master
    );
  }
});

export default Form;
