import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({
  searchQuery,
  setSearchQuery,
  searchHandler,
  inputField,
  savedItems,
}) => {
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? '#f97316' : null,
    };
  };

  return (
    <div className="navbar flex justify-between items-center container mx-auto py-7 flex-col lg:flex-row gap-5 lg:gap-0 ">
      <h2 className="logo text-2xl font-bold  italic">
        Food <span className="text-orange-500">Land</span>
      </h2>
      <form className="search-bar" onSubmit={searchHandler}>
        <input
          ref={inputField}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          placeholder="search your desire recipe..."
          required
          className="bg-white/75 p-3 px-8 lg:w-96 rounded-full outline-none shadow-sm shadow-gray-200 focus:shadow-gray-300 duration-300 "
        />
      </form>
      <ul className="menu flex gap-5 ">
        <li>
          <NavLink
            style={navActive}
            end
            to="/"
            className="text-gray-500 hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={navActive}
            to="/favourites"
            className="text-gray-500 hover:text-gray-700 duration-300"
          >
            Favourites{' '}
            <span className="favourites-count font-bold text-gray-400">
              ({savedItems.length})
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
