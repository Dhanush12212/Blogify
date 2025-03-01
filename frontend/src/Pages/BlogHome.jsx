import React, { useState } from "react";
import HomeNav from "../Components/HomeNav";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ShareTo from "../Components/ShareTo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BlogHome() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const createNewBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://blogify-8a16.onrender.com/api/BlogHome/createBlog",
        { title, content },
        { withCredentials: true }
      );
      navigate("/myBlogs");
      console.log("Created New Blog: ", response.data);
    } catch (error) {
      console.log("Failed to Create Blog: ", error);
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
    <div className="w-screen h-screen flex flex-col bg-gray-100">
      {/* Navigation */}
      <HomeNav />

      {/* Blog Container */}
      <div className="w-full h-full flex flex-col px-16 py-8 mt-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold text-blue-600">✍️ Create Your Blog</h1>
          <div className="flex gap-4">
            <button
              onClick={createNewBlog}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all"
            >
              ✅ Save
            </button>
            <Popup
              trigger={
                <button className="bg-yellow-400 px-6 py-2 rounded-lg hover:bg-yellow-500 transition-all">
                  🔗 Share
                </button>
              }
              position="top center"
            >
              <ShareTo />
            </Popup>
          </div>
        </div>

        {/* Blog Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          className="w-full border rounded-lg py-2 px-4 text-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your blog title..."
        />

        {/* Text Editor */}
        <div className="w-full flex-grow mt-6">
          <ReactQuill
            name="Content"
            value={content}
            onChange={setContent}
            modules={{ toolbar: toolbarOptions }}
            theme="snow"
            className="h-full bg-gray-200 border rounded-lg shadow-md"
            placeholder="Start writing your blog..."
          />
        </div>
      </div>
    </div>
  );
}

export default BlogHome;
