import React, { useState } from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { 
  Users, Search, Filter, Mail, 
  Phone, MoreHorizontal, GraduationCap, ArrowUpDown 
} from 'lucide-react';

const ClassRoster = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    { id: 1, name: "Rahul Sharma", roll: "BCA-01", email: "rahul@example.com", phone: "+91 98765 43210", batch: "SY-BCA", gpa: "8.5" },
    { id: 2, name: "Priya Patil", roll: "BCA-02", email: "priya@example.com", phone: "+91 98765 43211", batch: "SY-BCA", gpa: "9.1" },
    { id: 3, name: "Amit Verma", roll: "BCA-03", email: "amit@example.com", phone: "+91 98765 43212", batch: "SY-BCA", gpa: "7.8" },
    { id: 4, name: "Sneha Kale", roll: "BCA-04", email: "sneha@example.com", phone: "+91 98765 43213", batch: "SY-BCA", gpa: "8.2" },
    { id: 5, name: "Vikram Singh", roll: "BCA-05", email: "vikram@example.com", phone: "+91 98765 43214", batch: "SY-BCA", gpa: "8.9" },
    { id: 6, name: "Anjali Deshmukh", roll: "BCA-06", email: "anjali@example.com", phone: "+91 98765 43215", batch: "SY-BCA", gpa: "9.4" },
  ];

  return (
  
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }} 
      animate={{ opacity: 1, scale: 1 }} 
      className="space-y-8 pb-10"
    >
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Class <span className="text-emerald-500">Roster</span>
          </h1>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">
            Total Students Enrolled: {students.length}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or roll no..." 
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-xs font-bold outline-none focus:ring-4 focus:ring-emerald-500/5 transition-all shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-500 hover:text-emerald-500 hover:bg-emerald-50 transition-all shadow-sm">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* --- ROSTER GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {students.map((student) => (
     
          <motion.div 
            key={student.id}
            whileHover={{ y: -8 }}
            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/30 overflow-hidden group"
          >
            {/* Card Top Branding */}
            <div className="h-24 bg-slate-900 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6">
                  <button className="text-white/20 hover:text-white transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
               </div>
               <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Profile Info */}
            <div className="px-8 pb-8 -mt-12 relative z-10 text-center">
              <div className="inline-block relative">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`} 
                  className="w-24 h-24 rounded-[2rem] bg-white border-4 border-white shadow-xl mb-4 mx-auto object-cover" 
                  alt="Student" 
                />
                <div className="absolute bottom-4 right-0 bg-emerald-500 text-white p-1.5 rounded-xl border-2 border-white">
                  <GraduationCap size={14} />
                </div>
              </div>

              <h3 className="text-lg font-black text-slate-800 tracking-tight group-hover:text-emerald-600 transition-colors">
                {student.name}
              </h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">
                {student.roll} • {student.batch}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 text-left">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100/50">
                   <p className="text-[9px] font-bold text-slate-400 uppercase">Academic GPA</p>
                   <p className="text-sm font-black text-slate-700">{student.gpa} / 10</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100/50">
                   <p className="text-[9px] font-bold text-slate-400 uppercase">Attendance</p>
                   <p className="text-sm font-black text-emerald-600">94%</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                  <Mail size={14} /> Message
                </button>
                <button className="p-3 bg-slate-100 text-slate-500 rounded-xl hover:bg-slate-200 transition-all">
                  <Phone size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ClassRoster;