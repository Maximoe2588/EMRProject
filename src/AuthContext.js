
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();


export const useAuth = () => {
  return useContext(AuthContext);//Updated
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.json();
      if (data.token) {  //Updated
        setIsLoggedIn(true);
      } else {
        throw new Error(data.message || 'Unknown error during login');
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ login, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
