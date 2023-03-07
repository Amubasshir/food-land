import React from 'react';
import Recipe from './Recipe';

const Favourites = ({ savedItems }) => {
  return (
    <div className="favourite-section">
      {savedItems.length === 0 && (
        <p className="text-2xl lg:text-4xl font-semibold text-red-600 text-center pt-10">
          Your current favourite list is empty. Please add some to favourite .
        </p>
      )}

      <div className="favourite-items-container container mx-auto py-10 flex flex-wrap gap-10 justify-center ">
        {savedItems.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
