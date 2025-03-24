import React from 'react';

import logo from '../../assets/logo.png'; // Import the logo

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-sky-100">
      <div className="bg-white border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative w-80">
       
        <div className="flex justify-center mb-10">
          <img src={logo} alt="Logo" className="h-20 w-60 object-contain" />
        </div>
        <form action="">
          <div className="relative my-6">
            <input
              type="text"
              className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
            />
            <label
className="absolute text-2xl duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-black-400 peer-focus:text-blue-600"            >
              Email
            </label>
          </div>

          <div className="relative my-6">
            <input
              type="password"
              className="block w-full py-2.5 px-0 text-xl text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
            />
            <label
className="absolute text-2xl duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-black-400 peer-focus:text-blue-600"            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full text-[18px] mt-6 rounded bg-purple-400 py-2 hover:bg-purple-600 transition duration-300 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
