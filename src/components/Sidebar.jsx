import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md h-screen p-6 fixed md:static z-10">
      {/* Header */}
      <h2 className="text-xl font-bold text-indigo-700 mb-8">
        👩‍🏫 Teacher Panel
      </h2>

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
          to="/attendance"
          className={({ isActive }) =>
            isActive
              ? "block text-indigo-600 font-semibold"
              : "block hover:text-indigo-500 transition"
          }
        >
          🗓️ Attendance
        </NavLink>

        <NavLink
          to="/performance"
          className={({ isActive }) =>
            isActive
              ? "block text-indigo-600 font-semibold"
              : "block hover:text-indigo-500 transition"
          }
        >
          📈 Performance
        </NavLink>

        <NavLink
          to="/test-notice-board"
          className={({ isActive }) =>
            isActive
              ? "block text-indigo-600 font-semibold"
              : "block hover:text-indigo-500 transition"
          }
        >
          📢 Notice Board
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "block text-indigo-600 font-semibold"
              : "block hover:text-indigo-500 transition"
          }
        >
          ⚙️ Settings
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
