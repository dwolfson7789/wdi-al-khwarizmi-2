import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    // just return an object
    console.log('getInitialState');
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount: function(){
    console.log('componentWillMount');
  },
  componentDidMount: function (){
    //runs after ui renders to the view
    const query = this.props.location.query
    // Fetch info from github thne update state.
    console.log('componentDidMount');
  },
  componentWillReceiveProps : function(){
    // will fil out later
    console.log('componentWillRecieveProps');
  },
  componentWillUnmount: function(){
    // will fill out later
    console.log('componentWillUnmount');
  },
  render: function(){
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersinfo={this.state.playersInfo}
      />
    )
  }
});

export default ConfirmBattleContainer;
