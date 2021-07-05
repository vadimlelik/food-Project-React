import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
  const { strMel, idMeal, strMealThumb } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMel} />
        <span className="card-title">{strMel}</span>
      </div>
      <div className="card-content"></div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          {' '}
          Watch racipe
        </Link>
      </div>
    </div>
  );
};

export default Meal;
