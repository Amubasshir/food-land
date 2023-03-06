import { Route, Routes } from 'react-router-dom';
import './App.css';
import Favourites from './components/Favourites';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <div className="App min-h-screen bg-[url('https://images.unsplash.com/photo-1637325258040-d2f09636ecf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')] bg-no-repeat bg-cover text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
