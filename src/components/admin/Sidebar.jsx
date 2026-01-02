import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaChalkboardTeacher, FaBell, FaEnvelope, FaSchool, FaBook, FaChartLine, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-indigo-700 to-indigo-900 text-white shadow-lg">
      <div className="px-6 py-4 border-b border-indigo-600">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav className="p-4 space-y-2">
        <NavItem to="/admin/dashboard" icon={<FaTachometerAlt />} label="Dashboard" />
        <NavItem to="/admin/students" icon={<FaUsers />} label="Students" />
        <NavItem to="/admin/teachers" icon={<FaChalkboardTeacher />} label="Teachers" />
        <NavItem to="/admin/notices" icon={<FaBell />} label="Notices" />
        <NavItem to="/admin/messages" icon={<FaEnvelope />} label="Messages" />
        <NavItem to="/admin/classes" icon={<FaSchool />} label="Classes" />
        <NavItem to="/admin/subjects" icon={<FaBook />} label="Subjects" />
        <NavItem to="/admin/analytics" icon={<FaChartLine />} label="Analytics" />
        <NavItem to="/admin/settings" icon={<FaCog />} label="Settings" />
      </nav>
    </aside>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-md transition ${
          isActive
            ? "bg-indigo-600 text-white font-semibold"
            : "hover:bg-indigo-500 hover:text-white"
        }`
      }
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
}