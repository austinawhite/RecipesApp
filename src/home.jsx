import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import backupImage from './assets/backupImage.jpg'
import defaultprofile from './assets/defaultprofile.png'

function Home({favorites, toggleFavorite}) {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();
  
    const getRecipes = async () => {
      try {
        const res = await fetch("https://fsa-recipe.up.railway.app/api/recipes");
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };
  
    useEffect(() => {
      getRecipes();
    }, []);

    const isFavorited = (idMeal) => {
        return favorites?.some((fav) => fav.idMeal === idMeal);
      };
  
    return (

<>
    <div className="navbar">
        <div className="navlinks">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    <div className="nav-profile" onClick={() => navigate('/')}>
    <img
      src={defaultprofile}
      alt="Profile"
      className="profile-img"
      title="Log out"
    />
     </div>
     </div>
    

     <br />
     <br />

    <div className="homeheader">
    <h3> Browse Our Recipes </h3> 
    </div>

        <div className="cards">
        {
          recipes.map((recipe) => {
            const { idMeal, strMeal, strMealThumb, strCategory, strArea } = recipe;
            return (
              <div key={idMeal} className="card">
                <img
                  src={strMealThumb}
                  alt={strMeal}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = backupImage;}}
                  style={{
                    height: '200px',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
                <h3>{strMeal}</h3>
                <p><strong>Category:</strong> {strCategory}</p>
                <p><strong>Region:</strong> {strArea}</p>
                <button onClick={() => navigate(`/recipe/${idMeal}`)}>
  View Details
</button>
                <button onClick={() => toggleFavorite(recipe)}>
                  {isFavorited(idMeal) ? 'Unfavorite' : 'Favorite'}</button>
              </div>
    );
  })
}
</div>
</>

    );
  
}
  
  export default Home;
