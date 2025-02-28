import React from 'react';
import ShareTo from './ShareTo';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';

function Blog({ blog, onDelete }) {  // Ensure onDelete is received
  if (!blog) return <p className="text-gray-600 text-xl">No blog data available.</p>;

  // Handle delete function
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/BlogHome/deleteBlog/${blog._id}`, {
        withCredentials: true,
      });
      if (onDelete) {
        onDelete(blog._id);  // Call onDelete to update UI
      }
    } catch (error) {
      console.error("Failed to delete blog:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="w-[90%] border-2 rounded-lg shadow-lg hover:shadow-xl h-auto p-5 flex flex-col md:flex-row justify-between items-start gap-6 transition-all duration-300 bg-white">
      <p className="text-2xl font-bold text-gray-800">{blog.title}</p>

      <div className="text-lg text-gray-600 line-clamp-3">
        <p dangerouslySetInnerHTML={{ __html: blog.content }}></p>
      </div>

      <div className="flex flex-row gap-4 items-center">
        <button className="text-xl font-bold text-green-700 border px-3 py-2 rounded hover:bg-green-100 transition-all duration-300 cursor-pointer">
          <ion-icon name="create-outline" className="text-2xl"></ion-icon>
        </button>

        {/* Delete Button */}
        <button 
          className="text-xl font-bold text-red-700 border px-3 py-2 rounded hover:bg-red-100 transition-all duration-300 cursor-pointer"
          onClick={handleDelete}
        > 
          <ion-icon name="trash-outline" className="text-2xl"></ion-icon> 
        </button>

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
    </div>
  );
}

export default Blog;
