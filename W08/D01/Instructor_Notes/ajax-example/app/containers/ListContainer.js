import React from 'react';
import List from '../components/List';
import axios from 'axios';
import ajaxHelpers from '../utils/ajaxHelpers';


const ListContainer = React.createClass({
  getInitialState: function(){
    return {
      searchTerm: '',
      isLoading: true,
      contactList: []
    }
  },
  onUpdateSearch: function(e){
    console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    });
  },
  componentDidMount: function(){
    // runs after ui renders
    axios.get('http://localhost:3000/contacts')
    .then(function(response){
      console.log("Did Mount", response);
      console.log(this);
    }.bind(this))
    .catch(function(err){
      // good practice to add to promise chains
      console.warn('Error in ');
    })

  },
  render: function() {
    const placeHolder = [
      "syed",
      "drake",
      "beyonce"
    ];
    return (
      <List
        contacts={placeHolder}
        searchTerm={this.state.searchTerm}
        onUpdateSearch={this.onUpdateSearch}
      />
    );
  }

});

export default ListContainer;
