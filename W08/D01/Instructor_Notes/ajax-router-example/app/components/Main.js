import React from 'react';
import Home from './Home';
import Title from './Title';


const Main = React.createClass({
  render: function(){
    return(
      <div className="main-container">
        <Home>
          <Title/>
        </Home>
      </div>
    )
  }
});

export default Main;
