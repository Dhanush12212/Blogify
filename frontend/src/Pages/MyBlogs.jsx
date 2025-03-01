import React, { useEffect, useState } from 'react';
import Blog from '../Components/Blog';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

function MyBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  const handleDeleteBlog = (deletedBlogId) => {
    setBlogs((prevBlogs) => prevBlogs.filter(blog => blog._id !== deletedBlogId));
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/BlogHome/getAllBlogs', {
          withCredentials: true, 
        });
        console.log("API Response:", response.data);
        setBlogs(response.data.blog || []);  
      } catch (error) {
        setError('Error fetching blogs');
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-5xl font-bold text-blue-700 mt-6 text-center">📖 Explore Your Blogs</h1>

      {/* Create New Button */}
      <div className="mt-6">
        <Link to='/blog'>
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all">
            ➕ Create New Blog
          </button>
        </Link>
      </div>

      {/* Blog List */}
      <div className="w-full max-w-3xl mt-10 flex flex-col items-center gap-8">
        {error ? (
          <p className="text-red-500 text-xl text-center">{error}</p>
        ) : Array.isArray(blogs) && blogs.length > 0 ? (
          [...blogs].reverse().map((blog) => (
            <Blog key={blog._id} blog={blog} onDelete={handleDeleteBlog} />
          ))
        ) : (
          <p className="text-gray-600 text-xl text-center">No blogs found...</p>
        )}
      </div>
    </div>
  );
}

export default MyBlogs;
