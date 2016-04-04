import React from 'react';
import List from '../components/List';

const ListContainer = React.createClass({
  onUpdateSearch: function(e){
    console.log(e.target.value);
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
        onUpdateSearch={this.onUpdateSearch}
      />
    );
  }

});

export default ListContainer;
