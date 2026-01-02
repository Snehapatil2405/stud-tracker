import React from "react";
import { FaBell } from "react-icons/fa";

export default function Navbar({ unreadCount = 0, onOpenSidebar }) {
  return (
    <nav
      role="navigation"
      className="fixed top-0 left-0 right-0 h-14 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-4 md:px-6 flex items-center justify-between shadow-md z-50"
    >
      {/* Mobile hamburger (visible md:hidden) */}
      <button
        onClick={onOpenSidebar}
        className="md:hidden p-2 rounded hover:bg-white/10 mr-2"
        aria-label="Open menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Left: Logo or Title */}
      <div className="flex items-center gap-3">
        <div className="text-lg md:text-xl font-bold tracking-wide select-none">
          🎓 Student Performance Tracker
        </div>
      </div>

      {/* Right: Notification Bell */}
      <div className="relative flex items-center gap-2">
        <button
          aria-label="Notifications"
          className="p-1 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <FaBell size={18} className="cursor-pointer" />
        </button>

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
