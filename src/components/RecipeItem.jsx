import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const RecipeItem = () => {
  const { id } = useParams();
  const { data: recipe, loading, error } = useFetch(id);
  if (recipe.recipe) {
    console.log(recipe.recipe);
  }
  return <div></div>;
};

export default RecipeItem;
