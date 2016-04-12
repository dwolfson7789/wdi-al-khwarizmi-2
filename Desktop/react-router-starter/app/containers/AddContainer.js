import React, { PropTypes } from 'react';
import Add from '../components/Add';
import ajaxHelpers from '../utils/ajaxHelpers';

const AddContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      name: '',
      toppings: []
    }
  },
  handleOnChangeName: function(e){
    this.setState({
      name: e.target.value
    })
  },
  handleOnChangeToppings: function(e){
    /* hmm.. how do we handle this? */
  },
  handleSubmitContact: function(e){
    /* this whole funciton implicitly runs after it's mounted */
    e.preventDefault();
    this.setState({
      name: this.state.name,
      toppings: this.state.toppings // make sure this is an array
    });

    const contact = {
      name: this.state.name,
      toppings: this.state.toppings // make sure this is an array
    };

    ajaxHelpers.addTaco(contact)
    .then(function(response){
      //make a post request
      console.log(response);
    });

  },
  render: function() {
    return (
      <Add
        onChangeName={this.handleOnChangeName}
        onChangeToppings={this.handleOnChangeToppings}
        onSubmitTaco={this.handleSubmitTaco}
        />
    );
  }
})

export default AddContainer;
