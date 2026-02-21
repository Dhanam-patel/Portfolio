import React from 'react'
import Banner from "../../assets/banner.png"
import pfp from "../../assets/pfp.webp"
import Socials from '../Socials/socials.jsx'
const Home = () => {
  return (
    <div className='relative'>
      <img className='w-full h-full object-cover m-0' src={Banner} alt="Banner" />
      <img className=' absolute left-7 top-[22vh] object-cover border-2 border-black rounded-full w-[8vw]' src={pfp} alt="Profile Picture" />
      <div className='absolute left-7 top-[35vh] flex justify-between items-end w-[95%]  h-[10vh]'>
        <div className=''>
          <h1 className=' font-extrabold text-4xl text-white walter-turncoat-regular'>Dhanam Patel</h1>
          <h6 className='text-gray-500 text-2xl'>@Athanox</h6>
        </div>
        <div className=''>
          <Socials />
        </div>
      </div>
      <div className='h-[21.3vh]'></div>
    </div>
  )
}

export default Home
