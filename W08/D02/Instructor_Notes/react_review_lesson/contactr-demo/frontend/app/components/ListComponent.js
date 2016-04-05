import React from 'react';

const ListComponent = React.createClass({
  render: function(){
    return(
      <div>
        <h3 className="title-box">ListComponent</h3>
        <ul>
          <li>This is where our list will go</li>
        </ul>
      </div>
    )
  }
});

export default ListComponent;

// {
//   this.props.contacts.map( (contact, index) => {
//     return <li key={index}>{contact.name}, {contact.email}</li>;
//   })
// }
