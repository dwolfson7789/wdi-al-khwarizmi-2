import React from 'react';

const SelectA = React.createClass({
  render: function() {
    return(
      <div>
        <form>
          <input type="radio" className="radios" name="radios" value="view">View all recipes</input><br />
          <input type="radio" className="radios" name="radios" value="search">Search</input><br />
          <input type="radio" className="radios" name="radios" value="new">Make a new recipe</input><br />
        <button type="button" className="submit_btn" onClick={this.props.radioFxn}>Go!</button>
        </form>
        <hr></hr>
      </div>
  )
  }
});

export default SelectA;
