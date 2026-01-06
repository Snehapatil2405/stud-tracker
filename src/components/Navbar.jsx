import React from "react";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-between px-6 py-4
      bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200
      backdrop-blur-md shadow-lg border-b border-white/40"
    >
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-white/40 backdrop-blur-sm shadow-md" />
        <h1 className="font-bold text-gray-800 tracking-wide">
          Student Performance Tracker
        </h1>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-1 rounded-md 
          bg-white/40 border border-white/50 shadow-sm 
          hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200">
          <FiSearch className="text-gray-700" />
          <span className="text-sm font-medium text-gray-700">Search</span>
        </button>

        <button className="flex items-center gap-2 px-3 py-1 rounded-md 
          bg-white/40 border border-white/50 shadow-sm 
          hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200">
          <FiBell className="text-gray-700" />
          <span className="text-sm font-medium text-gray-700">Alerts</span>
        </button>

        <button className="flex items-center gap-2 px-3 py-1 rounded-md 
          bg-white/40 border border-white/50 shadow-sm 
          hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200">
          <FiUser className="text-gray-700" />
          <span className="text-sm font-medium text-gray-700">Profile</span>
        </button>
      </div>
    </header>
  );
};

export default Header;