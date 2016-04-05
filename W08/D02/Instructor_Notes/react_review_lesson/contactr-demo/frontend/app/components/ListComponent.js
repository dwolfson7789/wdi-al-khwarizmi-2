import React from 'react';

const ListComponent = React.createClass({
  render: function(){
    return(
      <div>
        <h3 className="title-box">ListComponent</h3>
        <ul>
          {
            this.props.contacts.map( (contact, index) => {
              return <li key={index}>{contact.name}, {contact.email}</li>;
            })
          }
        </ul>
      </div>
    )
  }
});

export default ListComponent;
