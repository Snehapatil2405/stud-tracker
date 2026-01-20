// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Redirection sathi
import { 
  TrendingUp, Calendar, Clock, Star, 
  ArrowUpRight, BookOpen, CheckCircle2, BarChart3, Zap, AlertCircle, ArrowRight
} from 'lucide-react';

// --- DATA SETS ---
const semesterData = [
  { name: 'Sem 1', gpa: 7.2 }, { name: 'Sem 2', gpa: 7.8 },
  { name: 'Sem 3', gpa: 8.5 }, { name: 'Sem 4', gpa: 8.2 },
  { name: 'Sem 5', gpa: 8.9 }, { name: 'Sem 6', gpa: 9.1 },
];

const yearlyData = [
  { name: 'Year 1', gpa: 7.5 }, { name: 'Year 2', gpa: 8.35 },
  { name: 'Year 3', gpa: 9.0 },
];

const deadlinesData = [
  { id: 1, subject: 'Cyber Security', task: 'Final Lab Report', timeLeft: '2 Days Left', priority: 'High', color: 'rose' },
  { id: 2, subject: 'Java Programming', task: 'E-commerce App Module', timeLeft: '5 Days Left', priority: 'Medium', color: 'amber' },
  { id: 3, subject: 'DBMS', task: 'SQL Optimization Quiz', timeLeft: '1 Week Left', priority: 'Low', color: 'emerald' },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const Overview = () => {
  const navigate = useNavigate(); // Navigation hook initialize kela
  const [activeView, setActiveView] = useState('semester'); 
  
  const stats = [
    { label: 'Attendance', value: '88%', sub: '+2% This week', icon: <Clock size={22} />, color: 'text-blue-600' },
    { label: 'Avg. CGPA', value: '8.45', sub: 'Top 5% Rank', icon: <Star size={22} />, color: 'text-amber-500' },
    { label: 'Credits', value: '112/140', sub: '80% Complete', icon: <BookOpen size={22} />, color: 'text-indigo-600' },
  ];

  const colorMap = {
    rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100', accent: 'bg-rose-500' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', accent: 'bg-amber-500' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', accent: 'bg-emerald-500' },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8 pb-10">
      
      {/* 1. HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div variants={cardVariants} whileHover={{ scale: 1.01 }} className="lg:col-span-2 relative overflow-hidden bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl">
          <div className="relative z-10">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/30 flex items-center gap-2 w-fit">
              <Zap size={12} className="fill-current" /> Semester Active
            </span>
            <h2 className="text-5xl font-black mt-6 leading-tight tracking-tight">
              Push your limits, <br /> <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Seema Patil!</span>
            </h2>
            <p className="text-slate-400 mt-6 max-w-sm font-medium text-lg leading-relaxed">Your academic trajectory is up by <span className="text-white font-bold">12.5%</span>. Keep it up!</p>
          </div>
          <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-600/30 rounded-full blur-[100px]" />
        </motion.div>

        <motion.div variants={cardVariants} className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center text-center">
          <div className="relative w-40 h-40 flex items-center justify-center mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="80" cy="80" r="70" stroke="#f1f5f9" strokeWidth="12" fill="transparent" />
              <motion.circle cx="80" cy="80" r="70" stroke="#4f46e5" strokeWidth="12" fill="transparent" strokeDasharray={440} initial={{ strokeDashoffset: 440 }} animate={{ strokeDashoffset: 440 - (440 * 75) / 100 }} transition={{ duration: 2 }} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center font-black">
              <span className="text-4xl text-slate-900">75%</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">Syllabus</span>
            </div>
          </div>
          <h4 className="font-bold text-slate-800 uppercase tracking-tighter text-xs">Academic Progress</h4>
        </motion.div>
      </div>

      {/* 2. STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div key={i} variants={cardVariants} whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.15)" }} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm group relative overflow-hidden transition-all">
            <div className={`w-14 h-14 bg-slate-50 ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all`}>{stat.icon}</div>
            <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">{stat.label}</p>
            <h3 className="text-4xl font-black text-slate-900 mt-2 tracking-tight">{stat.value}</h3>
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">{stat.icon}</div>
          </motion.div>
        ))}
      </div>

      {/* 3. PERFORMANCE CHART WITH TOGGLE */}
      <motion.div variants={cardVariants} className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Performance Analytics</h3>
            <p className="text-slate-400 font-medium mt-1">GPA progression trend</p>
          </div>
          <div className="flex bg-slate-100 p-1.5 rounded-2xl">
            <button onClick={() => setActiveView('semester')} className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${activeView === 'semester' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'}`}>Semester</button>
            <button onClick={() => setActiveView('yearly')} className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${activeView === 'yearly' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'}`}>Yearly</button>
          </div>
        </div>
        
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={activeView === 'semester' ? semesterData : yearlyData} key={activeView}>
              <defs>
                <linearGradient id="colorGpa" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} dy={15} />
              <YAxis domain={[0, 10]} axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
              <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', padding: '15px' }} />
              <Area type="monotone" dataKey="gpa" stroke="#4f46e5" strokeWidth={5} fill="url(#colorGpa)" animationDuration={1500} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* 4. UPCOMING DEADLINES SECTION WITH REDIRECT */}
      <motion.div variants={cardVariants} className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/40">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              Upcoming Deadlines <AlertCircle className="text-rose-500 animate-pulse" size={24} />
            </h3>
            <p className="text-slate-400 font-medium mt-1">Don't miss your academic targets</p>
          </div>
          
          {/* ✅ Redirect to Assignments Page */}
          <button 
            onClick={() => navigate('/student-dashboard/assignments')}
            className="text-indigo-600 font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-2 group"
          >
            View All Tasks 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deadlinesData.map((item) => {
            const style = colorMap[item.color];
            return (
              <motion.div key={item.id} whileHover={{ y: -10, scale: 1.02 }} variants={cardVariants} className={`relative overflow-hidden p-8 rounded-[2.5rem] border ${style.border} ${style.bg} shadow-lg transition-all group`}>
                <div className={`absolute top-0 left-0 w-full h-1.5 ${style.accent} opacity-50`} />
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 bg-white rounded-2xl ${style.text} shadow-sm group-hover:rotate-12 transition-transform`}>
                    <Clock size={20} />
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white rounded-full ${style.text} shadow-sm border border-white/50`}>{item.priority}</span>
                </div>
                <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{item.subject}</h4>
                <p className="text-slate-900 font-black text-lg leading-tight mb-4 min-h-[3rem]">{item.task}</p>
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/40">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 ${style.accent} rounded-full animate-ping`} />
                    <span className={`text-xs font-black ${style.text}`}>{item.timeLeft}</span>
                  </div>
                  <motion.button whileTap={{ scale: 0.9 }} className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:shadow-md transition-all border border-white">
                    <CheckCircle2 size={18} />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Overview;