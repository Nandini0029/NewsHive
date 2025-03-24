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
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 text-gray-800 bg-white border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-3 py-2 text-gray-800 bg-white border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;