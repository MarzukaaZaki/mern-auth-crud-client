import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
          <h2 className='text-center text-2xl font-bold my-3'> Log In </h2>
           <form className='border border-1 px-5 py-8 rounded'>
            <input type='text' placeholder='username' required className='border border-1 rounded w-full  my-2 px-6 py-4 shadow-md'/>
            <br />
            <input type='password' placeholder='password' required className='border border-1 rounded w-full  my-2 px-6 py-4 shadow-md'/>
            <br />
            <button className='bg-blue-500 px-6 py-2 rounded  w-full text-white my-3'> Log In</button>
            <Link to='/register' className='text-indigo-600'> Don't have an account? Create one</Link>
           </form>
        </div>
    );
};

export default Login;