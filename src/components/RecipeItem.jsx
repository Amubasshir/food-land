import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const RecipeItem = ({ favouriteHandler }) => {
  const { id } = useParams();
  const { data: recipe, loading, error } = useFetch(id);
  const durationCalc = (duration) => {
    if (!duration) return 0;
    if (!String(duration).includes('.')) {
      return duration + 'h';
    }

    if (String(duration).includes('.')) {
      return String(duration).replace('.', 'h') + 'min';
    }
  };

  return (
    <div className="recipe-item-section container mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="left">
        <span className="publisher">{recipe?.publisher}</span>
        <h2 className="title">{recipe?.title}</h2>
        <div className="servings-cooking-time">
          <div className="servings">Serve for: {recipe?.servings} people</div>
          <div className="cooking-time">
            {recipe?.cooking_time < 60
              ? String(recipe?.cooking_time) + 'min'
              : durationCalc(recipe?.cooking_time / 60)}
          </div>
        </div>
        <div className="btns flex gap-5">
          <button
            onClick={() => favouriteHandler(recipe.id)}
            className="bg-gradient-to-br from-orange-400 to-orange-600 text-sky-50 p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wide mt-2 inline-block shadow-md shadow-orange-200 hover:shadow-orange-300 duration-300"
          >
            + Save as favourite
          </button>
          <a
            href={recipe?.source_url}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-br from-orange-400 to bg-orange-600 text-white p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wide mt-2 inline-block shadow-md shadow-orange-200 hover:shadow-orange-300 duration-300"
          >
            Get Direction
          </a>
          <Link
            to="/"
            className="bg-gradient-to-br from-orange-400 to bg-orange-600 text-white p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wide mt-2 inline-block shadow-md shadow-orange-200 hover:shadow-orange-300 duration-300"
          >
            Back to home
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="img">
          <img src={recipe?.image_url} alt={recipe?.title} />
        </div>
        <div className="ingredient">
          <span className="ingredient-title">Ingredients</span>
          <ul>
            {recipe?.ingredients?.map((ing, i) => (
              <li key={i}>
                ▶ {ing.quantity}
                {ing.unit}
                {ing.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
