import { useNavigate } from "react-router-dom";
import foodImage from './assets/food.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'


function Login() {

    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      navigate('/home');
    };
    
  return (
    <div className="home"> 
  
      <div className="homeimage">
       <img src={foodImage} alt="Food Image" />
      </div>
  
      <div className="loginside">
        <h1> Welcome to My Recipes </h1>
        <h2> Sign into your account to get started </h2>
  
        <div className="loginForm">
        <form onSubmit={handleLogin}>
            <label for="username" class="form-label"> Username </label>
            <input type="text" placeholder="Username" class="form-control-sm" id="username" width={75} required />
            <br />
            <br />
            <label for="username" class="form-label"> Password </label>
            <input type="password" placeholder="Password" class="form-control-sm" id="password" required />
            <br />
            <br />
            <button type="submit" class="btn btn-outline-light">Login</button>
  
        </form>
        </div>
  
      </div>
  
    </div>
  )
   
  }

  export default Login;
  