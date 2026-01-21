import React, { useState } from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { 
  MessageSquare, Search, Filter, CheckCircle2, 
  Clock, ArrowUpRight, MessageCircle, Send, User 
} from 'lucide-react';

const StudentQueryHub = () => {
  const [activeTab, setActiveTab] = useState('Pending');

  const queries = [
    { id: 1, student: "Rahul Sharma", subject: "Java Exception Handling", message: "Sir, I'm getting a NullPointerException in my code. Can you help?", time: "10 mins ago", status: "Pending" },
    { id: 2, student: "Priya Patil", subject: "Lab Submission", message: "Can we submit the lab journal in PDF format instead of hard copy?", time: "1 hour ago", status: "Pending" },
    { id: 3, student: "Amit Verma", subject: "Networking Basics", message: "What is the difference between TCP and UDP in simple terms?", time: "Yesterday", status: "Resolved" },
  ];

  return (
   
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      className="space-y-8 pb-10"
    >
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight italic">
            Student <span className="text-emerald-500 not-italic">Query Hub</span>
          </h1>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">
            Resolve student doubts and technical questions
          </p>
        </div>

        <div className="flex bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
          {['Pending', 'Resolved'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === tab ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* --- QUERIES LIST --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LIST SECTION */}
        <div className="lg:col-span-2 space-y-4">
          {queries.filter(q => q.status === activeTab).map((query) => (
            <div key={query.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all group border-l-8 border-l-emerald-500/30">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                    <User size={24} className="text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-800 text-sm tracking-tight">{query.student}</h4>
                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">{query.subject}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock size={12} />
                  <span className="text-[9px] font-black uppercase tracking-widest">{query.time}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 font-medium leading-relaxed mb-8 bg-slate-50 p-6 rounded-2xl italic">
                "{query.message}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] font-black uppercase">
                       {i}
                     </div>
                   ))}
                   <span className="pl-4 text-[10px] font-bold text-slate-400 italic flex items-center">Join Discussion</span>
                </div>
                
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all">
                  <MessageCircle size={14} /> Reply
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SIDEBAR: STATS & QUICK HELP */}
        <div className="space-y-6">
          <div className="bg-emerald-500 p-8 rounded-[3rem] text-white shadow-xl shadow-emerald-500/20 relative overflow-hidden group">
            <h4 className="text-xl font-black mb-2 tracking-tighter">Response Rate</h4>
            <p className="text-[4rem] font-black leading-none mb-4">92<span className="text-2xl text-emerald-200">%</span></p>
            <p className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest">Average response time: 45m</p>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
             <h4 className="font-black text-slate-800 uppercase text-[10px] tracking-widest mb-6 border-b border-slate-50 pb-4">Common Topics</h4>
             <div className="space-y-3">
               {['Installation Errors', 'Attendance Issues', 'Assignment Deadline', 'PDF Upload'].map((topic, i) => (
                 <div key={i} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
                   <span className="text-xs font-bold text-slate-500 group-hover:text-slate-800">{topic}</span>
                   <ArrowUpRight size={14} className="text-slate-300 group-hover:text-emerald-500" />
                 </div>
               ))}
             </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default StudentQueryHub;