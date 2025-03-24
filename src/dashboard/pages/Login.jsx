import React from 'react';
import logo from '../../assets/logo.png'; // Import the logo

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-sky-200">
      <div className="bg-white border border-gray-200 shadow-lg rounded-lg px-8 py-10 w-96 backdrop-filter backdrop-blur-lg bg-opacity-40">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              required
              className="w-full px-3 py-3 text-gray-800 bg-transparent border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 peer"
            />
            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600">
              Email
            </label>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              required
              className="w-full px-3 py-3 text-gray-800 bg-transparent border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 peer"
            />
            <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-600">
              Password
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;