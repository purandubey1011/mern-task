import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-zinc-500 h-screen w-screen flex justify-center items-center flex-col'>
            <h1 className='bg-zinc-600 px-32 py-10 text-4xl font-bold rounded mb-3 text-zinc-100'>Home Page</h1>
            <div className='text-2xl flex gap-x-3 '>
            <Link className='bg-zinc-600 px-12 py-3 rounded font-medium text-zinc-100' to="/register">Register</Link>
            <Link className='bg-zinc-600 px-12 py-3 rounded font-medium text-zinc-100' to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Home;
