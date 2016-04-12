import React from 'react';

//get all recipes//

const GetRecipe = React.createClass({

  handleName: function(e){
    this.props.nameInput(e);
  },

  render: function() {
    return(
      <div>
        <p>Get All Recipes: </p>
        <br />
        <button onClick={this.props.onSubmit}>Get All!</button>
        <hr></hr>
      </div>
    );
  }
});

export default GetRecipe;
