import React from 'react';
import ListContainer from '../containers/ListContainer'
const Home = React.createClass({
  render: function(){
    return (
      <div>
        <div>{this.props.children}</div>
        <ListContainer />
      </div>
    );
  }
})

export default Home;
