import React, { useState } from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { 
  Users, CheckCircle, XCircle, Search, 
  Filter, FileText, MoreVertical, Check, ArrowUpRight, TrendingUp
} from 'lucide-react';

const AttendanceManager = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const attendanceStats = [
    { label: "Present Today", count: "32", color: "text-emerald-500", icon: CheckCircle },
    { label: "Absent Today", count: "04", color: "text-red-500", icon: XCircle },
    { label: "Attendance %", count: "88%", color: "text-blue-500", icon: TrendingUp },
  ];

  const students = [
    { id: 1, name: "Rahul Sharma", roll: "BCA01", status: "Present", avg: "92%" },
    { id: 2, name: "Priya Patil", roll: "BCA02", status: "Present", avg: "88%" },
    { id: 3, name: "Amit Verma", roll: "BCA03", status: "Absent", avg: "45%" },
    { id: 4, name: "Sneha Kale", roll: "BCA04", status: "Present", avg: "76%" },
  ];

  return (
    
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="space-y-8 pb-10"
    >
      {/* --- TOP BAR (QR काढून नवीन बटन्स) --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Daily <span className="text-emerald-500">Attendance</span>
          </h1>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">
            BCA SY • Java Programming • Room 102
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-black text-[11px] uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all shadow-sm group">
            <FileText size={18} className="text-blue-500 group-hover:scale-110 transition-transform" />
            Export PDF
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-emerald-500 rounded-2xl font-black text-[11px] uppercase tracking-widest text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
            <Check size={18} />
            Finalize Attendance
          </button>
        </div>
      </div>

      {/* --- ANALYTICS CARDS (QR च्या जागी नवीन माहिती) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {attendanceStats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-emerald-200 transition-all">
            <div className={`p-4 rounded-2xl bg-slate-50 ${stat.color} group-hover:bg-white transition-colors`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className={`text-2xl font-black ${stat.color}`}>{stat.count}</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- SEARCH & QUICK FILTERS --- */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 group">
          <Search className="absolute left-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search student name or roll number..." 
            className="w-full pl-14 pr-6 py-5 bg-white border border-slate-100 rounded-[2rem] shadow-sm text-sm font-bold outline-none focus:ring-4 focus:ring-emerald-500/5 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 bg-white p-2 rounded-[2rem] border border-slate-100 shadow-sm">
           <button className="px-6 py-3 bg-slate-800 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest">All</button>
           <button className="px-6 py-3 text-slate-400 hover:text-emerald-500 font-black text-[10px] uppercase tracking-widest transition-colors">Absent</button>
           <button className="px-6 py-3 text-slate-400 hover:text-emerald-500 font-black text-[10px] uppercase tracking-widest transition-colors">Late</button>
        </div>
      </div>

      {/* --- STUDENT LIST TABLE --- */}
      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] bg-slate-50/50">
                <th className="px-10 py-6">Student</th>
                <th className="px-10 py-6 text-center">Batch Status</th>
                <th className="px-10 py-6">Performance</th>
                <th className="px-10 py-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {students.map((student) => (
                <tr key={student.id} className="group hover:bg-emerald-50/30 transition-all">
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-5">
                      <div className="relative">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`} className="w-12 h-12 rounded-2xl bg-slate-100 border-2 border-white shadow-sm" alt="avatar" />
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${student.status === 'Present' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                      </div>
                      <div>
                        <p className="text-sm font-black text-slate-800 group-hover:text-emerald-600 transition-colors">{student.name}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter italic">Roll: {student.roll}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-6 text-center">
                    <span className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest border ${
                      student.status === 'Present' ? 'border-emerald-100 bg-emerald-50 text-emerald-600' : 'border-red-100 bg-red-50 text-red-600'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 max-w-[100px] h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: student.avg }}></div>
                      </div>
                      <span className="text-[11px] font-black text-slate-700">{student.avg}</span>
                    </div>
                  </td>
                  <td className="px-10 py-6 text-right">
                    <button className="p-3 hover:bg-white rounded-xl text-slate-300 hover:text-slate-600 transition-all border border-transparent hover:border-slate-100">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default AttendanceManager;