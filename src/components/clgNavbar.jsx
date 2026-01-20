import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom'; // Navigation sathi
// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook initialize kela

  // Scroll effect handle karnyathi
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Courses', id: 'courses' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* --- Logo Section --- */}
        <Link 
          to="home" 
          smooth={true} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition-opacity"
            ></motion.div>
            
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 p-2.5 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="text-white" size={24} strokeWidth={2.5} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#020617] rounded-full shadow-sm"></div>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl font-black leading-none tracking-tighter text-white">
              Y<span className="text-blue-500 italic">C</span>M
            </span>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mt-0.5 font-mono">
              Tracker
            </span>
          </div>
        </Link>

        {/* --- Desktop Navigation --- */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full px-2 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.id}
                smooth={true}
                spy={true}
                offset={-70}
                activeClass="bg-blue-600 text-white shadow-lg"
                className="px-5 py-2 rounded-full text-sm font-bold text-gray-300 hover:text-white cursor-pointer transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Login Button with Navigation */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37,99,235,0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login')} // Redirect to Login
            className="flex items-center gap-2 bg-blue-600 text-white px-7 py-2.5 rounded-full font-black text-sm transition-all"
          >
            <User size={18} />
            LOGIN
          </motion.button>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#020617] border-t border-white/5 p-6 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.id}
                  smooth={true}
                  spy={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-gray-400 hover:text-blue-500 py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => {
                  navigate('/login');
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 bg-blue-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 shadow-xl"
              >
                <User size={20} /> LOGIN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;