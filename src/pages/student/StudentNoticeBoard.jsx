// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Bell, Megaphone, Calendar, Clock, ChevronRight, 
  Bookmark, Share2, Info, RefreshCw
} from 'lucide-react';

const initialNotices = [
  {
    id: 1,
    title: "End Semester Examination Schedule",
    category: "Examination",
    date: "14 Jan 2026",
    time: "10:30 AM",
    priority: "Urgent",
    isRead: false,
    desc: "The final examination schedule for 2025-26 is live. Please ensure all internal dues are cleared.",
    gradient: "from-rose-500/20 to-orange-500/20",
    border: "border-rose-200",
    accent: "bg-rose-500"
  },
  {
    id: 2,
    title: "Tarang 2026: Cultural Megafest",
    category: "Events",
    date: "12 Jan 2026",
    time: "02:00 PM",
    priority: "Latest",
    isRead: false,
    desc: "Get ready for the biggest event of the year! Registrations for 'War of Bands' are now open.",
    gradient: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-200",
    accent: "bg-indigo-500"
  },
  {
    id: 3,
    title: "Global Tech Internship Drive",
    category: "Placement",
    date: "10 Jan 2026",
    time: "09:00 AM",
    priority: "Urgent",
    isRead: true,
    desc: "Top-tier companies including Google and NVIDIA are visiting next month. Profile shortlisting starts this Friday.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-200",
    accent: "bg-emerald-500"
  }
];

const NoticeBoard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [displayNotices, setDisplayNotices] = useState(initialNotices);
  const [activeFilter, setActiveFilter] = useState('All'); // 'All', 'Unread', 'Urgent'

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  // ✅ Filtering Logic Functions
  const showUnread = () => {
    setDisplayNotices(initialNotices.filter(n => !n.isRead));
    setActiveFilter('Unread');
  };

  const showUrgent = () => {
    setDisplayNotices(initialNotices.filter(n => n.priority === 'Urgent'));
    setActiveFilter('Urgent');
  };

  const resetFilters = () => {
    setDisplayNotices(initialNotices);
    setActiveFilter('All');
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-10 pb-20 px-2 bg-[#fcfcfd]">
          
          {/* 1. INTERACTIVE HEADER */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="relative p-10 rounded-[3.5rem] bg-slate-900 overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div className="space-y-4 cursor-pointer" onClick={resetFilters}>
                <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-2xl text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  <RefreshCw size={12} className={activeFilter !== 'All' ? 'animate-spin' : ''} />
                  {activeFilter === 'All' ? 'Live System' : `Filtering: ${activeFilter}`}
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                  Notice <span className="text-indigo-500 italic">Board.</span>
                </h1>
                <div className="text-slate-400 font-bold text-sm tracking-tight">
                   Clock: <span className="text-white font-mono">{time}</span>
                </div>
              </div>
              
              <div className="flex gap-4 w-full lg:w-auto">
                {/* Pending Counter Button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  onClick={showUnread}
                  className={`flex-1 lg:flex-none h-28 px-8 rounded-[2.5rem] flex flex-col items-center justify-center transition-all border ${activeFilter === 'Unread' ? 'bg-indigo-500 border-indigo-400' : 'bg-white/5 border-white/10'}`}
                >
                  <span className={`text-4xl font-black ${activeFilter === 'Unread' ? 'text-white' : 'text-slate-300'}`}>
                    {initialNotices.filter(n => !n.isRead).length}
                  </span>
                  <span className={`text-[10px] font-black uppercase tracking-widest mt-1 ${activeFilter === 'Unread' ? 'text-indigo-100' : 'text-slate-500'}`}>Unread</span>
                </motion.button>

                {/* Urgent Alerts Button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  onClick={showUrgent}
                  className={`flex-1 lg:flex-none h-28 px-8 rounded-[2.5rem] flex flex-col items-center justify-center shadow-xl transition-all ${activeFilter === 'Urgent' ? 'bg-rose-500 shadow-rose-500/20' : 'bg-indigo-600 shadow-indigo-500/30'}`}
                >
                  <Bell className="text-white mb-2" size={28} />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Urgent</span>
                </motion.button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 blur-[100px] rounded-full" />
          </motion.div>

          {/* 2. NOTICES GRID (DYNAMICALLY FILTERED) */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode='popLayout'>
              {displayNotices.map((notice) => (
                <motion.div
                  layout
                  key={notice.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -10 }}
                  className={`relative bg-white border ${notice.border} p-10 rounded-[3.5rem] shadow-xl overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${notice.gradient} opacity-10`} />
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-6">
                      <span className="bg-slate-50 px-4 py-1.5 rounded-full text-[10px] font-black text-slate-500 uppercase">
                        {notice.category}
                      </span>
                      {!notice.isRead && <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-lg text-[9px] font-black uppercase">New</span>}
                    </div>

                    <h3 className="text-3xl font-black text-slate-900 leading-tight mb-4">{notice.title}</h3>
                    <p className="text-slate-500 font-semibold mb-8 line-clamp-2">{notice.desc}</p>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <div className="text-slate-400 font-bold text-[11px] flex items-center gap-2">
                        <Calendar size={14} /> {notice.date}
                      </div>
                      <button className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State jar notices nastil tar */}
          {displayNotices.length === 0 && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
              <Megaphone size={48} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-xl font-black text-slate-400">No notices found in this filter.</h3>
              <button onClick={resetFilters} className="mt-4 text-indigo-600 font-black uppercase text-xs">Show All Notices</button>
            </motion.div>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NoticeBoard;