import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between py-6 px-5 text-blue-900 bg-blue-200 fixed w-full'>
        <h1 className='text-4xl font-bold cursor-none'>Blogify</h1>
        <ul className='flex gap-10 mr-10 font-semibold text-xl ml-6'>
            <li className='hover:underline hover:text-2xl transition-all cursor-pointer'><a href="">New Blog</a></li>
            <li className='hover:underline hover:text-2xl transition-all cursor-pointer'><a href="">Sign Up</a></li>
            <li className='hover:underline hover:text-2xl transition-all cursor-pointer'><a href="">About</a></li>
        </ul>
    </div>
  )
}

export default Navbar