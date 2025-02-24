import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HomeNav() {

    const navigate = useNavigate();

    const handleLogout = async() => {
        try {
            await axios.post('http://localhost:8000/api/Auth/logout')
            navigate('/login');
        } catch (error) {
            console.log("Logout Failed: ",error);
            
        }
    }

  return (
    <div className='flex justify-between items-center py-6 px-5 text-blue-900 bg-blue-200 fixed w-full top-0 left-0 z-50'> 
        <h1 className='text-4xl font-bold cursor-pointer'>
          <Link to="/">Blogify</Link>
        </h1>
        <ul className='flex gap-6 sm:gap-10 mx-8 font-semibold text-xl'> 
            <li className='hover:underline hover:text-2xl transition-all cursor-pointer'>
              <a href="https://github.com/Dhanush12212" target="_blank" rel="noopener noreferrer">About me</a>
            </li>
            <li >
              <button className='hover:underline hover:text-2xl transition-all cursor-pointer text-red-500' onClick={handleLogout}>Log out</button>
            </li>
        </ul>
    </div>
  );
}

export default HomeNav;
