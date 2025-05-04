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
  const [loading, setLoading] = useState(true); // New state for loading

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    // Simulate fetching user data (this could also be an API call)
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (token && storedUser) {
      setUser(JSON.parse(storedUser)); // or just `true` if you just need to track login state
    } else {
      setUser(null);
    }

    // After checking localStorage or API, set loading to false
    setLoading(false);
  }, []);

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

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator until user data is fetched
  }

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
