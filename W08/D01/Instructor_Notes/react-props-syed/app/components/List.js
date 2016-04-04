import React from 'react';

function List(props){
  const contactList = props.tacos.map((contactName) => {
    return <li key={contactName}>{contactName}</li>
  })
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
  )
}

export default List;
