import React from 'react';
import Navbar from '../Components/Navbar';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div> 
      
      <div className='z-10 fixed w-full'>
        <Navbar /> 
      </div>
 
      <div className='relative h-screen w-full'>
        <img className='w-full h-screen object-cover' src={assets.LandingBackground} alt="Landing Background"/>
 
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-[5rem] font-bold text-blue-500'>Blogify</h1>
          <p className='mt-4 text-2xl text-blue-700 font-semibold'>Place where you can create and <br /> upload new blogs</p>
          <button className='border bg-white px-6 py-4 mt-4 text-black text-xl rounded-4xl hover:bg-slate-200 hover:font-semibold transition-all '><Link to="">Get Started</Link></button>
        </div>

      </div>
    </div>
  )
}

export default LandingPage
