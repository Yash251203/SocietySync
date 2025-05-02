import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Footer from './components/Footer';
import DashboardContent from './components/DashboardContent';
// import Login from './Login';
import Events from './routes/Events';
import Complaints from './routes/complaints';
import Ordering from '';
import Emergency from './Emergency';
import Services from './Services';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  // Check authentication status (e.g., from localStorage or backend)
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setIsAuthenticated(true);
      setUserId(storedUserId);
    }
  }, []);

  const handleLogin = (userId) => {
    setIsAuthenticated(true);
    setUserId(userId);
    localStorage.setItem('userId', userId);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserId(null);
    localStorage.removeItem('userId');
  };

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <div className="flex flex-1">
          {isAuthenticated && <Sidebar />}
          <Routes>
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardContent userId={userId} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events"
              element={
                <ProtectedRoute>
                  <Events />
                </ProtectedRoute>
              }
            />
            <Route
              path="/complaints"
              element={
                <ProtectedRoute>
                  <Complaints />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ordering"
              element={
                <ProtectedRoute>
                  <Ordering />
                </ProtectedRoute>
              }
            />
            <Route
              path="/emergency"
              element={
                <ProtectedRoute>
                  <Emergency />
                </ProtectedRoute>
              }
            />
            <Route
              path="/services"
              element={
                <ProtectedRoute>
                  <Services />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;