import React from 'react';

function Add(props){
  return (
    <div className="">
      <p>add a taco</p>
      <div className="">
        <form onSubmit={props.onSubmitContact}>
          <div className="">
            <input
              className=""
              placeholder="enter name"
              onChange={props.onChangeName}
              value={props.username}
              type="text" />
            <input
              className=""
              placeholder="enter email"
              onChange={props.onChangeEmail}
              value={props.username}
              type="text" />
          </div>
          <div className="">
            <button
              className=""
              type="submit">
                Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* TODO add prop types! */

export default Add
