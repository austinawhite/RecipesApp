
import { Routes, Route, Link } from 'react-router-dom'
import Home from './home'
import Login from './login';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App
