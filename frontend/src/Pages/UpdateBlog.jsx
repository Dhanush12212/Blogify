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
        `http://localhost:8000/api/BlogHome/updatedBlog/${blogId}`,
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
    <div>
      <h1 className="text-4xl font-bold text-blue-500 mt-12 py-4 text-center">
        Time for a Makeover – Update Your Blog!
      </h1>

      <form onSubmit={handleUpdateBlog}>
        {/* Title */}
        <div className="flex justify-center mt-4">
          <label htmlFor="Title" className="text-2xl mr-3 underline tracking-wider font-semibold">
            Title:
          </label>
          <input
            type="text"
            value={blog.title }
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            name="title"
            className="border-b-2 outline-none px-5 text-center text-2xl font-medium"
          />
        </div>

        <div className="flex justify-end gap-6 px-48 text-lg font-medium">
          <button
            type="submit"
            className="border-2 px-8 py-2 rounded hover:bg-green-900 hover:text-white hover:transition-all cursor-pointer"
          >
            Save
          </button>
        </div>

        {/* Text Editor */}
        <div className="w-full py-3 text-center px-48">
          <ReactQuill
            name="Content"
            value={blog.content}
            onChange={(value) => setBlog({ ...blog, content: value })}
            modules={{ toolbar: toolbarOptions }}
            theme="snow"
            className="h-screen bg-zinc-300 border-3"
            placeholder="You Can Start from here.."
          />
        </div>
      </form>
    </div>
  );
}

export default UpdateBlog;
