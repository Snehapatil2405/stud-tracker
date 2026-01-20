import React, { useState, useRef } from 'react';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Bell, Lock, Moon, Sun, Camera, ShieldCheck, 
  Palette, Zap, Check, Monitor, Fingerprint,
  Eye, EyeOff, BookOpen, Hash, GraduationCap,
  Smartphone, ShieldAlert, Globe, Radio
} from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [theme, setTheme] = useState('light');
  const [isSaved, setIsSaved] = useState(false);
  const [showPass, setShowPass] = useState(false);
  
  // --- SYNC STATES (Navbar sathi) ---
  const [userName, setUserName] = useState("Omkar Patil");
  const [year, setYear] = useState("SY");
  const [dept, setDept] = useState("BCA");
  const [avatar, setAvatar] = useState("https://api.dicebear.com/7.x/avataaars/svg?seed=Omkar");

  // Interactive States for Toggles
  const [twoFactor, setTwoFactor] = useState(false);
  const [biometric, setBiometric] = useState(true);
  const [notifications, setNotifications] = useState({ push: true, email: false, urgent: true });

  const fileInputRef = useRef(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // --- MAIN SAVE LOGIC ---
  const handleSave = () => {
    // 1. Navbar madhe dakhvnya sathi data prepare karne
    const userData = {
      name: userName,
      academic: `${year}-${dept} STUDENT`, // Format: SY-BCA STUDENT
      avatar: avatar
    };
    
    // 2. Local Storage madhe save karne
    localStorage.setItem('user_profile', JSON.stringify(userData));
    
    // 3. Navbar la signal denyasathi custom event
    window.dispatchEvent(new Event('storage_update'));

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0b0f1a] text-white' : 'bg-[#f8fafc] text-slate-900'} p-4 md:p-8 pb-24`}>
      
      {/* 1. ULTRA-PREMIUM HEADER (System Control Vault) */}
      
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto relative overflow-hidden bg-[#0f172a] rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-indigo-900/20 mb-10 mt-4"
      >
        {/* Background Abstract Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-5%] w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
               <Zap size={14} className="text-indigo-400" fill="currentColor" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">System Preferences</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
               Account <span className="text-indigo-500 italic">Settings.</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-slate-400 text-sm md:text-base font-medium flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck size={18} className="text-emerald-500" /> 
              Identity Verified • <span className="text-white font-bold">Secure Access Active</span>
            </p>
          </div>
          
          {/* Right Side Info Box */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
             <div className="bg-white/5 border border-white/10 p-5 px-8 rounded-[2rem] backdrop-blur-md text-center min-w-[150px] shadow-xl">
                <p className="text-[10px] font-black text-slate-500 uppercase mb-2 tracking-widest">Security Tier</p>
                <div className="flex items-center justify-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <p className="text-xl font-black text-white uppercase tracking-tighter">Level 01</p>
                </div>
             </div>

             {/* Secondary Icon Action */}
             <motion.div 
               whileHover={{ rotate: 90 }}
               className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 backdrop-blur-md"
             >
               <Lock size={20} />
             </motion.div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* 2. SIDEBAR */}
        <aside className="lg:w-60 space-y-3">
          {[
            { id: 'profile', label: 'General', icon: User },
            { id: 'security', label: 'Security', icon: Lock },
            { id: 'notifications', label: 'Alerts', icon: Bell },
            { id: 'appearance', label: 'Visuals', icon: Palette },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-3xl font-black text-[11px] uppercase tracking-widest transition-all ${
                activeTab === item.id 
                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200' 
                : theme === 'dark' ? 'text-slate-500 hover:bg-white/5' : 'text-slate-400 hover:bg-white shadow-sm'
              }`}
            >
              <item.icon size={18} /> {item.label}
            </button>
          ))}
        </aside>

        {/* 3. MAIN CONTENT AREA */}
        <main className={`flex-1 rounded-[4rem] p-8 md:p-14 border transition-all relative ${
          theme === 'dark' ? 'bg-[#151b2d] border-white/5 shadow-2xl' : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50'
        }`}>
          <AnimatePresence mode="wait">
            
            {/* --- GENERAL TAB --- */}
            {activeTab === 'profile' && (
              <motion.div key="profile" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div className="flex flex-col md:flex-row items-center gap-8 border-b border-slate-100 pb-10">
                  <div className="relative group">
                    <img src={avatar} className="w-32 h-32 rounded-[3rem] object-cover border-4 border-indigo-500/20 shadow-xl" alt="" />
                    <button onClick={() => fileInputRef.current.click()} className="absolute bottom-0 right-0 bg-slate-900 text-white p-3 rounded-2xl shadow-lg hover:bg-indigo-600 transition-colors">
                      <Camera size={18} />
                    </button>
                    <input type="file" hidden ref={fileInputRef} onChange={handleAvatarChange} accept="image/*" />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-[1000] tracking-tighter">Academic Profile</h2>
                    <p className="text-indigo-500 font-bold text-xs uppercase tracking-widest mt-1">{year}-{dept} Student • YCM-2026</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Full Name</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full p-5 rounded-2xl bg-slate-50 border-none font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">PRN Number</label>
                    <input type="text" defaultValue="2026CS108" readOnly className="w-full p-5 rounded-2xl bg-slate-200/40 border-none font-bold text-slate-400 outline-none cursor-not-allowed" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Department</label>
                    <select value={dept} onChange={(e) => setDept(e.target.value)} className="w-full p-5 rounded-2xl bg-slate-50 border-none font-bold text-slate-700 outline-none">
                      <option value="BCA">BCA (Bachelor of Computer App)</option>
                      <option value="BCS">BCS (Computer Science)</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Year</label>
                      <select value={year} onChange={(e) => setYear(e.target.value)} className="w-full p-5 rounded-2xl bg-slate-50 border-none font-bold text-slate-700 outline-none">
                        <option value="FY">FY</option><option value="SY">SY</option><option value="TY">TY</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Semester</label>
                      <select className="w-full p-5 rounded-2xl bg-slate-50 border-none font-bold text-slate-700 outline-none">
                        {[1,2,3,4,5,6].map(s => <option key={s}>{s}th Sem</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- SECURITY TAB --- */}
            {activeTab === 'security' && (
              <motion.div key="security" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10">
                <h2 className="text-2xl font-black tracking-tight">Access & Security</h2>
                <div className="space-y-4">
                  <div onClick={() => setTwoFactor(!twoFactor)} className="p-7 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer hover:bg-white transition-all">
                    <div className="flex items-center gap-5">
                      <div className={`p-4 rounded-2xl ${twoFactor ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-slate-400'}`}><ShieldCheck size={24}/></div>
                      <div><p className="font-black text-sm uppercase">2-Factor Auth</p><p className="text-[10px] font-bold text-slate-400">Secure with OTP</p></div>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative transition-colors ${twoFactor ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                      <motion.div animate={{ x: twoFactor ? 24 : 4 }} className="absolute top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>

                  <div onClick={() => setBiometric(!biometric)} className="p-7 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex items-center justify-between cursor-pointer hover:bg-white transition-all">
                    <div className="flex items-center gap-5">
                      <div className={`p-4 rounded-2xl ${biometric ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-slate-400'}`}><Fingerprint size={24}/></div>
                      <div><p className="font-black text-sm uppercase">Biometric Login</p><p className="text-[10px] font-bold text-slate-400">FaceID / TouchID</p></div>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative transition-colors ${biometric ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                      <motion.div animate={{ x: biometric ? 24 : 4 }} className="absolute top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Update Password</label>
                  <div className="relative">
                    <input type={showPass ? "text" : "password"} defaultValue="student_pass" className="w-full p-5 rounded-2xl bg-slate-50 border-none font-bold outline-none pr-14" />
                    <button onClick={() => setShowPass(!showPass)} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600">
                      {showPass ? <EyeOff size={20}/> : <Eye size={20}/>}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- ALERTS TAB --- */}
            {activeTab === 'notifications' && (
              <motion.div key="alerts" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <h2 className="text-2xl font-black tracking-tight mb-4">Communication Alerts</h2>
                {[
                  { id: 'push', title: "Push Notifications", desc: "For new assignments & exam dates.", icon: Radio },
                  { id: 'email', title: "Email Reports", desc: "Weekly attendance & grade summary.", icon: Globe },
                  { id: 'urgent', title: "Urgent Alerts", desc: "Direct messages from HOD/Dean.", icon: ShieldAlert }
                ].map((item) => (
                  <div key={item.id} 
                    onClick={() => setNotifications(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                    className="flex items-center justify-between p-6 rounded-[2rem] bg-slate-50 border border-slate-100 cursor-pointer hover:border-indigo-200 transition-all"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`p-4 rounded-2xl shadow-sm ${notifications[item.id] ? 'bg-indigo-600 text-white' : 'bg-white text-slate-400'}`}><item.icon size={20}/></div>
                      <div><h5 className="font-black text-sm">{item.title}</h5><p className="text-[11px] text-slate-500 font-medium">{item.desc}</p></div>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative transition-colors ${notifications[item.id] ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                      <motion.div animate={{ x: notifications[item.id] ? 24 : 4 }} className="absolute top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* --- VISUALS TAB --- */}
            {activeTab === 'appearance' && (
              <motion.div key="visuals" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10">
                <h2 className="text-2xl font-black tracking-tight mb-8">Interface Theme</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['light', 'dark', 'system'].map((t) => (
                    <button key={t} onClick={() => setTheme(t)} className={`p-8 rounded-[2.5rem] border-2 flex flex-col items-center gap-4 transition-all ${theme === t ? 'border-indigo-600 bg-indigo-50/50 shadow-inner' : 'border-transparent bg-slate-50 hover:bg-white shadow-sm'}`}>
                      <div className={`p-5 rounded-2xl ${theme === t ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-slate-400'}`}>
                        {t === 'light' ? <Sun size={26}/> : t === 'dark' ? <Moon size={26}/> : <Monitor size={26}/>}
                      </div>
                      <span className="font-black text-[10px] uppercase tracking-widest">{t}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* --- UPDATE RECORDS BUTTON --- */}
            <div className="mt-12 pt-10 border-t border-slate-100 flex justify-end">
              <button 
                onClick={handleSave}
                className={`px-12 py-5 rounded-[2.2rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center gap-3 shadow-2xl ${
                  isSaved ? 'bg-emerald-500 text-white scale-95' : 'bg-slate-900 text-white hover:bg-indigo-600 hover:-translate-y-1'
                }`}
              >
                {isSaved ? <><Check size={18}/> Information Updated</> : 'Update Records'}
              </button>
            </div>

          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;