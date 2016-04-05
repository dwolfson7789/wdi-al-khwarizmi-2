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
    // do some quick data marshalling
    const contactList = this.state.contactList.map((value) =>{
      // TODO make this real
      return <li key={value._id}>{value._id}</li>;
    });
    return (
      <List
        contacts={contactList}
        searchTerm={this.state.searchTerm}
        onUpdateSearch={this.onUpdateSearch}
      />
    );
  }

});

export default ListContainer;
