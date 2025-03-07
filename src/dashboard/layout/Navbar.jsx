import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';
import { ImProfile } from 'react-icons/im';
import { IoLogOutOutline } from 'react-icons/io5';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-bold text-indigo-600">
                        NewsPortal
                    </Link>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600">
                                <AiFillDashboard />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/news" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600">
                                <BiNews />
                                News
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600">
                                <ImProfile />
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="flex items-center gap-2 text-red-500 hover:text-red-600">
                                <IoLogOutOutline />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

// Let me know if you want me to add a mobile menu or enhance the styling further! 