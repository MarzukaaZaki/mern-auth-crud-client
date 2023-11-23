import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-around py-4 shadow-md'>
            <Link to='/'>Home</Link>
            <div>
            <Link to='/login' className='me-4 px-4 py-2 bg-slate-700 text-white rounded'>Log In</Link>
            <Link to='/register' className='px-4 py-2 bg-slate-700 text-white rounded'>Join Us</Link> 
            </div>
         
        </div>
    );
};

export default Navbar;