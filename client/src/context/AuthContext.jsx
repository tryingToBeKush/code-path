import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setUser({ name: 'Shray', email: 'shray@example.com' });
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    localStorage.setItem('authToken', 'dummy_jwt_token');
    setUser(userData);
  };

  const signup = (userData) => {
   
    localStorage.setItem('authToken', 'dummy_jwt_token');
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);

  };

  const value = {
    user,
    isLoggedIn: !!user,
    login,
    signup,
    logout,
  };

  
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
