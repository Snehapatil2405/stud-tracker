import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { ArrowRight, UserPlus, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#020617]">

      {/* --- TECH SHAPES & BACKGROUND --- */}
      <div className="absolute inset-0 z-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}>
      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{ rotate: [45, 55, 45], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[10%] w-12 h-12 border-2 border-blue-500/30 rounded-xl rotate-45 hidden lg:block"
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-40 left-[5%] w-40 h-40 bg-blue-600/20 rounded-full blur-[80px]"
      />

      <motion.div
        animate={{ rotate: [45, 55, 45], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[10%] w-12 h-12 border-2 border-blue-500/30 rounded-xl rotate-45 hidden lg:block"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* --- LEFT SIDE: CONTENT --- */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 font-bold text-sm backdrop-blur-md"
            >
              <Sparkles size={16} />
              <span>Next-Gen Student Performance Tracker</span>
            </motion.div>

            {/* --- UPDATED MAIN HEADING --- */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter"
            >
              Yashwantrao Chavan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500">
                Mahavidyalaya
              </span>
            </motion.h1>

            {/* Optional: Sub-heading to keep the "Growth" vibe */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Official Student Performance Tracker: Monitoring excellence, analytics, and academic growth in real-time.
            </motion.p>
            {/* Buttons Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link to="courses" smooth={true}>
                <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg flex items-center gap-2 hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 group">
                  Explore Programs <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              {/* Admission Enquiry Button - Scroll to Contact */}
              <Link to="contact" smooth={true} offset={-70}>
                <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold text-lg flex items-center gap-2 hover:bg-white/10 transition-all group backdrop-blur-sm">
                  <div className="bg-blue-500/20 p-1.5 rounded-full text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <UserPlus size={16} />
                  </div>
                  Admission Enquiry
                </button>
              </Link>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-sm font-bold text-gray-500"
            >
              <div className="flex items-center gap-2"><CheckCircle className="text-blue-500" size={18} /> NAAC A+ Grade</div>
              <div className="flex items-center gap-2"><CheckCircle className="text-blue-500" size={18} /> Top Placements</div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: SINGLE IMAGE --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 relative flex justify-center"
          >
            <div className="relative z-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-[2px] shadow-2xl shadow-blue-900/40">
              <div className="bg-[#020617] rounded-[2.9rem] overflow-hidden p-2">
                <img
                  src="/clgimg.jpeg"
                  alt="College Campus"
                  className="w-full h-full object-cover rounded-[2.5rem] opacity-90"
                />
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-8 bg-[#0f172a]/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                  <Sparkles size={24} />
                </div>
                <div>
                  <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">Join Now</p>
                  <p className="text-xl font-black text-white italic">5000+ Students</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;