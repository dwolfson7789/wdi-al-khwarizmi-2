import React, { PropTypes } from 'react';
import Edit from '../components/Edit';
import ajaxHelpers from '../utils/ajaxHelpers';

// handle edit/delete submit
const EditContainer= React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      name: '',
      toppings: []
    }
  },
  render () {
    return (
      <Edit />
    )
  }
});

export default EditContainer;
