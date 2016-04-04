// stateless functional component
import React, {PropTypes} from 'react'

function RestaurantDetailsWrapper (props){
  return (
    <div>
      <p>{props.header}</p>
      {props.children}
    </div>

  )
}

export default RestaurantDetailsWrapper
