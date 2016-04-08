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
              value=""
              type="text" />
            <input
              className=""
              placeholder="enter toppings"
              onChange={props.onChangeToppings}
              value=""
              type="text" />
          </div>
          <div className="">
            <button
              className=""
              type="submit">
                Add a Taco
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* TODO add prop types! */

export default Add
