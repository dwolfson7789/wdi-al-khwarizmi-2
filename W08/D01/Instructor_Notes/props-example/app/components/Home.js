import React from 'react';
import List from './List';

const Home = React.createClass({
  render: function() {
    const placeHolder = [
      "syed",
      "drake",
      "beyonce"
    ]
    return (
      <div>
        <div className="title">{this.props.children}</div>
        <List contacts={placeHolder}/>
      </div>
    );
  }
});

export default Home;
