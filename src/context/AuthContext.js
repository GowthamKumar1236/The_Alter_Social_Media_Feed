import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// AuthProvider component to provide auth state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);  // Placeholder for actual login
  };

  const logout = () => {
    setUser(null);  // Placeholder for actual logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
