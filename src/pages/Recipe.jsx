import React,{useEffect, useState}from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';
import {Preloader} from '../components/Preloader'



const Recipe = () => {
    const [recipe ,setRecipe]= useState([]);
    const {goBack} = useHistory()

    const { id } = useParams()

    useEffect(() => { 
        getMealById(id).then(data =>setRecipe(data.meals[0]))
    }, [id]);

    return (
        <>
        <button onClick={goBack} className='btn'>Go Back</button>
        {!recipe.idMeal ? <Preloader/> : (
            <div className="recipe">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h2>{recipe.strMeal}</h2>
                <h6>{recipe.strCategory}</h6>
                {recipe.strArea ? <h6>{recipe.strArea}</h6> :null}
                <p>{recipe.strInstructions}</p>
            </div>
        )}
        </>
    );
}

export default Recipe;
