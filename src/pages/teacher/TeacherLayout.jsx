import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import {
    LayoutDashboard, MessageSquare, QrCode, ClipboardList,
    Users, Megaphone, Settings, LogOut, Bell, Search,
    Menu, X, ChevronRight, Zap, ShieldCheck
} from 'lucide-react';

const TeacherLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [showNotifications, setShowNotifications] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Mock Notifications for the Global Bell
    const [notifications] = useState([
        { id: 1, title: "New Message", sender: "Omkar Patil", time: "2m ago", type: "query" },
        { id: 2, title: "Assignment", sender: "SY-BCA Class", time: "15m ago", type: "submission" },
    ]);

    // TeacherLayout.jsx madhe states chya khali add kara
    useEffect(() => {
        console.log("Teacher Dashboard Mounted");
        // Ithe nantar profile sync logic yeil
    }, []);

    const menuItems = [
        { id: 'dashboard', icon: <LayoutDashboard size={22} />, label: 'Command Center', path: '/teacher-dashboard' },
        { id: 'query-hub', icon: <MessageSquare size={22} />, label: 'Student Inbox', path: '/teacher-dashboard/query-hub' },
        { id: 'attendance', icon: <QrCode size={22} />, label: 'QR Attendance', path: '/teacher-dashboard/attendance' },
        { id: 'assignments', icon: <ClipboardList size={22} />, label: 'Grading Hub', path: '/teacher-dashboard/assignments' },
        { id: 'roster', icon: <Users size={22} />, label: 'Class Roster', path: '/teacher-dashboard/roster' },
        { id: 'broadcast', icon: <Megaphone size={22} />, label: 'Broadcast', path: '/teacher-dashboard/broadcast' },
    ];

    return (
        <div className="fixed inset-0 h-screen w-screen bg-[#F0F2F5] text-slate-800 flex overflow-hidden font-sans">

            {/* --- ULTRA-MODERN SIDEBAR --- */}
            <motion.aside
                initial={false}
                animate={{ width: isSidebarOpen ? '280px' : '90px' }}
                className="bg-white border-r border-slate-200 flex flex-col transition-all duration-300 z-50 shadow-sm"
            >
                <div className="p-8 flex items-center gap-3">
                    <div className="w-10 h-10 bg-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-200">
                        <Zap className="text-white" size={20} fill="currentColor" />
                    </div>
                    <AnimatePresence>
                        {isSidebarOpen && (
                            <motion.span
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="text-xl font-[1000] tracking-tighter text-slate-900"
                            >
                                PROFESSOR.
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <button
                                key={item.id}
                                onClick={() => navigate(item.path)}
                                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all relative group ${isActive
                                        ? 'bg-violet-600 text-white shadow-xl shadow-violet-100'
                                        : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'
                                    }`}
                            >
                                <div className={`${isActive ? 'scale-110' : 'group-hover:scale-110'} transition-transform`}>
                                    {item.icon}
                                </div>
                                {isSidebarOpen && (
                                    <span className="font-bold text-[13px] uppercase tracking-wider">{item.label}</span>
                                )}
                                {isActive && isSidebarOpen && (
                                    <motion.div layoutId="activeInd" className="absolute right-4 w-1.5 h-1.5 bg-white rounded-full" />
                                )}
                            </button>
                        );
                    })}
                </nav>

                <div className="p-6 border-t border-slate-100 space-y-2">
                    <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-slate-400 hover:bg-slate-50 transition-all">
                        <Settings size={22} />
                        {isSidebarOpen && <span className="font-bold text-[13px] uppercase tracking-wider">Settings</span>}
                    </button>
                    <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-rose-500 hover:bg-rose-50 transition-all font-black">
                        <LogOut size={22} />
                        {isSidebarOpen && <span className="text-[13px] uppercase tracking-widest">Exit Portal</span>}
                    </button>
                </div>
            </motion.aside>

            {/* --- MAIN CONTENT AREA --- */}
            <div className="flex-1 flex flex-col h-full relative overflow-hidden">

                {/* --- TOP COMMAND BAR --- */}
                <header className="h-20 bg-white/70 backdrop-blur-xl border-b border-slate-200 flex items-center justify-between px-10 z-40">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setSidebarOpen(!isSidebarOpen)}
                            className="p-3 bg-white border border-slate-200 hover:border-violet-400 rounded-2xl text-slate-600 transition-all shadow-sm"
                        >
                            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                        <div className="hidden lg:flex items-center bg-slate-100/50 border border-slate-200/50 rounded-2xl px-5 py-2.5 w-96 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-500/5 transition-all">
                            <Search size={18} className="text-slate-400" />
                            <input type="text" placeholder="Search for students, grades, files..." className="bg-transparent border-none outline-none px-4 text-sm w-full text-slate-700" />
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        {/* Global Notification Bell */}
                        <div className="relative">
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                className={`p-3 rounded-2xl transition-all relative ${showNotifications ? 'bg-violet-600 text-white shadow-lg' : 'bg-white border border-slate-200 text-slate-500 hover:border-violet-400'}`}
                            >
                                <Bell size={20} />
                                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white animate-pulse"></span>
                            </button>

                            {/* Notification Dropdown */}
                            <AnimatePresence>
                                {showNotifications && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-4 w-80 bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-6 overflow-hidden"
                                    >
                                        <div className="flex justify-between items-center mb-4">
                                            <h4 className="font-[1000] text-sm uppercase tracking-tighter">Alerts Hub</h4>
                                            <span className="text-[10px] font-black bg-violet-100 text-violet-600 px-2 py-1 rounded-lg">2 NEW</span>
                                        </div>
                                        <div className="space-y-3">
                                            {notifications.map(n => (
                                                <div key={n.id} className="p-4 rounded-2xl bg-slate-50 hover:bg-violet-50 transition-all cursor-pointer border border-transparent hover:border-violet-100">
                                                    <p className="text-xs font-black text-slate-800">{n.title} from {n.sender}</p>
                                                    <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{n.time}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="h-10 w-[1px] bg-slate-200 mx-1"></div>

                        {/* Teacher Profile Info */}
                        <div className="flex items-center gap-4 pl-2">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-black text-slate-900 leading-none">Dr. Hemant Patil</p>
                                <p className="text-[10px] text-violet-600 font-black uppercase mt-1 tracking-widest flex items-center gap-1 justify-end">
                                    <ShieldCheck size={12} /> HOD • BCA Dept
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-white rounded-2xl border-2 border-slate-100 shadow-sm overflow-hidden p-1">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Professor" className="w-full h-full rounded-xl bg-slate-50 object-cover" alt="teacher" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* --- PAGE BODY (Dynamic) --- */}
                <main className="flex-1 overflow-y-auto p-10 bg-[#F0F2F5]/50">
                    <div className="max-w-7xl mx-auto h-full">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TeacherLayout;