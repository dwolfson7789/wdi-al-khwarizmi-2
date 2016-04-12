import React from 'react';
//search component//

const FindRecipe = React.createClass({

  handleName: function(e){
    this.props.nameInput(e);
  },

  render: function() {
    return(
      <div>
        <h2>Find Contact: </h2>
        <label>Name:</label>
        <input onChange={this.handleName}/>
        <hr></hr>
        <button onClick={this.props.onSubmit}>Find</button>
      </div>
    );
  }
});

export default FindRecipe;
