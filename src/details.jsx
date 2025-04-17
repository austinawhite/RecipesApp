import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import backupImage from './assets/backupImage.jpg'
import defaultprofile from './assets/defaultprofile.png'
import { useParams } from 'react-router-dom';

function Details({ favorites, toggleFavorite }) {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchRecipe = async () => {
        try {
          const res = await fetch(`https://fsa-recipe.up.railway.app/api/recipes/${id}`);
          const data = await res.json();
          setRecipe(data);
        } catch (error) {
          console.error("Failed to fetch recipe details:", error);
        }
      };
  
      fetchRecipe();
    }, [id]);
  
    if (!recipe) return <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Loading recipe...</h2>;
  
    const {
      strMeal,
      strMealThumb,
      strInstructions,
      strCategory,
      strArea,
      ingredients,
      idMeal,
    } = recipe;
  
    const isFavorited = (idMeal) => favorites?.some((fav) => fav.idMeal === idMeal);
  
    return (
      <>
        <div className="navbar">
          <div className="navlinks">
            <Link to="/home" className="nav-link">Home</Link>
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
  
        <div className="details-page" style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
          <h1>{strMeal}</h1>
          <img
            src={strMealThumb}
            alt={strMeal}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = backupImage;
            }}
            style={{
              width: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
              borderRadius: '12px',
              marginBottom: '1rem'
            }}
          />
          <p><strong>Category:</strong> {strCategory}</p>
          <p><strong>Region:</strong> {strArea}</p>
  
          <h3>Ingredients</h3>
          <ul>
            {ingredients && ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
  
          <h3>Instructions</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{strInstructions}</p>
  
          <div style={{ marginTop: '1rem' }}>
            <button onClick={() => toggleFavorite(recipe)}>
              {isFavorited(idMeal) ? 'Unfavorite' : 'Favorite'}
            </button>
          </div>
        </div>
      </>
    );
  }
  
  export default Details;