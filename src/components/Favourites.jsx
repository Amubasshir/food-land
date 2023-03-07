import React from 'react';
import Recipe from './Recipe';

const Favourites = ({ savedItems }) => {
  return (
    <div className="favourite-section">
      {savedItems.length > 0 && (
        <p>
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
