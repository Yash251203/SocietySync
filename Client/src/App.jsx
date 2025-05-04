import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Footer from './components/Footer';
import DashboardContent from './components/DashboardContent';
import Login from './routes/Login_New';
import Events from './routes/Events';
import Complaints from './routes/complaints';
import Ordering from './routes/Ordering';
import Emergency from './routes/Emergency';
import Services from './routes/Services';
import RentMaintenance from './routes/RentMaintenance';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleSidebar = () => {
    console.log('Toggling sidebar, current state:', isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(true); // Simplified for demo; in a real app, verify the token with the server
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const ProtectedLayout = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} handleLogout={handleLogout} />
        <div className="flex flex-1">
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          {children}
        </div>
        <Footer />
      </div>
    );
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login setUser={setUser} />}
      />
      <Route
        path="/dashboard"
        element={
          user ? (
            <ProtectedLayout>
              <DashboardContent />
            </ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/events"
        element={
          user ? (
            <ProtectedLayout>
              <Events />
            </ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/complaints"
        element={
          user ? (
            <ProtectedLayout>
              <Complaints />
            </ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/ordering"
        element={
          user ? (
            <ProtectedLayout>
              <Ordering />
            </ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/emergency"
        element={
          user ? (
            <ProtectedLayout>
              <Emergency />
            </ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/services"
        element={
          user ? (
            <ProtectedLayout>
              <Services />
            </ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/rent-maintenance"
        element={
          user ? (
            <ProtectedLayout>
              <RentMaintenance />
            </ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
    </Routes>
  );
};

export default App;