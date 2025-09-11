import React from "react";
import { NavLink } from "react-router-dom";

const base =
  "px-3 py-2 rounded-lg transition text-sm font-medium";
const active = "bg-indigo-100 text-indigo-700";
const idle = "text-slate-700 hover:bg-indigo-50";

const NavItems = ({ onClick }) => (
  <nav className="p-4 flex flex-col gap-1" onClick={onClick}>
    <NavLink to="/" end className={({isActive}) => `${base} ${isActive?active:idle}`}>🏠 Dashboard</NavLink>
    <NavLink to="/students" className={({isActive}) => `${base} ${isActive?active:idle}`}>🎓 Students</NavLink>
    <NavLink to="/add-student" className={({isActive}) => `${base} ${isActive?active:idle}`}>➕ Add Student</NavLink>
    <NavLink to="/attendance" className={({isActive}) => `${base} ${isActive?active:idle}`}>📅 Attendance</NavLink>
    <NavLink to="/performance" className={({isActive}) => `${base} ${isActive?active:idle}`}>📈 Performance</NavLink>
    <NavLink to="/settings" className={({isActive}) => `${base} ${isActive?active:idle}`}>⚙️ Settings</NavLink>
  </nav>
);

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* desktop */}
      <aside className="w-60 shrink-0 border-r bg-white hidden md:block">
        <NavItems />
      </aside>

      {/* mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/30 md:hidden"
          onClick={onClose}
        >
          <aside
            className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b">
              <div className="font-semibold">Menu</div>
              <button
                className="px-2 py-1 rounded hover:bg-slate-100"
                onClick={onClose}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <NavItems onClick={onClose} />
          </aside>
        </div>
      )}
    </>
  );
}
