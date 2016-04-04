import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers';

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    // just return an object
    console.log('getInitialState');
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentWillMount: function(){
    console.log('componentWillMount');
  },
  // we will be ajaxing here:
  componentDidMount: function (){
    //runs after ui renders to the view
    const query = this.props.location.query
    // Fetch info from nyc open data thens update state.
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(restaurants){
        console.log("restaurants", restaurants); //whoo!
        // update our state to disable loading and pass our data
        this.setState({ // this keyword has been changed!
          isLoading: false,
          playersInfo: [restaurants[0][0], restaurants[1][0]] //our restaurants array
        });
      }.bind(this)); //this keyword from the outer context
  },
  componentWillReceiveProps : function(){
    // will fil out later
    console.log('componentWillRecieveProps');
  },
  componentWillUnmount: function(){
    // will fill out later
    console.log('componentWillUnmount');
  },
  handleInitiateBattle: function(){
    console.log("woo");
    this.context.router.push({
      pathname: '/results',
      state: { // neat
        playersInfo: this.state.playersInfo
      }
    })
  },
  render: function(){
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo}
      />
    )
  }
});

export default ConfirmBattleContainer;
