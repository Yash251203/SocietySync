import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DashboardContent = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const adminData = localStorage.getItem('admin');
    const token = localStorage.getItem('token');
  
    if ((!userData && !adminData) || !token) {
      navigate('/login');
    } else {
      try {
        const data = userData || adminData;
        setDashboardData(JSON.parse(data));
      } catch (e) {
        console.error("Error parsing dashboard data:", e);
        navigate('/login');
      }
    }
    if (adminData) setRole("admin");
  }, []);
  console.log(role);
  

  const today = new Date();
  const parts = today.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).split(" ");
  const formattedDate = `${parts[0]}, ${parts.slice(1).join(' ')}`;  

  const cards = [
    {
      title: 'Events',
      description: 'View upcoming events',
      bg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      href: '/events',
      image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg',
      icon: (
        <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Complaints',
      description: 'Submit or track complaints',
      bg: 'bg-gradient-to-br from-pink-500 to-purple-600',
      href: '/complaints',
      image: 'https://cdn.pixabay.com/photo/2019/08/13/08/15/adult-4402808_1280.jpg',
      icon: (
        <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Ordering',
      description: 'Online grocery ordering',
      bg: 'bg-gradient-to-br from-amber-500 to-red-600',
      href: '/ordering',
      image: 'https://cdn.pixabay.com/photo/2022/01/28/12/17/delivery-6974508_1280.jpg',
      icon: (
        <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Emergency',
      description: 'Press for urgent help',
      bg: 'bg-gradient-to-br from-red-500 to-rose-600',
      href: '/emergency',
      image: 'https://cdn.pixabay.com/photo/2020/03/31/14/04/covid-19-4987797_1280.jpg',
      icon: (
        <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    },
    {
      title: 'Services',
      description: 'Request maintenance',
      bg: 'bg-gradient-to-br from-emerald-500 to-green-600',
      href: '/services',
      image: 'https://cdn.pixabay.com/photo/2021/02/02/12/41/iron-5973861_1280.jpg',
      icon: (
        <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.79m0 0L21 21" />
        </svg>
      )
    },
    {
      title: 'Rent & Maintenance',
      description: 'Manage rent and maintenance',
    
      bg: 'bg-gradient-to-br from-emerald-500 to-green-600',
      href: '/rent-maintenance',
      image: 'https://images.unsplash.com/photo-1615404420216-cc423164563f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: (
        <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.79m0 0L21 21" />
        </svg>
      )
    }
  ];


  return (
    <>
    { dashboardData ? 
    <div className="w-full md:w-4/5 p-6 md:p-8 relative animate-gradientFade">
    <style>
      {`
        @keyframes slideIn {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes gradientFade {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulseText {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
        .animate-gradientFade {
          background: linear-gradient(135deg, #e2e8f0, #f1f5f9, #e2e8f0);
          background-size: 200% 200%;
          animation: gradientFade 15s ease infinite;
        }
        .animate-pulseText:hover {
          animation: pulseText 1s infinite;
        }
      `}
    </style>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <h2 className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent animate-pulseText">
          {`${dashboardData.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}, ${dashboardData.houseNo}`}
        </h2>
        { role === "admin" && <span className='text-red-800 text-2xl font-semibold'>[ Admin ]</span>}
        <p className="text-lg bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent animate-slideIn">
          Today is {`${formattedDate}`}
        </p>
      </div>
      
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Link
          key={card.title}
          to={card.href}
          className={`${card.bg}/50 h-64 text-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-cyan-300 transition-all duration-300 cursor-pointer bg-cover bg-center relative overflow-hidden animate-slideIn`}
          onClick={card.onClick}
          style={{ backgroundImage: `url(${card.image})`, animationDelay: `${index * 0.1}s` }}
        >
          <div className="absolute inset-0 bg-black/30 hover:bg-black/50 hover:backdrop-blur-md transition-all duration-300"></div>
          <div className="absolute inset-0  duration-300"></div>
          <div className="absolute top-4 left-4 ">{card.icon}</div>
          <div className="relative z-10 mt-8">
            <h3
              className="text-3xl font-semibold hover:text-3xl hover:shadow-glow transition-all duration-300"
            >
              {card.title}
            </h3>
            <p
              className="text-lg mt-1"
              style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }}
            >
              {card.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div> : "Loading..."}
    </>
  );
};

export default DashboardContent;