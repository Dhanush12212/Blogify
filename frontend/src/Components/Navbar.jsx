import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar() {

  const navigate = useNavigate();

  const handleNewBlog = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/BlogHome", { withCredentials: true });
        console.log("User authenticated:", response.data);
        navigate("/blog");  
    } catch (error) {
        console.error("Authentication failed:", error.response?.data || error.message);
        navigate("/login");   
    }
  };

  return (
    <div className='flex justify-between py-6 px-5 text-blue-900 bg-blue-200 fixed w-full'> 
        <h1 className='text-4xl font-bold cursor-none'><Link to="/">Blogify</Link></h1>
        <ul className='flex gap-10 mx-8 font-semibold text-xl '>
            <li className='hover:underline hover:text-2xl transition-all cursor-pointer'><Link to="/blog" onClick={handleNewBlog}>New Blog</Link></li>
            <li className='hover:underline hover:text-2xl transition-all cursor-pointer'><Link to="/login">Sign Up</Link></li>
            <li className='hover:underline hover:text-2xl transition-all cursor-pointer'><a href="https://github.com/Dhanush12212">About me</a></li>
        </ul>
    </div>
  )
}

export default Navbar