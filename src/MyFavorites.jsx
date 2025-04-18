import backupImage from './assets/backupImage.jpg'
import defaultprofile from './assets/defaultprofile.png'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import './App.css'

function MyFavorites({ favorites, toggleFavorite }) {

    const navigate = useNavigate();

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
      <h3>My Favorite Recipes</h3>

      {favorites.length === 0 ? (
        <p className="no-favorites">You have not favorited any recipes yet.</p>
      ) : (
        <div className="cards">
          {favorites.map((recipe) => {
            const { idMeal, strMeal, strMealThumb, strCategory, strArea } = recipe;

            return (
              <div key={idMeal} className="card">
                <img
                  src={strMealThumb}
                  alt={strMeal}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = backupImage;
                  }}
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
                <button
                  className="btn btn-danger"
                  onClick={() => toggleFavorite(recipe)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
    </>
  );
}

export default MyFavorites;
