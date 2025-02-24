import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between py-6 px-5 text-blue-900 bg-blue-200 fixed w-full'> 
        <h1 className='text-4xl font-bold cursor-none'><Link to="/">Blogify</Link></h1>
        <ul className='flex gap-10 mx-8 font-semibold text-xl '>
            <li className='hover:underline hover:text-2xl transition-all cursor-pointer'><Link to="/blog">New Blog</Link></li>
            <li className='hover:underline hover:text-2xl transition-all cursor-pointer'><Link to="/login">Sign Up</Link></li>
            <li className='hover:underline hover:text-2xl transition-all cursor-pointer'><a href="https://github.com/Dhanush12212">About me</a></li>
        </ul>
    </div>
  )
}

export default Navbar