import React from 'react';
import profile from '../../assets/profile.png';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("user");
    navigate('/');
  };

  return (
    <div className='fixed top-0 right-0 w-[calc(100vw-250px)] bg-white shadow-md z-50'>
      <div className='h-[70px] flex justify-end items-center px-6'>

        {/* Profile Section */}
        <div className='flex gap-x-3 items-center relative'>
          <div className='flex flex-col text-right'>
            <span className='font-semibold'>Nandini Kapil</span>
            <span className='text-sm text-gray-500'>Admin</span>
          </div>
          <img 
            className='w-10 h-10 rounded-full border border-gray-300' 
            src={profile} 
            alt='Profile' 
          />
          
          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className='px-4 py-1 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-md text-sm font-medium transition-all duration-300'
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Header;
