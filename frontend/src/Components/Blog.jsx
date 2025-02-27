import React, { useEffect, useState } from 'react';
import ShareTo from './ShareTo';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';

function Blog() {
  const [blog, setBlog] = useState(null); // Store blog data
  const [error, setError] = useState(null); // Store errors

  // Fetch blogs on component mount
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/BlogHome/getAllBlogs');
        setBlog(response.data.blogs[0]); // Assuming API returns an array of blogs
      } catch (error) {
        setError('Error fetching blogs');
        console.error(error);
      }
    };
    
    fetchBlog();
  }, []);

  return (
    <div className="w-[90%] border-2 rounded-lg shadow-lg hover:shadow-xl h-auto p-5 flex flex-col md:flex-row justify-between items-start gap-6 transition-all duration-300 bg-white">
      
      {error ? (
        <p className="text-red-500 text-xl">{error}</p>
      ) : blog ? (
        <>
          {/* Blog Title */}
          <p className="text-2xl font-bold text-gray-800">{blog.title}</p>

          {/* Blog Content */}
          <p className="text-lg text-gray-600 line-clamp-3">
            {blog.content}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-row gap-4 items-center">
            <button className="text-xl font-bold text-green-700 border px-3 py-2 rounded hover:bg-green-100 transition-all duration-300 cursor-pointer">
              <ion-icon name="create-outline" className="text-2xl"></ion-icon>
            </button>
            
            <button className="text-xl font-bold text-red-700 border px-3 py-2 rounded hover:bg-red-100 transition-all duration-300 cursor-pointer">
              <ion-icon name="trash-outline" className="text-2xl"></ion-icon>
            </button>

            {/* Share Button with Popup */}
            <Popup 
              trigger={
                <button className="border px-3 py-2 rounded hover:bg-yellow-300 transition-all duration-300 cursor-pointer">
                  <ion-icon name="share-social-outline" className="text-2xl"></ion-icon>
                </button>
              } 
              position="top center"
            > 
              <ShareTo />
            </Popup>
          </div>
        </>
      ) : (
        <p className="text-gray-600 text-xl">Loading...</p>
      )}
    </div>
  );
}

export default Blog;
