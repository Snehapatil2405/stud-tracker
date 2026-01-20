import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { Users, BookOpen, Clock, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

const TeacherDashboard = () => {
  const stats = [
    { label: 'Total Students', value: '124', icon: Users, color: 'bg-blue-500', trend: '+12%' },
    { label: 'Avg. Attendance', value: '88%', icon: CheckCircle, color: 'bg-emerald-500', trend: '+2%' },
    { label: 'Pending Gradings', value: '14', icon: Clock, color: 'bg-orange-500', trend: 'Due Today' },
    { label: 'Class Performance', value: '7.8', icon: TrendingUp, color: 'bg-violet-500', trend: 'GPA' },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-[1000] tracking-tighter text-slate-900">Welcome back, <span className="text-violet-600">Professor.</span></h1>
          <p className="text-slate-500 font-bold text-sm mt-1 uppercase tracking-widest">Monday, 19th January 2026</p>
        </div>
        <button className="bg-white border-2 border-slate-200 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-violet-600 transition-all shadow-sm">
          Download Report
        </button>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div className={`${stat.color} p-4 rounded-2xl text-white shadow-lg`}>
                <stat.icon size={24} />
              </div>
              <span className="text-[10px] font-[1000] bg-slate-100 px-3 py-1 rounded-full text-slate-500 tracking-tighter uppercase">{stat.trend}</span>
            </div>
            <div className="mt-6">
              <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em]">{stat.label}</p>
              <h3 className="text-4xl font-[1000] tracking-tighter mt-1">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. Bento Grid - Advanced Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Active Class Schedule */}
        <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <BookOpen size={150} />
            </div>
          <h2 className="text-2xl font-black tracking-tight mb-8 flex items-center gap-3">
            Today's Schedule <span className="w-2 h-2 bg-violet-600 rounded-full animate-ping"></span>
          </h2>
          <div className="space-y-6">
            {[
              { time: '10:00 AM', subject: 'Cloud Computing (BCA)', room: 'Lab 04', status: 'Ongoing' },
              { time: '12:30 PM', subject: 'Python Advanced', room: 'Hall 12', status: 'Upcoming' },
              { time: '02:00 PM', subject: 'Project Seminar', room: 'Seminar Hall', status: 'Upcoming' },
            ].map((cls, i) => (
              <div key={i} className="flex items-center justify-between p-6 rounded-[2rem] bg-slate-50 border border-transparent hover:border-violet-100 hover:bg-white transition-all">
                <div className="flex items-center gap-6">
                  <span className="font-black text-sm text-violet-600 w-20">{cls.time}</span>
                  <div>
                    <h4 className="font-black text-slate-800">{cls.subject}</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{cls.room}</p>
                  </div>
                </div>
                <span className={`text-[10px] font-black px-4 py-1.5 rounded-xl uppercase tracking-widest ${cls.status === 'Ongoing' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-200 text-slate-500'}`}>
                  {cls.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Alerts Section */}
        <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-600/20 to-transparent"></div>
          <h2 className="text-2xl font-black tracking-tight mb-8">Priority Tasks</h2>
          <div className="space-y-4 relative z-10">
            {[
              { text: 'Finalize FY Grade-sheet', priority: 'High' },
              { text: 'Review Omkar\'s Query', priority: 'Med' },
              { text: 'Upload Semester Notes', priority: 'High' }
            ].map((task, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-all cursor-pointer">
                <p className="font-bold text-sm text-slate-200">{task.text}</p>
                <div className={`w-2 h-2 rounded-full ${task.priority === 'High' ? 'bg-rose-500' : 'bg-orange-400'}`}></div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-5 bg-violet-600 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest shadow-xl shadow-violet-500/20 hover:scale-[1.02] transition-transform">
            View All Tasks
          </button>
        </div>

      </div>
    </div>
  );
};

export default TeacherDashboard;