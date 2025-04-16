import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import backupImage from './assets/backupImage.jpg'
import defaultprofile from './assets/defaultprofile.png'

function Home() {
    const [recipes, setRecipes] = useState([]);
  
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
            const { idMeal, strMeal, strMealThumb, strInstructions, strCategory, strArea } = recipe;
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
                <button onClick={() => handleClick(recipe)}>Favorite</button>
              </div>
    );
  })
}
</div>
</>

    );
  
}
  
  export default Home;
