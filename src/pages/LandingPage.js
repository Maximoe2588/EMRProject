import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import  AuthContext  from '../AuthContext';

function LandingPage() {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <h2>Welcome to the EMR System!</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>Not registered? <Link to="/register">Register here</Link></p>
    </div>
  );
}

export default LandingPage;
