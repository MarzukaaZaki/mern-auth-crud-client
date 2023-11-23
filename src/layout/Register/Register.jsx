import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2 className='text-center text-2xl font-bold my-3'> Register </h2>
           <form className='border border-1 px-5 py-8 rounded'>
            <input type='email' placeholder='email' required className='border border-1 rounded w-full  my-2 px-6 py-4 shadow-md'/>
            <br />
            <input type='text' placeholder='username' required className='border border-1 rounded w-full  my-2 px-6 py-4 shadow-md'/>
            <br />
            <input type='password' placeholder='password' required className='border border-1 rounded w-full  my-2 px-6 py-4 shadow-md'/>
            <br />
            <button className='bg-blue-500 px-6 py-2 rounded w-full text-white my-3'> Create an Account</button>
            <Link to='/login' className='text-indigo-600'> Already have an account? Log In</Link>
           </form>

        </div>
    );
};

export default Register;