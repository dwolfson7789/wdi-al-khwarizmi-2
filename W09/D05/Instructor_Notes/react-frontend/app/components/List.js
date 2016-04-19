import React from 'react';

function List(props){
  /* nice and clear */
  console.log(props);
  return (
      <div>
        <input
          type="text"
          placeholder="search"
          onChange={props.onUpdateSearch}
          />
        <ul>
          {props.tacos}
        </ul>
      </div>
    );
}

export default List;
