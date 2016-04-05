import React from 'react';
import List from './List';
import ListContainer from '../containers/ListContainer';

const Home = React.createClass({
  render: function() {
    return (
      <div>
        <div className="title">{this.props.children}</div>
        <ListContainer />
      </div>
    );
  }
});

export default Home;
