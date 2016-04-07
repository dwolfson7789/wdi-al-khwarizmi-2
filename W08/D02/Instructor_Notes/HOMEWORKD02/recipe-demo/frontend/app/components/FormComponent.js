import React from 'react';

const FormComponent = React.createClass({
  render: function(){

    // onclick last

    return(
      <div>
        <h3 className="title-box">FormComponent</h3>
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

export default FormComponent;
