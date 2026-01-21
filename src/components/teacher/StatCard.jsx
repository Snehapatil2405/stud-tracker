import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';

// props मध्ये थेट 'icon' ऐवजी 'Icon' (Capital I) लिहूया
const StatCard = ({ title, value, icon: Icon, trend, color }) => {
  return (
    
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col gap-4 relative overflow-hidden group"
    >
      <div className="flex justify-between items-start relative z-10">
        <div className={`p-3 rounded-2xl ${color} text-white shadow-lg`}>
          {/* आता इथे एरर येणार नाही कारण Icon डिफाइन केले आहे */}
          {Icon && <Icon size={24} />}
        </div>
        <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg uppercase tracking-widest">
          {trend}
        </span>
      </div>
      
      <div className="relative z-10">
        <p className="text-2xl font-black text-slate-800">{value}</p>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
          {title}
        </p>
      </div>
      
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-700 opacity-50"></div>
    </motion.div>
  );
};

export default StatCard;