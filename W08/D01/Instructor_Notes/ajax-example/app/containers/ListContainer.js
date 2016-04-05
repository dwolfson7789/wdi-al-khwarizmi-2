import React from 'react';
import List from '../components/List';
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
    ajaxHelpers.getContacts()
    // TODO add catch
    .then(function(response){
        console.log(response.data);
        this.setState({
          contactList: response.data
        });
    }.bind(this));

  },
  render: function() {
    return (
      <List
        contacts={this.state.contactList}
        searchTerm={this.state.searchTerm}
        onUpdateSearch={this.onUpdateSearch}
      />
    );
  }

});

export default ListContainer;
