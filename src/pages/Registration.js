import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async e => {
    e.preventDefault();
    try {
      console.log('Registering:', name, email, password);
      await authService.register(name, email, password);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input 
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input 
          type="text"
          value={email} 
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input 
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
