import React, { useState } from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { 
  Megaphone, Send, Clock, Users, 
  Trash2, AlertTriangle, Info, Bell, Plus
} from 'lucide-react';

const Broadcast = () => {
  const [announcement, setAnnouncement] = useState("");

  const previousAnnouncements = [
    { id: 1, title: "Sessional Exam Date Change", content: "The Java programming sessional exam is postponed to next Monday.", type: "Urgent", date: "Jan 20, 10:30 AM" },
    { id: 2, title: "Lab Journal Submission", content: "Please submit your completed journals by Friday at the department office.", type: "Info", date: "Jan 18, 02:15 PM" },
    { id: 3, title: "Guest Lecture on Cloud", content: "A special session by industry experts is scheduled for tomorrow in the auditorium.", type: "Normal", date: "Jan 15, 11:00 AM" },
  ];

  return (
 
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="space-y-8 pb-10"
    >
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Class <span className="text-emerald-500">Broadcast</span>
          </h1>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">
            Send instant notifications to all students
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-sm">
           <Bell size={16} className="text-orange-500 animate-bounce" />
           <span className="text-[10px] font-black text-slate-700 uppercase">32 Students Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT: SEND NEW ANNOUNCEMENT --- */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/20">
            <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
              <Plus size={16} className="text-emerald-500" /> New Notice
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Exam Update" 
                  className="w-full mt-2 p-4 bg-slate-50 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all"
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Type your message here..." 
                  className="w-full mt-2 p-4 bg-slate-50 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all resize-none"
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="py-4 bg-slate-800 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-700 transition-all shadow-lg">
                  Draft
                </button>
                <button className="py-4 bg-emerald-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">
                  <Send size={14} /> Send Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT: PREVIOUS ANNOUNCEMENTS --- */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center px-4">
            <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest">History</h3>
            <button className="text-emerald-500 font-bold text-[10px] uppercase tracking-widest">View All</button>
          </div>

          <div className="space-y-4">
            {previousAnnouncements.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex gap-4">
                    <div className={`p-3 rounded-xl ${
                      item.type === 'Urgent' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'
                    }`}>
                      {item.type === 'Urgent' ? <AlertTriangle size={20} /> : <Info size={20} />}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="font-black text-slate-800 text-sm tracking-tight">{item.title}</h4>
                        <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-md ${
                          item.type === 'Urgent' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                        }`}>{item.type}</span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">{item.content}</p>
                      <div className="flex items-center gap-2 mt-4 text-slate-400">
                        <Clock size={12} />
                        <span className="text-[9px] font-bold uppercase tracking-widest">{item.date}</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-slate-200 hover:text-red-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="absolute top-0 right-0 w-1.5 h-full bg-slate-100 group-hover:bg-emerald-500 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Broadcast;