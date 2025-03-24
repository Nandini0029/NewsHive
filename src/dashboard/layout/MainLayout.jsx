import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import Admin from "../pages/AdminIndex";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div className='min-w-screen min-h-screen bg-slate-100'>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className='ml-[250px] w-[calc(100vw-268px)] min-h-[100vh]'>
                {/* Header */}
                <Header />

                {/* Content Below Header */}
                <div className='p-4 pt-0'>
                    <div className='pt-[85px]'>
                        {/* Show Admin Dashboard for /admin, otherwise load nested routes */}
                        {location.pathname === "/admin" ? <Admin /> : <Outlet />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;