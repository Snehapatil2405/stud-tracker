/*import React from "react";

export default function Navbar({ onMenu }) {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-indigo-600 to-purple-600 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      
        <button
          onClick={onMenu}
          className="md:hidden text-white/90 px-2 py-1 rounded hover:bg-white/10"
          aria-label="Open menu"
        >
          ☰
        </button>


        <div className="flex items-center gap-2">
          <span className="text-2xl">🎓</span>
          <h1 className="text-white text-xl sm:text-2xl font-bold tracking-wide">
            Student <span className="text-yellow-300">Tracker</span>
          </h1>
        </div>

       
        <div className="hidden sm:flex items-center gap-3">
          <input
            placeholder="Search…"
            className="rounded-xl px-3 py-1.5 text-sm outline-none"
          />
          <div className="w-9 h-9 rounded-full bg-white/20 grid place-items-center text-white font-semibold">
            SP
          </div>
        </div>
      </div>
    </header>
  );
}*/

/*import React from "react";
import { Search } from "lucide-react"; // icon

export default function Navbar() {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-3">
       
        <div className="flex items-center gap-2 text-lg font-bold">
          🎓 <span className="text-white">Student</span>
          <span className="text-yellow-300">Tracker</span>
        </div>

       
        <div className="flex items-center gap-4">
        
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-3 py-1.5 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          </div>

          
          <div className="h-9 w-9 flex items-center justify-center rounded-full bg-pink-500 cursor-pointer hover:opacity-90">
            SP
          </div>
        </div>
      </div>
    </header>
  );
}*/

/*import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-6 py-3">
       
        <h1 className="text-lg font-bold flex items-center gap-2">
          🎓 <span>Student <span className="text-yellow-300">Tracker</span></span>
        </h1>

        
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-700 placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
          />
          <Search
            className="absolute left-3 top-2.5 text-gray-400"
            size={18}
          />
        </div>

        
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center font-bold">
            SP
          </div>
        </div>
      </div>
    </header>
  );
}*/

/*export default function Navbar() {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-6 py-3">
        
        <h1 className="text-lg font-bold flex items-center gap-2">
          🎓 Student <span className="text-yellow-300">Tracker</span>
        </h1>

        
        <div className="relative w-190">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-700 
                       placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-purple-400 shadow-sm"
          />
          <svg
            className="absolute left-3 top-2.5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="18"
            height="18"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
            />
          </svg>
        </div>

        
        <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center font-bold">
          SP
        </div>
      </div>
    </header>
  );
}*/

import React, { useState } from "react";
import { Search } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left - Logo */}
        <h1 className="text-2xl font-bold flex items-center gap-2">
          🎓{" "}
          <span>
            Student <span className="text-yellow-400">Tracker</span>
          </span>
        </h1>

        {/* Center - Search */}
        <div className="relative w-full max-w-md hidden md:block">
          <SearchBar placeholder="Search students, attendance, performance..." />
        </div>

        {/* Right - Notification + Profile */}
        <div className="flex items-center gap-6">
          {/* Notification */}
          <div className="relative">
            <button className="text-xl">🔔</button>
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1 rounded-full"></span>
          </div>

          {/* Profile Avatar */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center font-bold"
            >
              SP
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2">
                <NavLink
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium hover:bg-indigo-50 transition"
                >
                  👤 My Profile
                </NavLink>
                <a
                  href="/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  ⚙️ Settings
                </a>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
