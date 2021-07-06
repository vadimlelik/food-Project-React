import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const { goBack } = useHistory();

  const { id } = useParams();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      <button onClick={goBack} className="btn">
        Go Back
      </button>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h2>{recipe.strMeal}</h2>
          <h6>{recipe.strCategory}</h6>
          {recipe.strArea ? <h6>{recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>
          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th> <th>Measugure</th>{' '}
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {recipe.strYoutube ? (
            <div className="row">
              <h5>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                allowfullscreen
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Recipe;
