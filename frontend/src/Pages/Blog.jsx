import React from 'react';
import HomeNav from '../Components/HomeNav'; 
import ReactQuills from '../Components/ReactQuillS';

function Blog() {
  return (
    <div>
      <HomeNav/>
      <h1 className='text-3xl font-semibold text-blue-500 mt-28 py-5 text-center'>...You can create New Blog here...</h1>
      <ReactQuills/>
    </div>
  )
}

export default Blog