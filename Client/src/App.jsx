import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Footer from './components/Footer';
import DashboardContent from './components/DashboardContent';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
    <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    <div className="flex flex-1">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <DashboardContent />
    </div>
    <Footer />
  </div>
  );
};

export default App;