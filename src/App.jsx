import { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Favourites from './components/Favourites';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const inputField = useRef(null);
  const [recipes, setRecipes] = useState('');
  const [loading, setLoading] = useState('false');
  const [error, setError] = useState('');

  const searchHandler = (e) => {
    e.preventDefault();
    getData(searchQuery);

    setSearchQuery('');
    inputField.current.blur();
  };

  const getData = async (searchQuery) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${searchQuery}`
      );
      if (!res.ok)
        throw new Error('No recipe found, please search another one.');
      const data = await res.json();
      // console.log(data);
      setRecipes(data.recipes);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="App min-h-screen bg-[url('https://images.unsplash.com/photo-1637325258040-d2f09636ecf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')] bg-no-repeat bg-cover text-gray-600 text-lg">
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          inputField={inputField}
          searchHandler={searchHandler}
        />
        <Routes>
          <Route
            path="/"
            element={<Home error={error} loading={loading} recipes={recipes} />}
          ></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
