import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Footer from './components/Footer';
import DashboardContent from './components/DashboardContent';
// import Login from './routes/Login';
import Events from './routes/Events';
import Complaints from './routes/complaints';
import Ordering from './routes/Ordering';
import Emergency from './routes/Emergency';
import Services from './routes/Services';
import RentMaintenance from './routes/RentMaintenance';

const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log('Toggling sidebar, current state:', isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="flex flex-col min-h-screen">
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/dashboard" element={<DashboardContent />} />
          <Route path="/events" element={<Events />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/ordering" element={<Ordering />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="/rent-maintenance" element={<RentMaintenance />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;