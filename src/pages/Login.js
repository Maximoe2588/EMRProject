import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../AuthContext'; //Updated

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); //Updated
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    try {
      await login(username, password);  // Updated
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  }
    /*e.preventDefault();
    if(username === 'test' && password === 'password') {
      navigate('/dashboard');
    }
  }*/

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input 
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Not registered? <Link to="/register">Register here</Link></p>
    </div>
  );
}

export default Login;
