// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  // Function to update the username after login
  const setUser = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <AuthContext.Provider value={{ username, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
