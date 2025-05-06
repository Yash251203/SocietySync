import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './routes/Login_New';
import Events from './routes/Events';
import Complaints from './routes/complaints';
import Ordering from './routes/Ordering';
import Emergency from './routes/Emergency';
import Services from './routes/Services';
import RentMaintenance from './routes/RentMaintenance';
import DashboardContent from './components/DashboardContent';
import Me from './routes/Me';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/login" element={<Login setUser={setUser} />} />

      <Route element={<Layout user={user} />}>
        <Route path="/dashboard" element={<DashboardContent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/ordering" element={<Ordering />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rent-maintenance" element={<RentMaintenance />} />
        <Route path="/me" element={<Me />} />

      </Route>

      <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
    </Routes>
  );
};

export default App;
