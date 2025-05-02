// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ handleLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', { email, password });
//       handleLogin(response.data.userId);
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Invalid credentials');
//     }
//   };

//   return (
//     <div className="w-full max-w-md mx-auto p-6">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login to SocietySync</h2>
//       {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;