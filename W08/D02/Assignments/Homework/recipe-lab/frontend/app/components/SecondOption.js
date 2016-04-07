import React from 'react';
import ListAll from './ListAll';
import Search from './Search';
import NewRecipe from './NewRecipe';

const SecondOption = React.createClass({
  render: function() {
      if (this.props.divOption === 'view') {
        return(
          <ListAll />
        )
      } else if (this.props.divOption === 'search') {
        return(
          <Search />
        )
      } else if (this.props.divOption === 'new') {
        return(
          <NewRecipe />
        )
      } else {
        return(
          <div>
            <p>Select an option above.</p>
          </div>
        )
      }
  }
});

export default SecondOption;
