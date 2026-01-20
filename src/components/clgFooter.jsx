import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; 
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] pt-20 pb-10 relative overflow-hidden text-gray-300">
      
      {/* Background Decorative - Subtle Glow Blobs for Depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. College Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white tracking-tighter cursor-default">
              Y<span className="text-blue-500">C</span>M
            </h2>
            <p className="text-gray-400 leading-relaxed font-medium">
              Empowering students with knowledge, innovation, and the skills to lead in the modern world.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.1, backgroundColor: '#3b82f6', color: '#ffffff' }}
                  href="#"
                  className="p-3 bg-white/5 border border-white/10 text-blue-400 rounded-xl transition-all duration-300 shadow-sm"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Courses', id: 'courses' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Contact Us', id: 'contact'}
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.id} 
                    smooth={true} 
                    duration={800} 
                    offset={-70} 
                    spy={true}
                    className="text-gray-400 hover:text-blue-400 font-medium transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Academic Programs */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Programs</h4>
            <ul className="space-y-4">
              {['BCA', 'BBA', 'BCS', 'MCA'].map((course) => (
                <li key={course} className="text-gray-400 hover:text-blue-400 font-medium cursor-pointer transition-colors flex items-center gap-2">
                   <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                   {course}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Details */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <p className="text-gray-400 font-medium text-sm leading-relaxed">
                  Yashwantrao Chavan Mahavidyalaya , Takari Road , Ishwarpur MH 415409
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <p className="text-gray-400 font-medium text-sm group-hover:text-gray-100 transition-colors">+91 12345 67890</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <p className="text-gray-400 font-medium text-sm group-hover:text-gray-100 transition-colors">YCM@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-medium italic">
            © 2026 YCM Student Tracker. All rights reserved.
          </p>
          
          <Link to="home" smooth={true} duration={1000}>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#3b82f6' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-2xl shadow-xl transition-all flex items-center gap-3 group"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Back to Top</span>
              <div className="p-1 bg-blue-500 rounded-md group-hover:bg-white group-hover:text-blue-600 transition-all">
                <ArrowUp size={16} />
              </div>
            </motion.button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;