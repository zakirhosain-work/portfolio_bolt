import React, { useState } from 'react';
import { useEffect } from 'react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const AdminApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if user is already authenticated from sessionStorage
    return sessionStorage.getItem('adminAuthenticated') === 'true';
  });

  const handleLogin = (password: string) => {
    // Simple authentication - in production, use proper authentication
    if (password === 'Dhaka2025&') {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuthenticated', 'true');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuthenticated');
  };

  useEffect(() => {
    // Update sessionStorage when authentication state changes
    if (isAuthenticated) {
      sessionStorage.setItem('adminAuthenticated', 'true');
    } else {
      sessionStorage.removeItem('adminAuthenticated');
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
};

export default AdminApp;