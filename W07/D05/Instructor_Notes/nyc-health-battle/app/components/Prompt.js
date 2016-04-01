import React, {PropTypes} from 'react';

function Prompt(props){
  return (
    <div className="">
      <h1>{props.header}</h1>
      <div className="">
        <form onSubmit={props.onSubmitUser}>
          <div className="">
            <input
              className=""
              placeholder="Enter Resturant Name"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text" />
          </div>
          <div className="">
            <button
              className=""
              type="submit">
                Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}


export default Prompt;
