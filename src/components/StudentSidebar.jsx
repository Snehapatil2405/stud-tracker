import React from "react";
import { NavLink } from "react-router-dom";
import { ChartBarIcon, CogIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline"; // add this

export default function StudentSidebar() {
  return (
    <aside className="w-64 bg-white shadow-xl h-screen p-6 border-r border-gray-200 fixed top-0 left-0 hidden md:block z-20">
      {/* Header */}
      <h2 className="text-2xl font-bold text-purple-700 mb-8">🎓 Student Panel</h2>

      {/* Navigation */}
      <nav className="space-y-6 text-[17px] font-medium text-gray-700">
        <NavLink
          to="/student-dashboard"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 text-purple-600 font-semibold"
              : "flex items-center gap-3 hover:text-purple-500 transition"
          }
        >
          <ChartBarIcon className="w-5 h-5 text-purple-500" />
          My Performance
        </NavLink>

        {/* NEW: Contact Teacher */}
        <NavLink
          to="/student-dashboard/contact-teacher"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 text-purple-600 font-semibold"
              : "flex items-center gap-3 hover:text-purple-500 transition"
          }
        >
          <EnvelopeIcon className="w-5 h-5 text-purple-500" />
          Contact Teacher
        </NavLink>

        <NavLink
          to="/student-dashboard/student-notice-board"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 text-purple-600 font-semibold"
              : "flex items-center gap-3 hover:text-purple-500 transition"
          }
        >
          <EnvelopeIcon className="w-5 h-5 text-purple-500" />
          Student Notice Board
        </NavLink>

        <NavLink
          to="/student-dashboard/Student-settings"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 text-purple-600 font-semibold"
              : "flex items-center gap-3 hover:text-purple-500 transition"
          }
        >
          <CogIcon className="w-5 h-5 text-purple-500" />
          Settings
        </NavLink>

        <NavLink
          to="/logout"
          className="flex items-center gap-3 text-red-600 hover:text-red-700 transition"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5 text-red-500" />
          Logout
        </NavLink>
      </nav>
    </aside>
  );
}
