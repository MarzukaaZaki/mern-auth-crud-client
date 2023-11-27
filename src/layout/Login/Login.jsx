import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://crud-server-dczzcxppv-zakimarzuka-gmailcom.vercel.app/login', {name, password}, {withCredentials: true})
        .then(result => {
            console.log(result)
            if(result.data === 'Success'){
                navigate('/');
                alert('Successfully logged in!')
            }
            else{
                alert('Login Failed')
            }
            
        
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
          <h2 className='text-center text-2xl font-bold my-3'> Log In </h2>
           <form onSubmit={handleSubmit} className='border border-1 px-5 py-8 rounded'>
            <input 
            onChange={(e) => setName(e.target.value)}
            type='text' placeholder='username' required className='border border-1 rounded w-full  my-2 px-6 py-4 shadow-md'/>
            <br />
            <input 
            onChange={(e) => setPassword(e.target.value)}
            type='password' placeholder='password' required className='border border-1 rounded w-full  my-2 px-6 py-4 shadow-md'/>
            <br />
            <button className='bg-blue-500 px-6 py-2 rounded  w-full text-white my-3'> Log In</button>
            <Link to='/register' className='text-indigo-600'> Don't have an account? Create one</Link>
           </form>
        </div>
    );
};

export default Login;