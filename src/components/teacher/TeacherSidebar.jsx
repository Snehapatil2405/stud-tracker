import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Zap, LayoutDashboard, ClipboardCheck, FileUp, 
  Users, Megaphone, MessageSquare, BookOpen, Settings, LogOut 
} from 'lucide-react';

const TeacherSidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: '', label: 'Overview', icon: LayoutDashboard },
    { id: 'attendance', label: 'Attendance', icon: ClipboardCheck },
    { id: 'resources', label: 'Resource Vault', icon: FileUp },
    { id: 'roster', label: 'Class Roster', icon: Users },
    { id: 'broadcast', label: 'Announcements', icon: Megaphone },
    { id: 'query-hub', label: 'Queries', icon: MessageSquare },
    { id: 'assignments', label: 'Assignments', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Logout फंक्शन
  const handleLogout = () => {
    // इथे तुझे Logout लॉजिक येईल (उदा. token delete करणे)
    navigate('/logout'); 
  };

  return (
   
    <motion.aside 
      animate={{ width: isOpen ? 280 : 100 }}
      className="bg-[#0f172a] h-screen sticky top-0 flex flex-col p-6 z-50 shadow-2xl"
    >
      {/* Logo Section */}
      <div className="flex items-center gap-4 mb-12 px-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/40">
          <Zap size={28} className="text-white" fill="white" />
        </div>
        {isOpen && <h1 className="text-xl font-black text-white tracking-tighter uppercase">Teacher<span className="text-emerald-500">Pro</span></h1>}
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-2 overflow-y-auto custom-scrollbar pr-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === `/teacher-dashboard${item.id ? '/' + item.id : ''}`;
          return (
            <button
              key={item.id}
              onClick={() => navigate(`/teacher-dashboard/${item.id}`)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                isActive ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
              }`}
            >
              <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              {isOpen && <span className="font-bold text-sm tracking-wide">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Logout Section (At the bottom) */}
      <div className="mt-auto pt-6 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-400 hover:bg-red-500/10 transition-all duration-300 group"
        >
          <LogOut size={22} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
          {isOpen && <span className="font-bold text-sm tracking-wide">Logout</span>}
        </button>
      </div>
    </motion.aside>
  );
};

export default TeacherSidebar;