import React from 'react';
import { Link } from 'react-router-dom';
import Pan from './Pan';

const NotFound = () => {
  return (
    <div className="container mx-auto py-8 flex flex-col item center gap-5">
      <h2 className="text-2xl lg:text-4xl text-center mt-10 font-semibold text-red-500 leading-normal">
        Page not found
      </h2>
      <Link
        to="/"
        className=" container mx-auto  bg-gradient-to-br from-orange-400 to bg-orange-600 text-white text-center p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wide mt-10  shadow-md shadow-gray-200 hover:shadow-gray-300 duration-300 w-40 "
      >
        Go home
      </Link>
      <Pan />
    </div>
  );
};

export default NotFound;
