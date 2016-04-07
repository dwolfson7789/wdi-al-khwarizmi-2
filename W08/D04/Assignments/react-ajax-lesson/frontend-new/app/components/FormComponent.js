import React from 'react';

const FormComponent = React.createClass({
  render: function(){
    return(
      <div>
        <h3 className="title-box">FormComponent</h3>
        <input
          type="radio" name="chosen-radio"
          className="contacts-radios" value="see-all"
          onChange={this.props.updateValState}
        /> See All Contacts
        <br />

        <input
          type="radio" name="chosen-radio"
          className="contacts-radios" value="add-new"
          onChange={this.props.updateValState}
        /> Add New Contact
        <br />

          <input
            type="radio" name="chosen-radio"
            className="contacts-radios" value="delete-contact"
            onChange={this.props.updateValState}
          /> Delete Contact
          <br />

        <hr></hr>
      </div>
    )

  }
});

export default FormComponent;
