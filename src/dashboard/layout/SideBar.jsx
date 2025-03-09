import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';
import { ImProfile } from 'react-icons/im';
import { IoLogOutOutline } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Sidebar = () => {
    return (
        <div className='w-[250px] h-screen fixed left-0 top-0 bg-white'>
            <div className='h-[70px] flex justify-center items-center'>
                <Link to='/'>
                    <img className='w-[250px] h-[130px]' src={logo} alt="Logo" />
                </Link>
            </div>
            <ul className='px-3 flex flex-col gap-y-1 font-medium'>
                <li>
                    <Link to='/NewsHive/dashboard' className='px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white'>
                        <span className='text-xl'><AiFillDashboard /></span>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard/news/create' className='px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white'>
                        <span className='text-xl'><FaPlus /></span>
                        <span>Add News</span>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard/news' className='px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white'>
                        <span className='text-xl'><BiNews /></span>
                        <span>News</span>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard/profile' className='px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white'>
                        <span className='text-xl'><ImProfile /></span>
                        <span>Profile</span>
                    </Link>
                </li>
                <li>
                    <div onClick={() => alert('Logout clicked')} className='px-3 py-2 hover:shadow-lg hover:shadow-red-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white cursor-pointer'>
                        <span className='text-xl'><IoLogOutOutline /></span>
                        <span>Logout</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

// Let me know if you want any adjustments! 🚀