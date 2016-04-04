import React from 'react';
import List from '../components/List';

const ListContainer = React.createClass({
  getInitialState: function(){
    return {
      searchTerm: ''
    }
  },
  onUpdateSearch: function(e){
    console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    });
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
