import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ closeSidebar }) {
  return (
    <aside className="w-64 bg-white shadow-md h-screen p-6 border-r border-gray-200 fixed top-0 left-0 hidden md:block z-20">

      {/* Mobile close button */}
      <div className="flex items-center justify-between mb-4 md:hidden">
        <h2 className="text-lg font-bold text-indigo-700">👩‍🏫 Teacher Panel</h2>
        <button onClick={closeSidebar} className="p-2 rounded hover:bg-gray-100" aria-label="Close menu">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Header */}
      <h2 className="text-xl font-bold text-indigo-700 mb-8 hidden md:block">👩‍🏫 Teacher Panel</h2>

      {/* Navigation */}
      <nav className="space-y-6 text-gray-700 text-[16px] font-medium">
        <NavLink
          to="/teacher-dashboard"
          className={({ isActive }) =>
            isActive
              ? "block text-indigo-600 font-semibold"
              : "block hover:text-indigo-500 transition"
          }
        >
          📊 Teacher Dashboard
        </NavLink>

        <NavLink
          to="/teacher-dashboard/attendance"
          className={({ isActive }) =>
            isActive
              ? "block text-indigo-600 font-semibold"
              : "block hover:text-indigo-500 transition"
          }
        >
          🗓 Attendance
        </NavLink>

        <NavLink
          to="/teacher-dashboard/performance"
          className={({ isActive }) =>
            isActive
              ? "block text-indigo-600 font-semibold"
              : "block hover:text-indigo-500 transition"
          }
        >
          📈 Performance
        </NavLink>

        <NavLink
          to="/teacher-dashboard/test-notice-board"
          className={({ isActive }) =>
            isActive
              ? "block text-indigo-600 font-semibold"
              : "block hover:text-indigo-500 transition"
          }
        >
          📢 Notice Board
        </NavLink>

        <NavLink
          to="/teacher-dashboard/settings"
          className={({ isActive }) =>
            isActive
              ? "block text-indigo-600 font-semibold"
              : "block hover:text-indigo-500 transition"
          }
        >
          ⚙ Settings
        </NavLink>

        <NavLink
          to="/logout"
          className="block text-red-600 hover:text-red-800 transition"
        >
          🚪 Logout
        </NavLink>
      </nav>
    </aside>
  );
}