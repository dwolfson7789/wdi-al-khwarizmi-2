import React from 'react';
import Home from './Home';
import Title from './Title';

const Main  = React.createClass({

  render: function() {
    return (
      <div className="main-component">
        <Home>
          <Title name="contactr"/>
        </Home>
      </div>
    );
  }

});

export default Main;
