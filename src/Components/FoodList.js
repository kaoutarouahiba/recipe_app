import React, { useState, useEffect } from 'react';
import FoodItem from './FoodItem';
import AlphabetIndex from './AlphabetIndex';

const FoodList = () => {
  const [search, setSearch] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [foodItems, setFoodItems] = useState('');
  const [apiUrl, setApiUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a');

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setFoodItems(data.meals);
        setShowResults(true);
      });
  }, [apiUrl]);

  const searchFood = () => {
    setApiUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };

  const setIndex = (letter) => {
    setApiUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
  };

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Explore Food Recipes</h1>
          <h4>Discover delicious recipes from around the world. Find your favorite meals!</h4>
        </div>
        <div className="searchBox">
          <input type="search" className="search-bar" onChange={e => setSearch(e.target.value)} onKeyPress={searchFood} />
        </div>
        <div className="container">
          {showResults ? <FoodItem data={foodItems} /> : "Not Found"}
        </div>
        <div className="indexContainer">
          <AlphabetIndex alphaIndex={alpha => setIndex(alpha)} />
        </div>
      </div>
    </>
  );
};

export default FoodList;