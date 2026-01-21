import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { 
  Users, Clock, BookOpen, GraduationCap, 
  Calendar, ArrowUpRight, CheckCircle2, AlertCircle 
} from 'lucide-react';
import StatCard from '../../components/teacher/StatCard';

const TeacherDashboard = () => {
  // १. वरचे आकडे (Stats)
  const stats = [
    { id: 1, title: "Total Students", value: "64", icon: Users, color: "bg-emerald-500", trend: "+2 New" },
    { id: 2, title: "Avg. Attendance", value: "85%", icon: Clock, color: "bg-blue-500", trend: "Normal" },
    { id: 3, title: "Assignments", value: "12", icon: BookOpen, color: "bg-purple-500", trend: "Pending" },
    { id: 4, title: "Lectures Today", value: "04", icon: GraduationCap, color: "bg-orange-500", trend: "Planned" },
  ];

  const lectures = [
    { time: "09:00 AM", sub: "Java Programming", room: "Lab 102", status: "Completed", type: "Lab" },
    { time: "11:30 AM", sub: "Data Structures", room: "Room 405", status: "Ongoing", type: "Theory" },
    { time: "02:00 PM", sub: "Networking", room: "Room 201", status: "Upcoming", type: "Theory" },
  ];

  return (
   
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="space-y-8 pb-10"
    >
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-800 tracking-tight italic">
            Dashboard <span className="text-emerald-500 not-italic">Overview</span>
          </h1>
          <p className="text-slate-500 font-bold text-sm mt-1 uppercase tracking-[0.2em] opacity-60">
            Welcome Back, Prof. Deshmukh
          </p>
        </div>
        
        <div className="flex items-center gap-3 bg-white p-3 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="bg-emerald-50 text-emerald-600 p-2 rounded-2xl">
            <Calendar size={20} />
          </div>
          <div className="pr-4 border-r border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase leading-none">Today</p>
            <p className="text-sm font-black text-slate-700 mt-1">21 Jan, 2026</p>
          </div>
          <div className="pl-2 flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-tighter">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            System Live
          </div>
        </div>
      </div>

      {/* --- STATS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LECTURES SECTION */}
        <div className="lg:col-span-2 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/30 p-10">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest flex items-center gap-3">
              <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
              Today's Schedule
            </h3>
            <button className="px-5 py-2 bg-slate-50 text-slate-600 font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-all">
              Full Timetable
            </button>
          </div>

          <div className="space-y-6">
            {lectures.map((lec, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 bg-slate-50/50 rounded-[2rem] border border-transparent hover:border-emerald-100 hover:bg-white transition-all group">
                <div className="flex items-center gap-6">
                  <div className="text-center min-w-[70px]">
                    <p className="text-sm font-black text-slate-800">{lec.time}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase">{lec.type}</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200"></div>
                  <div>
                    <p className="text-lg font-black text-slate-800 group-hover:text-emerald-600 transition-colors">{lec.sub}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{lec.room}</p>
                  </div>
                </div>
                <div className={`px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest ${
                  lec.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' : 
                  lec.status === 'Ongoing' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 
                  'bg-white text-slate-400 border border-slate-200'
                }`}>
                  {lec.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK ACTIONS & NOTICES */}
        <div className="space-y-8">
          {/* Attendance Quick Link */}
          <div className="bg-[#0f172a] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 size={32} className="text-emerald-400" />
              </div>
              <h4 className="text-2xl font-black leading-tight mb-3 tracking-tighter">Ready for Attendance?</h4>
              <p className="text-slate-400 text-xs font-medium mb-8 leading-relaxed">System is ready to capture current session records.</p>
              <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all shadow-lg shadow-emerald-500/20">
                Mark Now
              </button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
          </div>

          {/* Pending Task Alert */}
          <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100 flex items-start gap-4">
            <div className="bg-amber-100 text-amber-600 p-2 rounded-xl">
              <AlertCircle size={20} />
            </div>
            <div>
              <p className="text-xs font-black text-amber-800 uppercase tracking-tighter">Notice for Today</p>
              <p className="text-[11px] text-amber-700 font-bold mt-1 leading-relaxed italic">
                Sessional exam marks entry deadline is today at 5:00 PM.
              </p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default TeacherDashboard;