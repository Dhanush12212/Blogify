import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../../config";

function HomeNav() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${API_URL}/Auth/logout`, {},
         { withCredentials: true }
        );
      navigate("/login");
    } catch (error) {
      console.log("Logout Failed: ", error);
    }
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-blue-600 text-white fixed w-full top-0 left-0 z-50 shadow-lg">
      {/* Logo */}
      <h1 className="logo text-3xl font-bold tracking-wide">
        <Link to="/" className=" hover:text-gray-300 transition-colors">Blogify</Link>
      </h1>

      {/* Navigation Links */}
      <ul className="nav flex items-center gap-8 text-lg font-medium">
        <li className="flex items-center">
          <Link to="/myBlogs" className="hover:text-gray-300 hover:scale-105 transition-transform">My Blogs</Link>
        </li>
        <li className="flex items-center">
          <a href="https://github.com/Dhanush12212" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 hover:scale-105 transition-transform">
            About Me
          </a>
        </li>
        <li className="flex items-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-all cursor-pointer"
          >
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default HomeNav;
