import React from 'react';

const Searched = React.createClass({
  render: function() {
    if (this.props.active && this.props.search._id) {
    var recipe = this.props.search;
      return (
        <div className="recipe">
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
    } else {
      return (
        <div>
          <p>Search for a recipe above.</p>
        </div>
      )
    }
  }
});

export default Searched;
