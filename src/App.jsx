
import { Routes, Route, Link } from 'react-router-dom'
import Home from './home'
import Login from './login';
import './App.css'
import { useState } from 'react';
import MyFavorites from './MyFavorites';
import Details from './details';

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (recipe) => {
    const exists = favorites.find((r) => r.idMeal === recipe.idMeal);
    if (exists) {
      setFavorites(favorites.filter((r) => r.idMeal !== recipe.idMeal));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />}
      />
      <Route
        path="/favorites"
        element={<MyFavorites favorites={favorites} toggleFavorite={toggleFavorite} />}
      />

      <Route path="/recipe/:id" element={<Details />} />
    </Routes>
  );
}


export default App
