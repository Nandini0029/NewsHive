import React from 'react';
import profile from '../../assets/profile.png';

const Header = () => {
  return (
    <div className='fixed top-0 right-0 w-[calc(100vw-250px)] bg-white shadow-md z-50'>
      <div className='h-[70px] flex justify-end items-center px-6'>

        {/* Profile Section */}
        <div className='flex gap-x-2 items-center'>
          <div className='flex flex-col text-right'>
            <span className='font-semibold'>Nandini Kapil</span>
            <span className='text-sm text-gray-500'>Admin</span>
          </div>
          <img 
            className='w-10 h-10 rounded-full border border-gray-300' 
            src={profile} 
            alt='Profile' 
          />
        </div>

      </div>
    </div>
  );
};

export default Header;