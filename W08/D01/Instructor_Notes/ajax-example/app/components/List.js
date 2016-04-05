import React from 'react';

function List(props){

  console.log(props.contacts);
  const contactList = props.contacts.map((value) =>{
    return <li key={value._id}>{value._id}</li>;
  });

  /*
  const contactList = props.contacts._id.map((contactName) => {
    return <li key={contactName}>{contactName}</li>;
  });
  */

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
