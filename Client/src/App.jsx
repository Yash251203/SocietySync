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
import AdminLogin from './routes/AdminLogin';
import WorkerLogin from './routes/WorkerLogin';
import WorkerDashBoard from './components/WorkerDashBoard';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    const storedAdmin = localStorage.getItem('admin');
    const storedWorker = localStorage.getItem('worker');
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    } else if (token && storedAdmin) {
      setUser(JSON.parse(storedAdmin));
    } else if (token && storedWorker) {
      setUser(JSON.parse(storedWorker));
    }
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      {/* Login Route */}
      <Route path="/login" element={<Login setUser={setUser} />} />

      {/* Layout Route with user authentication check */}
      <Route element={<Layout user={user} />}>
        <Route path="/dashboard/worker" element={<WorkerDashBoard />} />
        <Route path="/dashboard" element={<DashboardContent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/ordering" element={<Ordering />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rent-maintenance" element={<RentMaintenance />} />
        <Route path="/me" element={<Me />} />
      </Route>

      {/* Admin Login Route */}
      <Route path="/login/admin" element={<AdminLogin />} />
      <Route path="/login/worker" element={<WorkerLogin />} />

      {/* Catch-all Route */}
      <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
    </Routes>
  );
};

export default App;
