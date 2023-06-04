import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import DemographicsForm from './pages/DemographicsForm';

function App() {
  return (
    
    <Router>
      <h1>Testing</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/demographics">Demographics</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/demographics" element={<DemographicsForm />} />
        <Route path="/" element={<Navigate to="/login" />} /> 
      </Routes>
    </Router>
  );
}

export default App;