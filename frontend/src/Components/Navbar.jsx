import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();

  const handleNewBlog = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/BlogHome", {
        withCredentials: true,
      });
      console.log("User authenticated:", response.data);
      navigate("/blog");
    } catch (error) {
      console.error("Authentication failed:", error.response?.data || error.message);
      navigate("/login");
    }
  };

return (
  <nav className="flex justify-between items-center py-4 px-4 bg-blue-600 text-white fixed top-0 w-full shadow-lg z-50">
    {/* Logo */}
    <h1 className="logo text-3xl md:text-2xl sm:text-xl font-bold tracking-wide"> 
      <Link to="/" className="hover:text-gray-300 transition-colors">Blogify</Link>
    </h1>

    {/* Navigation Links */}
    <ul className="nav flex gap-6 justify-around md:text-xl sm:text-lg xs:text-sm font-medium ml-8">
      <li className="hover:scale-105 transition-transform">
        <Link to="/blog" onClick={handleNewBlog} className="hover:text-gray-300">New Blog</Link>
      </li>
      <li className="hover:scale-105 transition-transform">
        <Link to="/login" className="hover:text-gray-300">Sign Up</Link>
      </li>
      <li className="hover:scale-105 transition-transform">
        <a href="https://github.com/Dhanush12212" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">About Me</a>
      </li>
    </ul>
  </nav>
);
}

export default Navbar;

