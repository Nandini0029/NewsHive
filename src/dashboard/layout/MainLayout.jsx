import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Admin from "../pages/AdminIndex";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div className='min-w-screen min-h-screen bg-slate-100'>
            <Sidebar />
            <div className='ml-[250px] w-[calc(100vw-268px)] min-h-[100vh]'>
                <Header />
                <div className='p-4 pt-0'>
                    <div className='pt-[85px]'>
                        {location.pathname == "/admin" ? <Admin/> : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
