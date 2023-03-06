import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  return (
    <div
      className="recipe w-80 overflow-hidden bg-white/75 rounded-2xl shadow-md p-6 shadow-gray-400 border-2 border-white flex flex-col gap-5
     "
    >
      <div className="img h-40 overflow-hidden flex justify-center items-center rounded-lg">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="block w-full  "
        />
      </div>
      <div className="texts">
        <span className="publisher text-xs uppercase text-orange-300 font-semibold tracking-widest">
          {recipe.publisher}
        </span>
        <h2 className="title text-xl font-semibold tracking-wide truncate">
          {recipe.title}
        </h2>
        <Link
          to="/"
          className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-3 px-8 rounded-lg text-sm font-medium tracking-wider inline-block mt-4 shadow-sm shadow-gray-100 hover:shadow-md hover:shadow-gray-300 duration-300 "
        >
          View recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
