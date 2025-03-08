import React from 'react';
import SideBar from './SideBar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='min-w-screen min-h-screen bg-slate-100'>
            <SideBar />
        </div>
    );
};

export default MainLayout;
