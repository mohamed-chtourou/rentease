import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Restauration depuis localStorage (remember) ou sessionStorage
    const stored = localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (error) {
        console.error('Erreur de parsing userInfo:', error);
        localStorage.removeItem('userInfo');
        sessionStorage.removeItem('userInfo');
      }
    }
    setLoading(false);
  }, []);

  const persistUser = (userData, remember = true) => {
    const serialized = JSON.stringify(userData);
    if (remember) {
      localStorage.setItem('userInfo', serialized);
      sessionStorage.removeItem('userInfo');
    } else {
      sessionStorage.setItem('userInfo', serialized);
      localStorage.removeItem('userInfo');
    }
  };

  const login = (userData, remember = true) => {
    setUser(userData);
    persistUser(userData, remember);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userInfo');
    sessionStorage.removeItem('userInfo');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
