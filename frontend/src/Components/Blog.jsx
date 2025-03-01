import React from 'react';
import ShareTo from './ShareTo';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Blog({ blog, onDelete }) {   

  const navigate = useNavigate();
  
  if (!blog || !blog.title || !blog.content ) 
    return <p className="text-gray-600 text-xl">No blog data available.</p>;

  // Handle delete function
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/BlogHome/deleteBlog/${blog._id}`, {
        withCredentials: true,
      });
      if (onDelete) {
        onDelete(blog._id); 
      }
    } catch (error) {
      console.error("Failed to delete blog:", error.response?.data?.message || error.message);
    }
  };

  const handleUpdate = () => { 
      navigate(`/updateBlog/${blog._id}`); 
  }; 

  return (
    <div className="w-[90%] border-2 rounded-lg shadow-lg hover:shadow-xl h-auto py-3 px-12 flex flex-col md:flex-row justify-between items-start gap-6 transition-all duration-300 bg-zinc-400">
      <p className="text-2xl font-bold text-gray-800">{blog.title}</p>

      <div className="text-lg text-gray-600" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
 
      {/* Edit Button */}
      <div className="flex flex-row gap-4 items-center">
        <button 
          className="text-xl font-bold text-green-700 border px-3 py-2 rounded hover:bg-green-300 transition-all duration-300 cursor-pointer"
          onClick={handleUpdate}
        >
          <ion-icon name="create-outline" className="text-2xl"></ion-icon>
        </button>

        {/* Delete Button */}
        <button 
          className="text-xl font-bold text-red-700 border px-3 py-2 rounded hover:bg-red-300 transition-all duration-300 cursor-pointer"
          onClick={handleDelete}
        > 
          <ion-icon name="trash-outline" className="text-2xl"></ion-icon> 
        </button>

        <Popup 
          trigger={
            <button className="border px-3 py-2 rounded hover:bg-yellow-300 transition-all duration-300 cursor-pointer">
               <ion-icon name="share-social-outline" className="text-2xl"></ion-icon>  {/*fix the className */}
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
