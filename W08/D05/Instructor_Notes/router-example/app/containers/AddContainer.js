import React, { PropTypes } from 'react';
import Add from '../components/Add';
import ajaxHelpers from '../utils/ajaxHelpers';

const AddContainer = React.createClass({
  getInitialState: function(){
    return {
      name: '',
      email: ''
    }
  },
  handleOnChangeName: function(e){
    this.setState({
      name: e.target.value
    })
  },
  handleOnChangeEmail: function(e){
    this.setState({
      email: e.target.value
    })
  },
  handleSubmitContact: function(e){
    /* this whole funciton implicitly runs after it's mounted */
    e.preventDefault();
    this.setState({
      name: this.state.name,
      email: this.state.email
    });

    const contact = {
      name: this.state.name,
      email: this.state.email
    };

    // TODO add catch
    ajaxHelpers.addContact(contact)
    .then(function(response){
      //set state?
      console.log(response);
    });

  },
  render: function() {
    return (
      <Add
        onChangeName={this.handleOnChangeName}
        onChangeEmail={this.handleOnChangeEmail}
        onSubmitContact={this.handleSubmitContact}
        />
    );
  }
})

export default AddContainer;
