import React from 'react';
import List from './List';
import {Link} from 'react-router';


const Home = React.createClass({

  render: function() {
    return (
      <div>
        <h1>taco time!</h1>
        <Link to='/listTacos'>
          <button type='button'>show me the tacos!</button>
        </Link>

      </div>
    );
  }
});

export default Home;
