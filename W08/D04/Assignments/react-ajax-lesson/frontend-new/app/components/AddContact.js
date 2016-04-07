import React from 'react';

const AddContact = React.createClass({
  handleName: function(e){
    this.props.nameInput(e);
  },
  handleEmail: function(e){
    this.props.emailInput(e);
  },

  render: function() {
    return(
      <div>
        <p>Add Contact: </p>
        <label>Name:</label>
        <input onChange={this.handleName}/>
        <br />
        <label>Email:</label>
        <input onChange={this.handleEmail}/>
        <br />
        <button onClick={this.props.onSubmit}>Add</button>
        <hr></hr>
      </div>
    );
  }
});

export default AddContact;
