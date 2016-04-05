import React from 'react';
import List from '../components/List';
/***
  as search term is updated return the search term
***/


///user input//
const ListContainer = React.createClass({
  getInitialState: function(){
    return {
      searchTerm: ''
    }
  },

  //update on search//
  onUpdateSearch: function(e){
    console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    });
  },
  render: function(){
    const placeHolder = [
      "syed",
      "drake",
      "beyonce"
    ];
    const stuff = function(search,array) {
         var newArray = [];
         for (var i = 0; i < array.length; i++) {
           if (array[i].indexOf(search) > -1) {
             newArray.push(array[i]);
           }
         }
         return newArray;
       }
    return (
      <List
        tacos={stuff(this.state.searchTerm, placeHolder)}
        searchTerm={this.state.searchTerm}
        onUpdateSearch={this.onUpdateSearch}
        />
    );
  }
});
export default ListContainer;
