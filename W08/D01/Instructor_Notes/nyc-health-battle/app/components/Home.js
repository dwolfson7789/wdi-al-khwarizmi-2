import React from 'react';
import {Link} from 'react-router';

const Home = React.createClass({
  render: function(){
    return(
      <div className=''>
        <h1>Resturant Battle</h1>
        <p className=''>fight to the filthiest</p>
        <Link to='/playerOne'>
          <button type='button'>get started</button>
        </Link>
      </div>
    );
  }
});

export default Home;
