'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    isLoggedIn: false,
    role: 'citizen',
    name: 'Guest Citizen',
    phone: ''
  });

  const [isSosOpen, setIsSosOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('sachet_auth');
      if (saved) {
        try {
          setUser(JSON.parse(saved));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  const loginAs = (role, name, phone) => {
    const defaultNames = {
      citizen: 'Aarav Sharma (Bihar Sector 4)',
      responder: 'Squad Lead Rajesh Kumar (NDRF Unit 9)',
      admin: 'Director V. K. Singh (Central Water Commission)'
    };

    const newUser = {
      isLoggedIn: true,
      role: role,
      name: name || defaultNames[role] || 'Authorized User',
      phone: phone || '+91 98765 43210'
    };

    setUser(newUser);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('sachet_auth', JSON.stringify(newUser));
    }
    showToast(`Welcome ${newUser.name}! Logged in as ${role.toUpperCase()}.`, 'success');
  };

  const logout = () => {
    const guest = {
      isLoggedIn: false,
      role: 'citizen',
      name: 'Guest Citizen',
      phone: ''
    };
    setUser(guest);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('sachet_auth');
    }
    showToast('Signed out of Sachet Disaster Grid.', 'info');
  };

  const showToast = (message, type = 'info') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(prev => (prev && prev.id ? null : prev));
    }, 4000);
  };

  const openSos = () => setIsSosOpen(true);
  const closeSos = () => setIsSosOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginAs,
        logout,
        isSosOpen,
        openSos,
        closeSos,
        toast,
        showToast
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
