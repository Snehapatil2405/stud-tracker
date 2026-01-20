// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Calendar, CheckCircle2, XCircle, Clock, AlertTriangle, 
  BarChart3, Search, Download, Filter
} from 'lucide-react';

// --- ATTENDANCE DATA ---
const attendanceStats = [
  { subject: 'Java Programming', percentage: 92, conducted: 40, present: 37, color: '#6366f1' },
  { subject: 'DBMS', percentage: 85, conducted: 35, present: 30, color: '#06b6d4' },
  { subject: 'Computer Networks', percentage: 72, conducted: 30, present: 22, color: '#f59e0b' },
  { subject: 'Operating Systems', percentage: 95, conducted: 42, present: 40, color: '#ec4899' },
  { subject: 'Engineering Maths', percentage: 68, conducted: 25, present: 17, color: '#ef4444' },
];

const dailyLog = [
  { date: '12 Jan 2026', status: 'Present', time: '09:00 AM', subject: 'Java' },
  { date: '12 Jan 2026', status: 'Present', time: '11:00 AM', subject: 'DBMS' },
  { date: '11 Jan 2026', status: 'Absent', time: '10:00 AM', subject: 'Maths' },
  { date: '10 Jan 2026', status: 'Present', time: '02:00 PM', subject: 'OS' },
];

const Attendance = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All'); // ✅ Logic madhe add kela aahe aata

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  // Filter functionality sathi logic
  const filteredLog = selectedFilter === 'All' 
    ? dailyLog 
    : dailyLog.filter(log => log.status === selectedFilter);

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10 pb-20 px-2"
        >
          {/* 1. HEADER SECTION */}
          <motion.div variants={cardVariants} className="bg-slate-900 rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 mb-2">
                  <div className="h-1 w-8 bg-indigo-500 rounded-full" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Live Tracking</span>
                </div>
                <h1 className="text-5xl font-black tracking-tighter italic">Attendance Hub.</h1>
                <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">Academic Session 2025-26</p>
              </div>
              <div className="flex gap-8 bg-white/5 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/10">
                <div className="text-center">
                  <p className="text-3xl font-black text-emerald-400">128</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500">Present</p>
                </div>
                <div className="w-[1px] h-10 bg-slate-700 self-center" />
                <div className="text-center">
                  <p className="text-3xl font-black text-rose-500">12</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500">Absent</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px]" />
          </motion.div>

          {/* 2. CIRCULAR SUBJECT PROGRESS */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {attendanceStats.map((stat, i) => {
              const radius = 45;
              const circumference = 2 * Math.PI * radius;
              const offset = circumference - (stat.percentage / 100) * circumference;

              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center group relative overflow-hidden transition-all"
                >
                  <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="64" cy="64" r={radius} stroke="#f1f5f9" strokeWidth="10" fill="transparent" />
                      <motion.circle 
                        cx="64" cy="64" r={radius} 
                        stroke={stat.color} 
                        strokeWidth="10" 
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-2xl font-black text-slate-900">{stat.percentage}%</span>
                    </div>
                  </div>
                  
                  <h3 className="font-black text-slate-800 text-sm text-center leading-tight mb-2 min-h-[40px] flex items-center">{stat.subject}</h3>
                  <div className="px-4 py-1 bg-slate-50 rounded-full">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      {stat.present} OF {stat.conducted} LECTURES
                    </p>
                  </div>

                  {stat.percentage < 75 && (
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute top-6 right-6 text-rose-500"
                    >
                      <AlertTriangle size={20} />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* 3. RECENT ACTIVITY & LOGS */}
            <motion.div variants={cardVariants} className="lg:col-span-8 bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-2xl shadow-slate-200/30">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3 tracking-tight">
                  <Clock className="text-indigo-600" /> Attendance Log
                </h3>
                
                {/* ✅ SELECTEDFILTER USED HERE */}
                <div className="flex bg-slate-100 p-1.5 rounded-2xl w-full md:w-auto">
                  {['All', 'Present', 'Absent'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`flex-1 md:flex-none px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        selectedFilter === filter ? 'bg-white shadow-md text-indigo-600' : 'text-slate-400'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {filteredLog.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10, backgroundColor: '#f8fafc' }}
                    className="flex items-center justify-between p-6 rounded-[2rem] border border-slate-50 group transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner ${
                        log.status === 'Present' ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-rose-500'
                      }`}>
                        {log.status === 'Present' ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-800 text-lg leading-none mb-2">{log.subject} Theory</h4>
                        <div className="flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                          <Calendar size={12} /> {log.date}
                          <span className="w-1 h-1 bg-slate-300 rounded-full" />
                          <Clock size={12} /> {log.time}
                        </div>
                      </div>
                    </div>
                    <div className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter ${
                      log.status === 'Present' ? 'text-emerald-600 bg-emerald-100/50' : 'text-rose-600 bg-rose-100/50'
                    }`}>
                      {log.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 4. ANALYTICS & QUICK ACTIONS */}
            <motion.div variants={cardVariants} className="lg:col-span-4 space-y-8">
              <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[3.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                <BarChart3 className="absolute -right-6 -bottom-6 w-40 h-40 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                <h4 className="text-xl font-black mb-4 tracking-tight">Smart Insight</h4>
                <p className="text-indigo-100 text-sm mb-8 leading-relaxed font-semibold">
                  You are <span className="text-white underline underline-offset-4">3 lectures away</span> from achieving a perfect 75% in Maths. 
                </p>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-indigo-600 py-5 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] shadow-xl"
                >
                  Download Analysis
                </motion.button>
              </div>

              <div className="bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/20">
                <h4 className="text-xl font-black text-slate-900 mb-8 tracking-tight flex items-center gap-2">
                  <Filter size={20} className="text-indigo-600" /> Quick Actions
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: 'Weekly Report', color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Request Leave', color: 'text-amber-600', bg: 'bg-amber-50' },
                    { label: 'Export History', color: 'text-slate-600', bg: 'bg-slate-50' }
                  ].map((action, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ x: 5 }}
                      className={`w-full p-5 ${action.bg} ${action.color} rounded-2xl text-[11px] font-black uppercase tracking-widest flex justify-between items-center group`}
                    >
                      {action.label}
                      <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Attendance;