import React from 'react';
import Navbar from '../Components/Navbar';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
const navigate = useNavigate();

  const handleGetStarted = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/Blog", { withCredentials: true });
        console.log("User authenticated:", response.data);
        navigate("/blog");  
    } catch (error) {
        console.error("Authentication failed:", error.response?.data || error.message);
        navigate("/login");   
    }
  };

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
          <Link to="/blog" onClick={handleGetStarted}>
            <button className='border bg-white px-6 py-4 mt-4 text-black text-xl rounded-4xl hover:bg-slate-200 hover:font-semibold transition-all '>
              Get Started
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default LandingPage
