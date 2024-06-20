import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [user, setUser] = useState({});
    const [programcard, setProgramcard] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('/api/auth/user');
                setUser(res.data);
            } catch (error) {
                console.error('Fetching user data failed');
                navigate('/login');
            }
        };
        const fetchCard = async () => {
            try {
                const res = await axios.post('/api/auth/program-card');
                setProgramcard(res.data);
                // console.log(res)
            } catch (error) {
                console.error('Fetching user data failed');
                navigate('/login');
            }
        };
        
        
        fetchUser()
        fetchCard()
    }, [navigate]);
    console.log(programcard)

    const handleLogout = async () => {
        try {
            await axios.get('/api/auth/logout');
            navigate('/login');
        } catch (error) {
            console.error('Logout failed');
        }
    };

    

    return (
        <div className='bg-zinc-500 w-[100%] h-[100vh]'>
             <nav className='flex items-center justify-between bg-zinc-600 w-[100%] h-[10vh] px-10 font-semibold text-zinc-100'>
                <h1 className='text-xl'>hello 👋 {user.username}</h1>
                <button className='text-xl' onClick={handleLogout}>Logout</button>
             </nav>
             <div className='h-[90vh] w-[100%] bg-zinc-800 flex gap-10'>

                {
                    programcard.map((c,i)=>{
                        return (
                            <div className='bg-zinc-100 w-[25vw] h-[43vh] overflow-hidden ml-20 mt-5' key={i}>
                    <div className='w-[100%] h-[25vh] bg-zinc-200 overflow-hidden'>
                        <img className='h-[25vh] w-[100vw]' src={c.poster} alt="" />
                    </div>
                    <div className='w-[100%] h-[18vh] bg-red-200'>
                        <h1 className='bg-zinc-200 text-xl font-medium px-2 py-1'>{c.title.slice(0,25)}</h1>
                        <p className='text-sm font-medium bg-green-400 px-2 py-1'>{c.description.slice(0,54)}</p>
                        <div className='flex gap-x-6 bg-blue-400 px-2'>
                            <h1 className='font-bold'>rating : {c.rating}</h1>
                            <h1 className='font-bold'>price : {c.price}</h1>
                        </div>
                        <Link className='inline-block w-[100%] py-2 bg-yellow-300 flex justify-center items-center text-xl font-bold' to={`/card/${c.id}`} >More</Link>
                    </div>
                </div>
                        )
                    })
                }

                
             </div>
        </div>
    );
};

export default Dashboard;


{/* <h1>Dashboard</h1>
<p>Welcome, {user.username}</p>
<button onClick={handleLogout}>Logout</button> */}