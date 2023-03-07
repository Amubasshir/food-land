import React from 'react';
import Pan from '../components/Pan';
import Recipe from '../components/Recipe';

const Home = ({ recipes, loading, error }) => {
  return (
    <div className="home container mx-auto py-10 flex flex-wrap gap-10 justify-center">
      {!loading && !error && recipes.length === 0 ? (
        <div>
          <p className="text-2xl lg:text-4xl font-bold text-red-500">
            Search Something To Start
          </p>
          <Pan />
        </div>
      ) : null}
      {/* bellow code doesn't work properly */}
      {loading && <p>{error ? error : 'loading...'}</p>}

      {recipes.length > 0 &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;
