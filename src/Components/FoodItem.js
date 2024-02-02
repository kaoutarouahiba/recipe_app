import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodItem = ({ data }) => {
  let navigate = useNavigate();

  return (
    <>
      <div className="main">
        {data ? (
          data.map(item => (
            <div className="card" key={item.idMeal} onClick={() => navigate(`/recipe/${item.idMeal}`)}>
              <img src={item.strMealThumb} alt={item.strMeal} />
              <h3>{item.strMeal}</h3>
            </div>
          ))
        ) : (
          "Not Found"
        )}
      </div>
    </>
  );
};

export default FoodItem;
