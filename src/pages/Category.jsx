import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCatigory } from '../api';
import { Preloader } from '../components/Preloader';
import MealList from '../components/MealList';
import { useHistory } from 'react-router-dom';

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory()

  useEffect(() => {
    getFilteredCatigory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <>
  <button onClick={goBack} className='btn'> Go back</button>
  {!meals.length ? <Preloader /> : <MealList meals={meals} />}
  </>;
};

export default Category;
