import React from 'react';

const TweetsComponent = React.createClass({
  render: function(){
    return(
      <div>
        <h3 className="title-box">TweetsComponent</h3>
        <input
          type="radio"
          className="contacts-radios"
        /> See all contacts
        <br /><br />
        <button type="button" className="goButton" onClick={this.props.ajaxFxn}>Go!</button>
        <hr></hr>
      </div>
    )

  }
});
export default TweetsComponent;
