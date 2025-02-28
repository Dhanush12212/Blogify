import React, { useEffect, useState } from 'react';
import Blog from '../Components/Blog';
import axios from 'axios';

function MyBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  // Function to delete a blog from UI after successful deletion
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
    <div>
      <h1 className="text-4xl font-bold text-blue-500 text-center mt-5">
        📖 Explore Your Blogs
      </h1>

      <div className="flex justify-center mt-12 flex-col items-center gap-10">
        {error ? (
          <p className="text-red-500 text-xl">{error}</p>
        ) : Array.isArray(blogs) && blogs.length > 0 ? (   
          [...blogs].reverse().map((blog) => (
            <Blog key={blog._id} blog={blog} onDelete={handleDeleteBlog} />
          ))
        ) : (
          <p className="text-gray-600 text-xl">No blogs found...</p>
        )}
      </div>
    </div>
  );
}

export default MyBlogs;
