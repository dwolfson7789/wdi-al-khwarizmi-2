import React from 'react';
import Form from '../components/Form';
import List from '../components/List';

const Main = React.createClass({
  getInitialState: function() {
    return {
<<<<<<< HEAD
      recipe: {
        recipeName: "",
        recipeAuthor: "",
        recipeDifficulty: "",
        recipeTime: null,
        recipeIngredients: [],
        recipeInstructions: ""
      }
    }
  },
  handleUpdateRecipe: function(e) {
    // let name  = e.target.name,
    //     value = e.target.value;

    this.setState({
      [e.target.name] : e.target.value
    });

      // switch (name) {
      // case "recipeName":
      //   this.setState({
      //     recipeName: value
      //   });
      //   break;
      // case "recipeAuthor":
      //   this.setState({
      //     recipeAuthor: value
      //   });
      //   break;
      // case "recipeDifficulty":
      //   this.setState({
      //     recipeDifficulty: value
      //   });
      //   break;
      // case "recipeTime":
      //   this.setState({
      //     recipeTime: value
      //   });
      //   break;
      // case "recipeIngredients":
      //   //stuff goes here!
      //   break;
      // case "recipeInstructions":
      //   //stuff goes here!
      //   break;
    // }
  },
  handleSubmitRecipe: function(e) {
    e.preventDefault();
    console.log(this.state);
=======
      recipeName: "",
      recipeAuthor: "",
      recipeDifficulty: "",
      recipeTime: null,
      recipeIngredients: [],
      recipeInstructions: ""
    }
  },
  handleUpdateRecipe: function(e) {
    let name  = e.target.name,
        value = e.target.value;

    switch (name) {
      case "recipeName":
        this.setState({
          recipeName: value
        });
        break;
      case "recipeAuthor":
        this.setState({
          recipeAuthor: value
        });
        break;
      case "recipeDifficulty":
        this.setState({
          recipeDifficulty: value
        });
        break;
      case "recipeTime":
        this.setState({
          recipeTime: value
        });
        break;
      case "recipeIngredients":
        //stuff goes here!
        break;
      case "recipeInstructions":
        //stuff goes here!
        break;
    }
  },
  handleSubmitRecipe: function(e) {
    e.preventDefault();
    console.log(e.target.value);
>>>>>>> origin/master
  },
  render: function() {
    return (
      <div>
        <List recipes={this.props.recipes}/>
<<<<<<< HEAD
        <Form currentEntry={this.state.recipe}
              onUpdateRecipe={this.handleUpdateRecipe}
=======
        <Form onUpdateRecipe={this.handleUpdateRecipe}
>>>>>>> origin/master
              onSubmitRecipe={this.handleSubmitRecipe}/>
      </div>
    );
  }
});

export default Main;
