import React from 'react';

function List(props){

  const contactList = props.contacts.map((contactName) => {
    return <li key={contactName.id}>{contactName}</li>;
  });

  return (
      <div>
        <ul>
          {contactList}
        </ul>
      </div>
    );
}

export default List;
