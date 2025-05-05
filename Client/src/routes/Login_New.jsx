import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ name: '', houseNo: '', email: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/login' : '/register';

    try {
      const res = await axios.post(`http://localhost:3000/api/auth${endpoint}`, form, {
        withCredentials: true,
      });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setUser(false);
        return;
      }

      try {
        const res = await axios.get('http://localhost:3000/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });

        if (res.data) {
          setUser(res.data);
          navigate('/dashboard');
        } else {
          setUser(false);
          localStorage.removeItem('token');
        }
      } catch (err) {
        setUser(false);
        localStorage.removeItem('token');
      }
    };

    // Only check authentication when the component mounts
    checkAuth();
  }, [navigate]);

  if (user === null) {
    return (
      <div className="flex items-center justify-center min-h-screen w-screen bg-gray-900">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-900">
      <div className="border-2 border-transparent p-1 rounded-xl animate-slideIn">
        <div className="bg-gray-200 p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-6 text-center animate-pulseText">
            {isLogin ? 'Login to SocietyMgr' : 'Register for SocietyMgr'}
          </h2>
          <form onSubmit={handleSubmit} className="h-96 w-96 space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="houseNo" className="block text-sm font-medium text-gray-700">
                    House Number
                  </label>
                  <input
                    type="text"
                    id="houseNo"
                    name="houseNo"
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
                    placeholder="e.g., A-101"
                  />
                </div>
              </>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-lg hover:scale-105 hover:ring-2 hover:ring-cyan-300 transition-all duration-200"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
            <p
              onClick={() => setIsLogin(prev => !prev)}
              className="text-center text-blue-500 hover:underline cursor-pointer mt-4"
            >
              {isLogin ? 'Need to register?' : 'Already have an account?'}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
