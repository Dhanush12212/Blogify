import React, { useEffect, useState } from 'react';
import Blog from '../Components/Blog';
import axios from 'axios';

function MyBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  // Fetch all blogs on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/BlogHome/getAllBlogs');
        setBlogs(response.data.blogs); // Assuming API returns an array of blogs
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
        ) : blogs.length > 0 ? (
          blogs.map((blog) => <Blog key={blog._id} blog={blog} />)
        ) : (
          <p className="text-gray-600 text-xl">No blogs found...</p>
        )}
      </div>
    </div>
  );
}

export default MyBlogs;
