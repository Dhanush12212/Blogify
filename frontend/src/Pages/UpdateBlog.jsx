import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function UpdateBlog() {
  const { blogId } = useParams(); // Get blog ID from URL
  const [blog, setBlog] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  // Fetch existing blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/BlogHome/getBlog/${blogId}`,
          {
            withCredentials: true, // ✅ Required to send cookies
          }
        );
        console.log("Fetched single blog");
        
        setBlog(response.data);
      } catch (error) {
        console.error("Failed to fetch blog:", error.response?.data?.message || error.message);
      }
    };
  
    fetchBlog();
  }, [blogId]);
  

  // Handle Update function
  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://blogify-8a16.onrender.com/api/BlogHome/updatedBlog/${blogId}`,
        blog,
        { withCredentials: true }
      );
      navigate("/myBlogs");
      console.log("Blog updated successfully");
    } catch (error) {
      console.error("Failed to update blog:", error.response?.data?.message || error.message);
    }
  };

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ["clean"],
  ];

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gray-100 p-5">
      <h1 className="text-4xl font-bold text-blue-600 py-4 text-center">
      Time for a Makeover – Update Your Blog!
      </h1>

      <form 
        onSubmit={handleUpdateBlog} 
        className="w-full h-full flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-lg overflow-auto">
        {/* Title */}
        <div className="w-3/4 flex flex-col">
          <label htmlFor="Title" className="text-xl font-semibold mb-2">
            Title:
          </label>
          <input
            type="text"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            name="title"
            className="w-full p-3 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Text Editor */}
        <div className="w-3/4 h-full">
          <label htmlFor="Content" className="text-xl font-semibold mb-2 block">
            Content:
          </label>
          <ReactQuill
            name="Content"
            value={blog.content}
            onChange={(value) => setBlog({ ...blog, content: value })}
            modules={{ toolbar: toolbarOptions }}
            theme="snow"
            className="h-full bg-white border rounded-md"
            placeholder="Write something amazing..."
          />
        </div>

        {/* Buttons */}
        <div className="w-3/4 flex justify-end gap-6 mt-4">
          <button
            type="submit"
            className="px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-900 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateBlog;
