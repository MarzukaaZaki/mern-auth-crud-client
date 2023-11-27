import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://crud-server-dczzcxppv-zakimarzuka-gmailcom.vercel.app/register', { email, name, password})
        .then(res => {
            console.log(res)
            navigate('/login')
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <h2 className='text-center text-2xl font-bold my-3'> Register </h2>
           <form onSubmit={handleSubmit} className='border border-1 px-5 py-8 rounded'>
            <input 
            onChange={(e) =>{setEmail(e.target.value)}}
            type='email' name='email' placeholder='email' required className='border border-1 rounded w-full  my-2 px-6 py-4 shadow-md'/>
            <br />
            <input 
             onChange={(e) =>{setName(e.target.value)}}
            type='text' name='name' placeholder='username' required className='border border-1 rounded w-full  my-2 px-6 py-4 shadow-md'/>
            <br />
            <input 
             onChange={(e) =>{setPassword(e.target.value)}}
            type='password' name='password' placeholder='password' required className='border border-1 rounded w-full  my-2 px-6 py-4 shadow-md'/>
            <br />
            <button className='bg-blue-500 px-6 py-2 rounded w-full text-white my-3'> Create an Account</button>
            <Link to='/login' className='text-indigo-600'> Already have an account? Log In</Link>
           </form>

        </div>
    );
};

export default Register;