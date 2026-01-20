import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* --- ADDED: Background Decorative Elements --- */}
      {/* Blue Floating Blob */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0], 
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] z-0"
      />
      {/* Purple Floating Blob */}
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[120px] z-0"
      />
      
      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Title Section with English Subtitle --- */}
<div className="text-center mb-16 relative z-10">
  <motion.h2 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-5xl font-black text-gray-900"
  >
    Get In <span className="text-blue-600">Touch</span>
  </motion.h2>
  
  <motion.p 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="text-gray-500 mt-4 font-medium max-w-2xl mx-auto text-lg leading-relaxed"
  >
    "Have questions or need assistance? Our team is here to support your academic journey. Reach out to us and let's build your future together."
  </motion.p>

  <motion.div 
    initial={{ width: 0 }}
    whileInView={{ width: "100px" }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="h-1.5 bg-blue-600 mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"
  />
</div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          
          {/* Left Side: Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-5/12 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white sm:col-span-2 shadow-2xl shadow-blue-300/50 flex flex-col justify-between">
               <div>
                 <MessageCircle size={40} className="mb-4 text-blue-200" />
                 <h3 className="text-3xl font-bold mb-2">Live Chat</h3>
                 <p className="text-blue-100 text-sm">Our support team is online 24/7 to help you with queries.</p>
               </div>
               <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-bold text-sm mt-6 w-fit hover:bg-blue-50 transition-colors">
                 Start Chat
               </button>
            </div>

            <div className="bg-white/60 backdrop-blur-md p-6 rounded-[2rem] border border-white shadow-sm flex flex-col items-center text-center">
               <Phone className="text-blue-600 mb-3" size={24} />
               <p className="font-bold text-gray-900">Phone</p>
               <p className="text-gray-600 text-xs mt-1">+91 12345 67890</p>
            </div>

            <div className="bg-white/60 backdrop-blur-md p-6 rounded-[2rem] border border-white shadow-sm flex flex-col items-center text-center">
               <Globe className="text-blue-600 mb-3" size={24} />
               <p className="font-bold text-gray-900">Global</p>
               <p className="text-gray-600 text-xs mt-1">www.college.edu</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] sm:col-span-2 border border-white shadow-sm flex items-center justify-between group cursor-pointer">
              <div>
                <p className="font-bold text-gray-900 text-xl">Visit Campus</p>
                <p className="text-gray-500 text-sm">Yashwantrao Chavan Mahavidyala, Ishwarpur</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                <MapPin />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Floating Glass Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-7/12 w-full h-full"
          >
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white h-full">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" className="w-full bg-white border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm border" />
                  <input type="email" placeholder="Email Address" className="w-full bg-white border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm border" />
                </div>
                <select className="w-full bg-white border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm border text-gray-500">
                  <option>Select Subject</option>
                  <option>Admission</option>
                  <option>Support</option>
                </select>
                <textarea rows="4" placeholder="How can we help you?" className="w-full bg-white border-gray-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm border resize-none"></textarea>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#0f172a] text-white text-lg font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl shadow-blue-100"
                >
                  Shoot Message
                  <Send size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;