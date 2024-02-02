import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import FoodList from './Components/FoodList';
import RecipeDetail from './Components/RecipeDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FoodList />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
    </Routes>
  );
}

export default App;