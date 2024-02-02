import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const [recipeDetail, setRecipeDetail] = useState(null);
  const { recipeId } = useParams();

  useEffect(() => {
    if (recipeId) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then(res => res.json())
        .then(data => setRecipeDetail(data.meals[0]));
    }
  }, [recipeId]);

  return (
    <>
      {recipeDetail ? (
        <div className="content">
          <img src={recipeDetail.strMealThumb} alt={recipeDetail.strMeal} />
          <div className="inner-content">
            <h1>{recipeDetail.strMeal}</h1>
            <h2>{recipeDetail.strArea} Cuisine</h2>
            <h3>Category: {recipeDetail.strCategory}</h3>
          </div>
          <div className="recipe-details">
            <div className="ingredients">
              <h2>Ingredients</h2><br />
              <h4>{recipeDetail.strIngredient1}: {recipeDetail.strMeasure1}</h4>
              <h4>{recipeDetail.strIngredient2}: {recipeDetail.strMeasure2}</h4>
              <h4>{recipeDetail.strIngredient3}: {recipeDetail.strMeasure3}</h4>
              <h4>{recipeDetail.strIngredient4}: {recipeDetail.strMeasure4}</h4>
              <h4>{recipeDetail.strIngredient5}: {recipeDetail.strMeasure5}</h4>
              <h4>{recipeDetail.strIngredient6}: {recipeDetail.strMeasure6}</h4>
              <h4>{recipeDetail.strIngredient7}: {recipeDetail.strMeasure7}</h4>
              <h4>{recipeDetail.strIngredient8}: {recipeDetail.strMeasure8}</h4>
             
            </div>
            <div className="instructions">
              <h2>Instructions</h2><br />
              <p>{recipeDetail.strInstructions}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RecipeDetail;