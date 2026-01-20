import React, { useState } from 'react';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, ShieldCheck, Briefcase, Lock, Mail, ArrowRight } from 'lucide-react';

const Login = () => {
  const [role, setRole] = useState('student'); // Default role
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic: Role anusar redirection
    if (role === 'admin') navigate('/admin-dashboard');
    else if (role === 'teacher') navigate('/teacher-dashboard');
    else navigate('/student-dashboard');
  };

  const roles = [
    { id: 'student', label: 'Student', icon: <User size={16} /> },
    { id: 'teacher', label: 'Teacher', icon: <Briefcase size={16} /> },
    { id: 'admin', label: 'Admin', icon: <ShieldCheck size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Tech Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[1100px] grid lg:grid-cols-2 bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-xl shadow-2xl"
      >
        
        {/* --- Left Side: Visuals --- */}
        <div className="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-blue-600 to-indigo-800 relative">
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-black text-white mb-6 leading-tight"
            >
              Welcome to <br /> YCM Portal.
            </motion.h2>
            <p className="text-blue-100 text-lg mb-8 opacity-80">
              Access your personalized dashboard to track performance, manage courses, and stay updated.
            </p>
            
            {/* Decorative Element */}
            <div className="p-6 bg-white/10 rounded-3xl border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-lg">
                        <Lock size={24} />
                    </div>
                    <div>
                        <p className="font-bold">Secure Access</p>
                        <p className="text-xs opacity-70">Role-based encrypted login system</p>
                    </div>
                </div>
            </div>
          </div>
          
          {/* Abstract background shapes for left side */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        </div>

        {/* --- Right Side: Form --- */}
        <div className="p-8 lg:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center lg:text-left">
            <h3 className="text-3xl font-black text-white mb-2">Sign In</h3>
            <p className="text-gray-400">Please select your role to continue</p>
          </div>

          {/* Role Switcher Tabs */}
          <div className="flex p-1 bg-white/5 rounded-2xl border border-white/10 mb-8">
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setRole(r.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  role === r.id ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
                }`}
              >
                {r.icon}
                {r.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300 ml-1 uppercase tracking-widest">Email / ID</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder={`Enter ${role} ID`}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300 ml-1 uppercase tracking-widest">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 group mt-4"
            >
              LOGIN AS {role.toUpperCase()}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Registration Link - Only for Students */}
          <div className="mt-8 text-center">
            <p className="text-gray-500">
              {role === 'student' ? (
                <>
                  New student? <button onClick={() => navigate('/register')} className="text-blue-400 font-bold hover:underline">Create an Account</button>
                </>
              ) : (
                <span className="text-xs">Contact Admin for {role} credentials</span>
              )}
            </p>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Login;