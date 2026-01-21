import React, { useState } from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { 
  User, Mail, Briefcase, Lock, Bell, 
  Shield, Camera, Check, Save 
} from 'lucide-react';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('profile');

  return (
   
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="max-w-4xl mx-auto pb-20"
    >
      {/* --- HEADER --- */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black text-slate-800 tracking-tight">
          Account <span className="text-emerald-500 italic">Settings</span>
        </h1>
        <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] mt-2">
          Manage your professional presence & security
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* --- LEFT: NAVIGATION TABS --- */}
        <div className="md:col-span-1 space-y-2">
          {[
            { id: 'profile', label: 'Profile', icon: User },
            { id: 'security', label: 'Security', icon: Shield },
            { id: 'notifications', label: 'Alerts', icon: Bell },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
                activeSection === tab.id 
                ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' 
                : 'text-slate-400 hover:bg-white hover:text-slate-600'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- RIGHT: CONTENT AREA --- */}
        <div className="md:col-span-3 space-y-6">
          
          {/* PROFILE SECTION */}
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
            <div className="p-10 border-b border-slate-50 flex flex-col items-center">
              <div className="relative group">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Professor" 
                  className="w-32 h-32 rounded-[2.5rem] bg-slate-50 border-4 border-emerald-500/10 shadow-inner group-hover:opacity-80 transition-all" 
                  alt="Profile" 
                />
                <button className="absolute bottom-0 right-0 p-3 bg-emerald-500 text-white rounded-2xl border-4 border-white shadow-lg hover:scale-110 transition-transform">
                  <Camera size={18} />
                </button>
              </div>
              <h2 className="mt-6 text-xl font-black text-slate-800 tracking-tight">Prof. Deshmukh</h2>
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1 italic">HOD Computer Department</p>
            </div>

            <div className="p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                    <input type="text" defaultValue="Prof. Deshmukh" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Designation</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                    <input type="text" defaultValue="HOD Computer" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  <input type="email" defaultValue="deshmukh.prof@college.edu" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all" />
                </div>
              </div>

              <div className="pt-6 border-t border-slate-50 flex justify-end gap-3">
                <button className="px-8 py-4 bg-slate-100 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all">
                  Discard
                </button>
                <button className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2">
                  <Save size={16} /> Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* SECURITY SECTION (Quick Preview) */}
          <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h4 className="text-white font-black text-lg tracking-tight mb-1">Account Security</h4>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest italic">Last password change: 2 months ago</p>
              </div>
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-all backdrop-blur-md">
                Update Password
              </button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Settings;