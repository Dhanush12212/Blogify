import React from "react";
import ShareTo from "./ShareTo";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_URL from "../../config";

function Blog({ blog, onDelete }) {
  const navigate = useNavigate();

  if (!blog || !blog.title || !blog.content)
    return <p className="text-gray-600 text-xl">No blog data available.</p>;

  // Handle delete function
  const handleDelete = async () => {
    try {
      await axios.delete(
        `${API_URL}/BlogHome/deleteBlog/${blog._id}`,
        {
          withCredentials: true,
        }
      );
      if (onDelete) {
        onDelete(blog._id);
      }
    } catch (error) {
      console.error(
        "Failed to delete blog:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleUpdate = () => {
    navigate(`/updateBlog/${blog._id}`);
  };

  return (
    <div className="myBlog w-[95%] max-w-[800px] border rounded-lg shadow-lg hover:shadow-xl h-auto py-6 px-16 flex flex-col md:flex-row justify-between items-start gap-6 transition-all duration-300 bg-zinc-400">
  {/* Blog Title */}
  <p className="text-3xl font-bold text-gray-800 flex-shrink-0">{blog.title}</p>

  {/* Blog Content - Fixing Overflow */}
  <div
    className="text-lg text-gray-700 leading-relaxed break-words overflow-hidden max-w-full"
    dangerouslySetInnerHTML={{ __html: blog.content }}
  ></div>

  {/* Buttons */}
  <div className="flex flex-wrap gap-6 items-center">
    <button 
      className="text-xl font-bold text-green-700 border px-4 py-2 rounded-lg hover:bg-green-300 transition-all duration-300 cursor-pointer"
      onClick={handleUpdate}  
    >
      <ion-icon name="create-outline" className="text-2xl"></ion-icon>
    </button>

    <button 
      className="text-xl font-bold text-red-700 border px-4 py-2 rounded-lg hover:bg-red-300 transition-all duration-300 cursor-pointer"
      onClick={handleDelete}
    >
      <ion-icon name="trash-outline" className="text-2xl"></ion-icon>
    </button>

    <Popup
      trigger={
        <button className="border px-4 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-300 cursor-pointer">
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
