import React from 'react';
import HeaderStyles from '../styles/HeaderStyles';

const Header = React.createClass({
  render: function() {
    return (
      <header style={HeaderStyles}>
        <h1 style={HeaderStyles.h1}>Reactive Recipe Manager</h1>
        <nav>
          <ul style={HeaderStyles.ul}>
            <li><a href="#" style={HeaderStyles.a}>Recipes</a></li>
            <li><a href="#" style={HeaderStyles.a}>New Recipe</a></li>
          </ul>
        </nav>
      </header>
    );
  }
});

export default Header;
