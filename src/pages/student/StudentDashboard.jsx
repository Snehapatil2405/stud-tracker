import React, { useState, useEffect } from 'react'; // useEffect add kela
// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, BarChart3, CalendarCheck, GraduationCap, 
  FileText, BookOpen, Settings, LogOut, Bell, Search, Menu, X,
  Mail, MessageSquare 
} from 'lucide-react';

const StudentDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // --- NAV SYNC LOGIC (Fakt hevdhach navin add kela aahe) ---
  const [navProfile, setNavProfile] = useState({
    name: "Seema Patil",
    academic: "TY-BCA STUDENT",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Seema"
  });

  useEffect(() => {
    const syncData = () => {
      const savedData = localStorage.getItem('user_profile');
      if (savedData) {
        setNavProfile(JSON.parse(savedData));
      }
    };
    syncData(); 
    window.addEventListener('storage_update', syncData);
    return () => window.removeEventListener('storage_update', syncData);
  }, []);
  // -------------------------------------------------------

  const menuItems = [
    { id: 'Overview', icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/student-dashboard' },
    { id: 'Analytics', icon: <BarChart3 size={20} />, label: 'My Performance', path: '/student-dashboard/analytics' },
    { id: 'StdAttendance', icon: <CalendarCheck size={20} />, label: 'Attendance', path: '/student-dashboard/attendance' },
    { id: 'student-notice-board', icon: <MessageSquare size={20} />, label: 'Notice Board', path: '/student-dashboard/student-notice-board' },
    { id: 'contact-teacher', icon: <Mail size={20} />, label: 'Contact Teacher', path: '/student-dashboard/contact-teacher' },
    { id: 'Academic', icon: <GraduationCap size={20} />, label: 'Academic Records', path: '/student-dashboard/academic' },
    { id: 'Resources', icon: <BookOpen size={20} />, label: 'Resource Vault', path: '/student-dashboard/resources' },
  ];

  return (
    <div className="fixed inset-0 h-screen w-screen bg-[#F8FAFC] text-slate-800 flex overflow-hidden z-[999]">
      
      {/* --- SIDEBAR --- */}
      <motion.aside 
        animate={{ width: isSidebarOpen ? '280px' : '80px' }}
        className="bg-[#0F172A] flex flex-col transition-all duration-300 shadow-2xl z-50"
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <GraduationCap className="text-white" size={22} />
          </div>
          {isSidebarOpen && (
            <span className="text-lg font-black tracking-tight text-white whitespace-nowrap">YCM PORTAL</span>
          )}
        </div>

        <nav className="flex-1 px-3 space-y-1 mt-4 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3.5 p-3 rounded-xl transition-all group ${
                  isActive 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="min-w-[20px]">{item.icon}</div>
                {isSidebarOpen && <span className="font-semibold text-sm tracking-wide">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-1">
          <button 
            onClick={() => navigate('/student-dashboard/student-settings')}
            className={`w-full flex items-center gap-3.5 p-3 rounded-xl transition-all text-slate-400 hover:bg-white/5 hover:text-white`}
          >
            <Settings size={20} />
            {isSidebarOpen && <span className="font-semibold text-sm">Settings</span>}
          </button>
          <button 
            onClick={() => navigate('/logout')}
            className="w-full flex items-center gap-3.5 p-3 rounded-xl text-rose-400 hover:bg-rose-500/10 transition-all font-bold"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="text-sm uppercase tracking-wider font-black">Sign Out</span>}
          </button>
        </div>
      </motion.aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        
        {/* Navbar (Sync with navProfile state) */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 z-40">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-all"
            >
              <Menu size={20} />
            </button>
            <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-4 py-2 w-72 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
              <Search size={16} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="bg-transparent border-none outline-none px-3 text-sm w-full text-slate-700 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-all">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-800 leading-none">{navProfile.name}</p>
                <p className="text-[11px] text-indigo-600 font-[1000] uppercase mt-1 tracking-tighter">
                  {navProfile.academic}
                </p>
              </div>
              <div className="w-10 h-10 bg-indigo-100 rounded-xl overflow-hidden border border-indigo-200 shadow-sm">
                <img 
                  src={navProfile.avatar} 
                  className="w-full h-full object-cover" 
                  alt="avatar" 
                />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard Body */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-7xl mx-auto">
            <div className="w-full">
               <Outlet /> 
               {location.pathname === '/student-dashboard' && (
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Default Dashboard Content */}
                 </div>
               )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;