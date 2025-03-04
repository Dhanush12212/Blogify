import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import API_URL from "../../config";

function UpdateBlog() {
  const { blogId } = useParams(); // Get blog ID from URL
  const [blog, setBlog] = useState({ title: "", content: "" });
  const [message, setMessage] = useState("");  
  const navigate = useNavigate();

  // Fetch existing blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/BlogHome/getBlog/${blogId}`,
          { withCredentials: true }
        );
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
        `${API_URL}/BlogHome/updatedBlog/${blogId}`,
        blog,
        { withCredentials: true }
      );
       
      setMessage("Blog updated successfully! 🎉");
 
      setTimeout(() => {
        navigate("/myBlogs");
      }, 2000);

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
      <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold text-blue-600 py-4 text-center">
        Time for a Makeover – Update Your Blog!
      </h1>

      {/*  Success Message */}
      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg w-3/4 text-center">
          {message}
        </div>
      )}

      <form 
        onSubmit={handleUpdateBlog} 
        className="blogContainer w-full h-full flex flex-col items-center gap-6 bg-white py-10 px-5 rounded-lg shadow-lg overflow-auto"
      >
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
        <div className="lg:w-3/4 md:w-[80%] h-full">
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

        {/* Save Button */}
        <div className="w-3/4 flex justify-end gap-6 mt-20 z-10">
          <button
            type="submit"
            className="px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-900 transition cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateBlog;
