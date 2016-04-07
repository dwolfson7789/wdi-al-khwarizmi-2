import React from 'react';

function List(props) {
    return (
      <div>
        <h3>Our Recipes</h3>
        <ul>
<<<<<<< HEAD
      
=======
          {
>>>>>>> origin/master
            props.recipes.map((recipe) => {
              return <li key={recipe._id}>
                <h4>{recipe.name}</h4>
                <h5>{recipe.author}</h5>
                <p>
                  <span>Difficulty: {recipe.difficulty}. </span>
                  <span>Time: {recipe.time} minutes</span>
                </p>
                <ul>
                  {
                    recipe.ingredients.map((ingredient) => {
                      return <li key={ingredient}>{ingredient}</li>
                    })
                  }
                </ul>
                <p>Instructions: {recipe.instructions}</p>
              </li>
            })
          }
        </ul>
      </div>
    );
};

export default List;
