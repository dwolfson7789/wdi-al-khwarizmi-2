import React from 'react';

const Home = React.createClass({
  render: function(){
    return (
      <div>
        <div className="title">{this.props.children}</div>
      </div>
    );
  }
})

export default Home;
