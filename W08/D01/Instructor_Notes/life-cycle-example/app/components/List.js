import React from 'react';

function List(props){

  console.log(props.searchTerm);
  const contactList = props.contacts.map((contactName) => {
    return <li key={contactName}>{contactName}</li>;
  });

  return (
      <div>
        <input
          type="text"
          placeholder="search"
          onChange={props.onUpdateSearch}
          />
        <ul>
          {contactList}
        </ul>
      </div>
    );
}

export default List;
