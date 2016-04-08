import React from 'react';
import List from '../components/List';
import ajaxHelpers from '../utils/ajaxHelpers';

const ListContainer = React.createClass({
  getInitialState: function(){
    return {
      searchTerm: '',
      isLoading: true,
      tacoList: []
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
        console.log(response.data);
        this.setState({
          tacoList: response.data.tacos
        });
    }.bind(this));
  },
  render: function() {
    // do some quick data marshalling
    const tacoList = this.state.tacoList.map((taco) => {
      // TODO
      return <li key={taco}>{taco}</li>;
    });
    return (
      <List
        tacos={tacoList}
        searchTerm={this.state.searchTerm}
        onUpdateSearch={this.onUpdateSearch}
      />
    );
  }

});

export default ListContainer;
