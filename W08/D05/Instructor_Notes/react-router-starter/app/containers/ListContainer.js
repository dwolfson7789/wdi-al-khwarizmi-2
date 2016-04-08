import React from 'react';
import _ from 'lodash';
import List from '../components/List';
import ajaxHelpers from '../utils/ajaxHelpers';

const ListContainer = React.createClass({
  getInitialState: function(){
    return {
      searchTerm: '',
      isLoading: true,
      tacos: []
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
    ajaxHelpers.getTacos()
    // TODO add catch
    .then(function(response){
        console.log("console.log", response.data.tacos);
        this.setState({
          tacos: response.data.tacos
        });
    }.bind(this));
  },
  render: function() {
    // do some quick data marshalling. this can be better.

    /*  finish the list view. */
    const tacoListElements = [];
    for(const taco of this.state.tacos){
      for(const key in taco){
        tacoListElements.push(<li key={taco[key]}> {taco[key]} </li>);
      }
    }


    return (
      <List
        tacos={tacoListElements}
        searchTerm={this.state.searchTerm}
        onUpdateSearch={this.onUpdateSearch}
      />
    );
  }

});

export default ListContainer;
