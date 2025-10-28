import React from "react";
import { FaBell } from "react-icons/fa";

export default function Navbar({ unreadCount = 0 }) {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-6 py-3 flex items-center justify-between shadow-md sticky top-0 z-50">
      {/* Left: Logo or Title */}
      <div className="text-xl font-bold tracking-wide">🎓 Student Tracker</div>

      {/* Right: Notification Bell */}
      <div className="relative flex items-center gap-2">
        <FaBell size={22} className="cursor-pointer hover:text-yellow-300 transition" />
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full font-semibold">
            {unreadCount}
          </span>
        )}
        <span className="text-sm hidden md:inline">Notifications</span>
      </div>
    </nav>
  );
}