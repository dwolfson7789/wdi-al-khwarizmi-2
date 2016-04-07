import React from 'react';
import axios from 'axios';


const recipeStyle = {
  marginBottom: '20px'
};

const ListAll = React.createClass({
  getInitialState: function() {
    return {
      ajaxReturn: []
    };
  },
  componentDidMount: function() {
    console.log("Get all recipes.");
    axios.get('http://localhost:3000/recipes')
    .then(function(response) {
      console.log("Response.data:", response.data);
      this.setState({
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
        <h3 className="list-all">All Recipes</h3>
          {
            this.state.ajaxReturn.map( (recipe, index) => {
              return (
                <div key={index} className="recipe" style={recipeStyle}>
                  <div><span className="bold">Name:</span> {recipe.name}</div>
                  <div className="indent"><span className="bold">Author:</span> {recipe.author}</div>
                  <div className="indent"><span className="bold">Difficulty:</span> {recipe.difficulty}</div>
                  <div className="indent"><span className="bold">Time:</span> {recipe.time}</div>
                  <div className="indent"><span className="bold">Ingredients:</span>
                  <ul>
                  {
                    recipe.ingredients.map( (ingredient, index) => {
                      return <li>{ingredient}</li>
                    })
                  }
                  </ul>
                  </div>
                  <div className="indent"><span className="bold">Description:</span> {recipe.description}</div>
                </div>
                )
            })
          }
          {console.log(this.state.ajaxReturn)}
      </div>
    )
  }
})
export default ListAll;
