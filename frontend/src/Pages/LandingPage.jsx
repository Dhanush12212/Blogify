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
    <div className="relative h-screen w-full overflow-hidden">
      <div className='z-10 fixed w-full'>
        <Navbar /> 
      </div>

      {/* Background Image */}
      <div className='relative h-screen w-full'>
        <img className='w-full h-screen object-cover brightness-75' src={assets.LandingBackground} alt="Landing Background"/>

        {/* Overlay Content */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
          <h1 className='text-[5rem] font-extrabold text-blue-400 drop-shadow-lg'>Blogify</h1>
          <p className='mt-2 text-2xl text-blue-200 font-semibold drop-shadow-md'>
            A place where you can create <br />and share your thoughts with the world
          </p>
          <Link to="/blog" onClick={handleGetStarted}>
            <button className='mt-6 px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
