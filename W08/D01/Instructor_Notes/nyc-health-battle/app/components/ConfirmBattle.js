import React from 'react';

function ConfirmBattle(props){
  return props.isLoading === true
    ? <p> loading </p>
    : <p> confirm battle! </p> 
}

export default ConfirmBattle;
