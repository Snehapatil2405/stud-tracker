// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell
} from 'recharts';
import { useState, useEffect } from 'react';
import {
  Award, Target, Zap, Brain, BookOpen, GraduationCap,
  TrendingUp, ArrowUpRight, Download, Share2, Info, CheckCircle,Sparkles
} from 'lucide-react';

// --- DATA ---
const skillData = [
  { subject: 'Theory', A: 85, full: 100 }, { subject: 'Practical', A: 95, full: 100 },
  { subject: 'Coding', A: 90, full: 100 }, { subject: 'Research', A: 65, full: 100 },
  { subject: 'Viva', A: 80, full: 100 }, { subject: 'Logic', A: 88, full: 100 },
];

const subjectData = [
  { name: 'Java', gpa: 9.2, grade: 'O', color: '#6366f1' },
  { name: 'DBMS', gpa: 8.5, grade: 'A+', color: '#06b6d4' },
  { name: 'Network', gpa: 7.8, grade: 'A', color: '#9c99a3' },
  { name: 'OS', gpa: 8.1, grade: 'A+', color: '#ec4899' },
  { name: 'Maths', gpa: 7.2, grade: 'B+', color: '#f59e0b' },
];

const MyPerformance = () => {
  const [viewType, setViewType] = useState('GPA');
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    setIsAnimate(true);
  }, []);

  // Complex staggering animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0, opacity: 1, scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <AnimatePresence>
      {isAnimate && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10 pb-24 px-4 bg-[#f8fafc]"
        >
          {/* 1. NEW PREMIUM HEADER (Faculty Page Style) */}
          <motion.div 
            variants={itemVariants}
            className="relative overflow-hidden bg-[#0f172a] rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-indigo-900/20 mt-4"
          >
            {/* Background Abstract Glows */}
            <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-20%] left-[-5%] w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full" />

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                   <Sparkles size={14} className="text-indigo-400" />
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">Performance Intelligence</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                   Analytics <span className="text-indigo-500 italic">Vault.</span>
                </h1>
                
                <p className="text-slate-400 text-sm md:text-base font-medium flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle size={18} className="text-emerald-500" /> 
                  Live Academic Status • <span className="text-white font-bold">SY-BCA Student</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl transition-all"
                >
                  <Download size={16} /> Export Intel
                </motion.button>
                
                <div className="flex items-center gap-3">
                   <motion.button 
                     whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                     className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-md transition-all"
                   >
                     <Share2 size={18} />
                   </motion.button>
                   
                   {/* Live Badge (As seen in Faculty UI) */}
                   <div className="bg-white/5 border border-white/10 p-3 px-5 rounded-2xl backdrop-blur-md text-center min-w-[100px]">
                      <p className="text-[18px] font-black text-indigo-400 leading-none">04</p>
                      <p className="text-[8px] font-black text-slate-500 uppercase mt-1 tracking-tighter">Class Rank</p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. DYNAMIC SCORE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Cumulative GPA', val: '8.45', icon: <GraduationCap />, color: 'from-indigo-600 to-blue-700' },
              { label: 'Credits Earned', val: '112', icon: <Zap />, color: 'from-amber-400 to-orange-500' },
              { label: 'Class Rank', val: '04', icon: <Target />, color: 'from-emerald-500 to-teal-600' },
              { label: 'Performance', val: 'Top 5%', icon: <TrendingUp />, color: 'from-rose-500 to-pink-600' },
            ].map((stat, i) => (
              <motion.div
                key={i} variants={itemVariants}
                whileHover={{ y: -12, rotateX: 5, rotateY: 5 }}
                className="relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-[1.5rem] flex items-center justify-center text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700`}>
                  {stat.icon}
                </div>
                <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">{stat.val}</h2>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/10 rounded-[3rem] transition-all" />
              </motion.div>
            ))}
          </div>

          {/* 3. CORE ANALYTICS SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* SKILL ANALYSIS CARD (The Enhanced One) */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="lg:col-span-5 bg-white rounded-[4rem] p-12 border border-slate-100 shadow-2xl relative overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                    <Brain className="text-indigo-600 animate-pulse" /> Skill Matrix
                  </h3>
                  <p className="text-slate-400 font-bold text-xs mt-2 uppercase tracking-widest">360° Proficiency Analysis</p>
                </div>
                <motion.div whileHover={{ rotate: 180 }} className="p-3 bg-slate-50 rounded-2xl cursor-help transition-colors"><Info size={20} className="text-slate-300" /></motion.div>
              </div>

              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                    <PolarGrid stroke="#e2e8f0" strokeDasharray="4 4" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 900 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px rgba(0,0,0,0.1)', padding: '20px' }} />
                    <Radar
                      name="Capability"
                      dataKey="A"
                      stroke="#4f46e5"
                      strokeWidth={4}
                      fill="url(#radarGradient)"
                      fillOpacity={0.6}
                      isAnimationActive={true}
                      animationDuration={2500}
                    />
                    <defs>
                      <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.2} />
                      </linearGradient>
                    </defs>
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* SUBJECT PROFICIENCY CARD (Matched Animation) */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="lg:col-span-7 bg-white rounded-[4rem] p-12 border border-slate-100 shadow-2xl relative overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                    <BookOpen className="text-indigo-600" /> Grade Velocity
                  </h3>
                  <p className="text-slate-400 font-bold text-xs mt-2 uppercase tracking-widest">Subject-wise GPA Distribution</p>
                </div>
                <div className="flex bg-slate-100 p-2 rounded-[1.5rem]">
                  {['GPA', 'Grade'].map((type) => (
                    <motion.button
                      key={type}
                      whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
                      onClick={() => setViewType(type)}
                      className={`px-8 py-3 rounded-[1rem] text-[11px] font-black uppercase tracking-tighter transition-all ${viewType === type ? 'bg-white shadow-xl text-indigo-600 scale-105' : 'text-slate-400'}`}
                    >
                      {type}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={subjectData} layout="vertical" margin={{ left: 20 }}>
                    <XAxis type="number" domain={[0, 10]} hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#1e293b', fontSize: 13, fontWeight: 900 }} width={90} />
                    <Tooltip
                      cursor={{ fill: '#f1f5f9', radius: 24 }}
                      content={({ active, payload }) => {
                        if (active && payload?.[0]) {
                          return (
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-slate-900 text-white p-6 rounded-[2rem] shadow-2xl border border-slate-800">
                              <p className="text-[10px] font-black text-indigo-400 uppercase mb-2">{payload[0].payload.name}</p>
                              <div className="flex items-end gap-2">
                                <span className="text-4xl font-black">{viewType === 'GPA' ? payload[0].value : payload[0].payload.grade}</span>
                                <span className="text-xs font-bold text-slate-400 mb-2">Score</span>
                              </div>
                            </motion.div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="gpa" radius={[0, 20, 20, 0]} barSize={38} animationDuration={2000} animationEasing="ease-out">
                      {subjectData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.9} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* 4. PREMIUM INSIGHTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Prime Proficiency', val: 'Java Architect', desc: 'Highest competency in OOP & Logic', icon: <Zap />, color: 'indigo' },
              { title: 'Strategic Milestone', val: '92% Accurate', icon: <Target />, desc: 'On track for University Rank', color: 'emerald' },
              { title: 'Global Standing', val: 'Elite Distinction', icon: <Award />, desc: 'Tier 1 Academic Category', color: 'rose' },
            ].map((item, i) => (
              <motion.div
                key={i} variants={itemVariants}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group p-12 rounded-[4rem] bg-white border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all flex flex-col items-center text-center overflow-hidden"
              >
                <div className={`w-20 h-20 bg-${item.color}-50 text-${item.color}-600 rounded-[2rem] flex items-center justify-center mb-8 shadow-sm group-hover:scale-125 group-hover:bg-${item.color}-600 group-hover:text-white transition-all duration-500`}>
                  {item.icon}
                </div>
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">{item.title}</h4>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{item.val}</h3>
                <p className="text-sm font-bold text-slate-500 leading-relaxed px-4">{item.desc}</p>
                <motion.button className="mt-8 flex items-center gap-2 text-indigo-600 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                  Deep Dive <ArrowUpRight size={16} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MyPerformance;