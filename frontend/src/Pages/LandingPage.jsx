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
        const response = await axios.get("https://blogify-8a16.onrender.com/api/Blog", { withCredentials: true });
        console.log("User authenticated:", response.data);
        navigate("/blog");  
    } catch (error) {
        console.error("Authentication failed:", error.response?.data || error.message);
        navigate("/login");   
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className='z-10 fixed w-full'>
        <Navbar /> 
      </div>

      {/* Background Image */}
      <div className='relative h-screen w-full'>
        <img className='w-full h-screen object-cover brightness-75' src={assets.LandingBackground} alt="Landing Background"/>

        {/* Overlay Content */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
          <h1 className='heading lg:text-7xl sm:text-5xl font-bold text-blue-900 drop-shadow-lg'>Blogify</h1>
          <p className='desc mt-2 tracking-wide lg:text-2xl md:text-xl text-slate-300 font-semibold drop-shadow-md'>
            A place where you can create <br />and share your blogs
          </p>
          <Link to="/blog" onClick={handleGetStarted}>
            <button className='startBtn mt-6 lg:px-8 lg:py-4 md:px-5 md:py-3 sm:px-3 sm:py-2  bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
