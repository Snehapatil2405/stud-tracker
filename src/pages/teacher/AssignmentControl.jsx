import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { 
  BookOpen, Plus, Clock, FileCheck, 
  AlertCircle, ChevronRight, Download, Users 
} from 'lucide-react';

const AssignmentControl = () => {
  const assignments = [
    { id: 1, title: "Java Inheritance Project", deadline: "25 Jan, 2026", submissions: "45/64", status: "Active", priority: "High" },
    { id: 2, title: "UI/UX Case Study", deadline: "28 Jan, 2026", submissions: "12/64", status: "Active", priority: "Medium" },
    { id: 3, title: "Database Normalization", deadline: "20 Jan, 2026", submissions: "60/64", status: "Closed", priority: "Low" },
  ];

  return (
   
    <motion.div 
      initial={{ opacity: 0, y: 15 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="space-y-8 pb-10"
    >
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Assignment <span className="text-emerald-500">Control</span>
          </h1>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">
            Create, track and grade student submissions
          </p>
        </div>

        <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.15em] hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 group">
          <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
          Create Assignment
        </button>
      </div>

      {/* --- QUICK STATS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center">
            <BookOpen size={28} />
          </div>
          <div>
            <p className="text-2xl font-black text-slate-800">08</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Active</p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center">
            <FileCheck size={28} />
          </div>
          <div>
            <p className="text-2xl font-black text-slate-800">142</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Graded This Week</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center">
            <Clock size={28} />
          </div>
          <div>
            <p className="text-2xl font-black text-slate-800">03</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Near Deadline</p>
          </div>
        </div>
      </div>

      {/* --- ASSIGNMENT LIST --- */}
      <div className="space-y-4">
        <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest px-2">Active Tasks</h3>
        {assignments.map((task) => (
          <div key={task.id} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all group overflow-hidden relative">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
              
              <div className="flex items-center gap-6">
                <div className={`w-3 h-12 rounded-full ${
                  task.priority === 'High' ? 'bg-red-500' : task.priority === 'Medium' ? 'bg-orange-500' : 'bg-emerald-500'
                }`}></div>
                <div>
                  <h4 className="text-lg font-black text-slate-800 group-hover:text-emerald-600 transition-colors tracking-tight">{task.title}</h4>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                      <Clock size={12} /> Due: {task.deadline}
                    </span>
                    <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter italic">Priority: {task.priority}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-8">
                <div className="text-center">
                  <div className="flex items-center gap-2 mb-1">
                    <Users size={14} className="text-slate-400" />
                    <p className="text-sm font-black text-slate-700">{task.submissions}</p>
                  </div>
                  <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">Submissions</p>
                </div>

                <div className="h-10 w-px bg-slate-100 hidden lg:block"></div>

                <div className="flex gap-2">
                  <button className="px-6 py-3 bg-slate-50 text-slate-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100">
                    View All
                  </button>
                  <button className="p-3 bg-emerald-500 text-white rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-5 transition-all group-hover:opacity-20 ${
              task.priority === 'High' ? 'bg-red-500' : 'bg-emerald-500'
            }`}></div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AssignmentControl;