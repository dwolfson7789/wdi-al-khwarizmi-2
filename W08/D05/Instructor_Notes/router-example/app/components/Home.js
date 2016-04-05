import React from 'react';
import List from './List';
import ListContainer from '../containers/ListContainer';
import AddContainer from '../containers/AddContainer';

const Home = React.createClass({
  
  render: function() {
    return (
      <div>
        <div className="title">{this.props.children}</div>
        <ListContainer />
        <AddContainer/>
      </div>
    );
  }
});

export default Home;
