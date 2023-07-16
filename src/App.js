import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import DemographicsForm from './pages/DemographicsForm';
import LandingPage from './pages/LandingPage';
import AuthContext from './AuthContext';

function App() {

  const { isLoggedIn } = useContext(AuthContext); 
  
  return (
    
    <Router>
      <h1>We Care For You Healthcare</h1>
      {isLoggedIn && (
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/demographics">Demographics</Link>
      </nav>
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/demographics" element={<DemographicsForm />} />
        <Route path="/" element={<Navigate to="/" />} /> 
      </Routes>
    </Router>
  );
}

export default App;