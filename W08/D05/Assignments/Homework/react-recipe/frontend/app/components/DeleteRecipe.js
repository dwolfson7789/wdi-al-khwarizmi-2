import React from 'react';
//delet component//

const DeleteRecipe = React.createClass({
  handleName: function(e){
    this.props.nameInput(e);
  },

  render: function() {
    return(
      <div>
        <h2>Delete Food: </h2>
        <label>Name:</label>
        <input onChange={this.handleName}/>
        <hr></hr>
        <button onClick={this.props.onSubmit}>Remove!</button>
      </div>
    );
  }
});

export default DeleteRecipe;
