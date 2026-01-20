import React, { useState } from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, BookOpen, Hash, Phone, ArrowLeft, CheckCircle2 } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();

  // 1. Initial State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    enrollmentNo: '',
    department: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  // 2. Handle Change Function (Error Fixer)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 3. Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registered Student Data:", formData);
    alert("Registration Successful! Redirecting to Login...");
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 lg:p-8 relative overflow-hidden text-white">
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-5xl bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl overflow-hidden grid lg:grid-cols-5"
      >
        
        {/* --- Left Info Panel --- */}
        <div className="lg:col-span-2 bg-gradient-to-br from-blue-700 to-indigo-900 p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <button 
              onClick={() => navigate('/login')}
              className="flex items-center gap-2 text-blue-100/70 hover:text-white transition-colors mb-12 font-bold text-sm"
            >
              <ArrowLeft size={16} /> Back to Login
            </button>
            
            <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Student <br />Registration.</h2>
            <p className="text-blue-100/80 mb-8 leading-relaxed font-medium">
              Create your official YCM account to access personalized dashboards and tracking tools.
            </p>

            <ul className="space-y-4">
              {['Attendance Tracking', 'Result Analysis', 'Course Materials'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-semibold">
                  <CheckCircle2 size={18} className="text-blue-300" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* --- Right Form Panel --- */}
        <div className="lg:col-span-3 p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-600"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="student@ycm.edu" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-600" required />
                </div>
              </div>
              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Phone</label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 0000000000" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-600" required />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Enrollment */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Enrollment No.</label>
                <div className="relative group">
                  <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input name="enrollmentNo" value={formData.enrollmentNo} onChange={handleChange} type="text" placeholder="YCM-2024-X" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-600" required />
                </div>
              </div>
              {/* Department */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Department</label>
                <div className="relative group">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <select 
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full bg-[#0f172a] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-all appearance-none"
                    required
                  >
                    <option value="" disabled>Select Dept</option>
                    <option value="BCA">BCA</option>
                    <option value="BCS">BCS</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="B.Com">B.Com</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Password */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-600" required />
                </div>
              </div>
              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Confirm</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-600" required />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl transition-all shadow-xl shadow-blue-600/20 mt-4 uppercase tracking-widest text-sm active:scale-95"
            >
              Register Account
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;