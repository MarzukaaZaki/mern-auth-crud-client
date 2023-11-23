import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className='h-screen flex items-center justify-center'>
               <Outlet/> 
            </div>
            
        </div>
    );
};

export default Main;