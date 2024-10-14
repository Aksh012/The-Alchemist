// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ handleShowBookmarks }) {
  return (
    <nav className="bg-gradient-to-r from-green-700 via-green-600 to-teal-500 shadow-lg fixed top-0 left-0 w-full z-30">
      <div className="container mx-auto flex items-center py-4 px-8">
        {/* Logo */}
        <div className="flex-shrink-0 text-white text-2xl font-semibold">
          <img
            src="\images\logo-color.png"
            alt="AYURB Logo"
            className="h-16 ml-5 w-48 rounded-full"
          />
        </div>

        {/* Middle: Links */}
        <div className="flex-grow flex justify-center space-x-8">
          <Link
            to="/"
            className="pb-1 text-white hover:text-green-100 transition-colors duration-200 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
          </Link>
          <Link
            to="/login"
            className="pb-1 text-white hover:text-green-100 transition-colors duration-200 relative group"
          >
            Login
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
          </Link>
          <Link
            to="/register"
            className="pb-1 text-white hover:text-green-100 transition-colors duration-200 relative group"
          >
            Register
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
          </Link>
          <Link
            to="/health-wellness"
            className="pb-1 text-white hover:text-green-100 transition-colors duration-200 relative group"
          >
            Health
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
          </Link>
          <Link
            to="/bookmarks"
            className="pb-1 text-white hover:text-green-100 transition-colors duration-200 relative group"
          >
            Bookmark
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
