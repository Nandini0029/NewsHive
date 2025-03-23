import React from 'react';
import profile from '../../assets/profile.png';

const Header = () => {
  return (
    <div className='pl-4 fixed w-[calc(100vw-250px)] top-4 z-50'>
      <div className='w-full rounded h-[70px] flex justify-between items-center p-4 bg-white'>

        <div className='mr-4'>
          <div className='flex gap-x-2'>
            <div className='flex flex-col justify-center items-end'>
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
    </div>
  );
};

export default Header;

// Let me know if you want me to tweak anything or add features! 🚀
