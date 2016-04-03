import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import RestaurantDetails from './RestaurantDetails';

function puke (object){
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props){
  console.log(props)
  return props.isLoading === true
    ? <p> loading </p>
    : <div>
      <div> <RestaurantDetails restaurant={props.playersInfo[0]}/>  </div>
      <div> <RestaurantDetails restaurant={props.playersInfo[1]}/> </div>
      <button type='button' className='' onClick={props.onInitiateBattle}>
        initiate battle!
      </button>
        <Link to='/playerOne'>
          <button type='button' className=''>
            reselect restaurants!
          </button>
        </Link>
      </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}


export default ConfirmBattle;
