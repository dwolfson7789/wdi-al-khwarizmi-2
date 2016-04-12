import React from 'react';

function ResultsComponent(){
  return(
    <div>
      <h3 className="title-box">ResultsComponent</h3>
      <ul>
      <li>
        {
          props.contacts.map( (recipe, index) => {
            return <li key={index}>{recipe.name}, {recipe.ingredients}</li>;
          })
        }
        </li>
      </ul>
    </div>
  )
}

export default ResultsComponent;
