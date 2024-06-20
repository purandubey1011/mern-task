import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../utils/axios'

const Carddetail = () => {

    const [user, setUser] = useState({})
    const [carddetail, setCarddetail] = useState({})
    let {cardid} = useParams()
    let navigate = useNavigate()
    
    useEffect(() => {
      
        let fetchcarddetail = async()=>{
            let {data} =await axios.post(`/api/auth/program-card/${cardid}`)
            setUser(data.user)
            setCarddetail(data.card)
        }
        fetchcarddetail()

    }, [])
    console.log("card",carddetail)
    console.log("user",user)
    

    return (
    <div className='w-[100%] h-[100vh] bg-zinc-800 flex items-center justify-between flex-col'>    
        <nav className='flex items-center justify-between bg-zinc-600 w-[100%] h-[10vh] px-10 text-zinc-100'>
                <h1 className='text-xl'>hello 👋 {user.username}</h1>
                <button onClick={()=>navigate(-1)} className='text-xl font-bold'>Back</button>
        </nav>
        <div className='w-[90vw] h-[90vh] flex justify-between items-center'>
            <div className='flex items-center '>

            
            <div className='w-[58vw] h-[90Vh] flex justify-start items-center'>
                <div className=' flex flex-col gap-y-5'>
                    <h1 className='text-2xl font-bold text-zinc-100'>{carddetail.title}</h1>
                    <p className='text-xl font-semibold text-zinc-100'>{carddetail.description}</p>
                    <h1 className='font-semibold text-2xl text-zinc-100'>rating: {carddetail.rating}</h1>
                    <h1 className='font-semibold text-2xl text-zinc-100'>author : {carddetail.author}</h1>
                    <h1 className='font-semibold text-2xl text-zinc-100'>language : {carddetail.language}</h1>
                </div>
            </div>
            <div className='w-[32vw] h-[60vh]  flex flex-col justify-around items-start'>
                    <div className='w-[100%] h-[35vh] bg-zinc-200 overflow-hidden'>
                        <img className='h-[35vh] w-[100vw]' src={carddetail.poster} alt="" />
                    </div>
                    <h1 className='text-2xl font-semibold ml-3 text-zinc-100'>price : {carddetail.price}</h1>
                    <button className='bg-blue-700 text-white px-7 py-3 text-xl font-semibold rounded ml-3'>Payment process</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Carddetail
