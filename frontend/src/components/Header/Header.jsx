import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-white-200 via-white-400 to-white-500 text-black rounded-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-[#070808]">
         AI Magic Video
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link
            to="/"
            className="text-black py-2 px-4 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/register"
            className="text-black py-2 px-4 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="text-black py-2 px-4 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
