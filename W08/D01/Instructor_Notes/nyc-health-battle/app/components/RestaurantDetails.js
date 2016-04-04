import React, {PropTypes} from 'react';

function RestaurantDetails(props){
  return(
    <div>
      <h1>{props.restaurant.dba}</h1>
      <li>{props.restaurant.grade}</li>
      <li>{props.restaurant.violation_description}</li>
    </div>
  )
}

export default RestaurantDetails;
