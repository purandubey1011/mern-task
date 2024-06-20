import React, { useState } from 'react';
import axios from '../utils/axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            console.log(res.data);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed');
        }
    };

    return (
        <div className='h-screen w-screen bg-zinc-500 flex justify-center items-center flex-col gap-y-3'>
            <h1 className='text-4xl font-semibold text-zinc-100 bg-zinc-600 px-20 py-6 rounded'>REGISTER</h1>
            <form onSubmit={handleSubmit} className='bg-zinc-600 border-2 border-zinc-800 p-10 flex flex-col justify-start'>
                <div className='bg-zinc-700 mb-2 px-20 py-6 flex gap-x-3'>
                    <label className='text-xl font-medium text-zinc-100'>Email:</label>
                    <input className='bg-transparent outline-none border-2 text-white rounded-md py-2 px-10' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='bg-zinc-700 mb-2 px-20 py-6 flex gap-x-3'>
                    <label className='text-xl font-medium text-zinc-100'>Password:</label>
                    <input className='bg-transparent outline-none border-2 text-white rounded-md py-2 px-10' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='text-zinc-100 bg-zinc-700 py-4 text-lg font-semibold' type="submit">Register</button>
            </form>
            <div className='text-zinc-100 flex gap-x-3 items-center'>don't have an account? <Link className='underline text-xl font-bold text-blue-800' to='/register'>Register</Link></div>
        </div>
    );
};

export default Login;
