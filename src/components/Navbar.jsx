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

import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">
        🎓 Student <span className="text-yellow-300">Tracker</span>
      </h1>

      {/* Search + Profile */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-3 py-1.5 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <span className="absolute left-2 top-2 text-gray-500">🔍</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-sm font-bold">
          SP
        </div>
      </div>
    </header>
  );
}
