import React from 'react'
import Navbar from '../Components/Navbar'
import { assets } from '../assets/assets'

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
        </div>

      </div>
    </div>
  )
}

export default LandingPage
