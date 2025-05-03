import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthPage = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/login' : '/register';
  
    try {
      const res = await axios.post(`http://localhost:5000/api/auth${endpoint}`, form);
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
    } catch (err) {
      alert(err.response?.data?.msg || 'Something went wrong');
    }
  };
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => setUser(res.data))
      .catch(() => localStorage.removeItem('token'));
    }
  }, []);

  return (
    <div>
      {user ? (
        <h2>Welcome, {user.username}</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="houseNo" placeholder="House Number" onChange={handleChange} />
            </>
          )}
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} />
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
          <p onClick={() => setIsLogin(prev => !prev)}>
            {isLogin ? 'Need to register?' : 'Already have an account?'}
          </p>
        </form>
      )}
    </div>
  );
};

export default AuthPage;
