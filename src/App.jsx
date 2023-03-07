import { useEffect, useRef, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Favourites from './components/Favourites';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import RecipeItem from './components/RecipeItem';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const inputField = useRef(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [savedItems, setSavedItems] = useState(() => {
    const localData = localStorage.getItem('recipes');
    return localData ? JSON.parse(localData) : [];
  });
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    getData(searchQuery);

    setSearchQuery('');
    inputField.current.blur();
    setRecipes([]);
  };

  const getData = async (searchQuery) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}`
      );
      if (!res.ok) throw new Error('something went wrong...');
      const data = await res.json();
      if (data.results === 0) throw new Error('No recipe found');
      setRecipes(data?.data?.recipes);

      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const checkLocalData = (data) => {
    const localData = JSON.parse(localStorage.getItem('recipes'));
    const existedData = localData.some((item) => item.id === data.id);
    if (!existedData) {
      setSavedItems([...savedItems, data]);
    } else {
      const filteredData = localData.filter((item) => item.id !== data.id);
      setSavedItems(filteredData);
    }
  };

  const favouriteHandler = (id) => {
    fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => checkLocalData(data.data.recipe));

    navigate('/favourites');
  };

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(savedItems));
  }, [savedItems]);

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
            element={<Home loading={loading} error={error} recipes={recipes} />}
          ></Route>
          <Route
            path="/favourites"
            element={<Favourites savedItems={savedItems} />}
          ></Route>
          <Route
            path="/recipe-item/:id"
            element={<RecipeItem favouriteHandler={favouriteHandler} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
