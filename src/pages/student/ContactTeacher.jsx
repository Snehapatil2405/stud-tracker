// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react'; // useEffect remove kela garaj navhti mhanun
import { 
  MessageSquare, Phone, Search, Star, Zap, X, Send, Check, 
  Paperclip, Image as ImageIcon, FileText, Sparkles, ChevronRight,CheckCircle
} from 'lucide-react';

const facultyData = [
  { id: 1, name: "Dr. Arvind Kulkarni", role: "HOD", dept: "Computer", expertise: "ML & AI", status: "Online", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arvind" },
  { id: 2, name: "Prof. Rahul More", role: "Lab Head", dept: "IT", expertise: "Networks", status: "Online", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" },
  { id: 3, name: "Prof. Sneha Patil", role: "Professor", dept: "IT", expertise: "DBMS", status: "Away", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha" }
];

const ContactTeacher = () => {
  // --- STATES ---
  const [searchTerm, setSearchTerm] = useState("");
  const [activeChat, setActiveChat] = useState(null);
  const [msgText, setMsgText] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const fileInputRef = useRef(null);

  // --- HANDLERS ---
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile({
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file)
      });
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if(!msgText.trim() && !selectedFile) return;

    const newMessage = {
      id: Date.now(),
      text: msgText,
      file: selectedFile,
      sender: 'student',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages(prev => [...prev, newMessage]);
    setMsgText("");
    setSelectedFile(null);

    // Teacher Simulation Reply
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        text: "I have received your query. I'll check the details and get back to you.",
        sender: 'teacher',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, reply]);
    }, 2500);
  };

  const filteredFaculty = facultyData.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8F9FD] p-6">
      
      {/* 1. ULTRA-PREMIUM HEADER (Faculty Vault) */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-[#0f172a] rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-indigo-900/20 mb-10"
      >
        {/* Background Decorative Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-5%] w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
               <Sparkles size={14} className="text-indigo-400" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">Support Ecosystem</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
               Contact <span className="text-indigo-500 italic">Faculty.</span>
            </h1>
            
            {/* Subtitle / Breadcrumb style */}
            <p className="text-slate-400 text-sm md:text-base font-medium flex items-center justify-center md:justify-start gap-2">
              <CheckCircle size={18} className="text-emerald-500" /> 
              Direct Mentorship • <span className="text-white font-bold">24/7 Query Resolution</span>
            </p>
          </div>
          
          {/* Right Side Stats (Faculty Count) */}
          <div className="flex items-center gap-4">
             <div className="bg-white/5 border border-white/10 p-4 px-8 rounded-3xl backdrop-blur-md text-center min-w-[140px] shadow-inner">
                <p className="text-3xl font-black text-indigo-400 leading-none">12</p>
                <p className="text-[9px] font-black text-slate-500 uppercase mt-2 tracking-widest">Live Educators</p>
             </div>
             
             {/* Secondary Button or Info */}
             <div className="hidden lg:block w-[1px] h-16 bg-white/10 mx-2" />
             
             <div className="hidden lg:flex flex-col gap-1">
                <p className="text-[10px] font-black text-indigo-300 uppercase tracking-tighter">Response Time</p>
                <p className="text-white font-bold text-sm">~15 Minutes</p>
             </div>
          </div>
        </div>
      </motion.header>

      {/* 2. SEARCH BOX */}
      <div className="relative mb-10 group max-w-2xl">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
        <input 
          type="text" 
          placeholder="Search teacher name..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-16 pr-8 py-6 bg-white rounded-[2.5rem] shadow-xl border-none outline-none font-bold text-slate-700" 
        />
      </div>

      {/* 3. FACULTY LIST (GRID) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map((teacher) => (
          <motion.div 
            key={teacher.id} 
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-50 relative overflow-hidden group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="relative">
                <img src={teacher.avatar} className="w-20 h-20 rounded-[2rem] bg-slate-100 shadow-inner" alt="avatar" />
                <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-4 border-white ${teacher.status === 'Online' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
              </div>
              <div className="flex items-center gap-1 text-amber-500 font-black text-sm bg-amber-50 px-3 py-1 rounded-full"><Star size={14} fill="currentColor" /> 4.9</div>
            </div>
            
            <h3 className="text-xl font-black text-slate-900 tracking-tight">{teacher.name}</h3>
            <p className="text-indigo-600 font-bold text-[10px] uppercase tracking-widest mt-1 mb-6">{teacher.role} • {teacher.dept}</p>
            
            <button 
              onClick={() => setActiveChat(teacher)} 
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare size={16} /> Send Message
            </button>
          </motion.div>
        ))}
      </div>

      {/* 4. CHAT MODAL SYSTEM */}
      <AnimatePresence>
        {activeChat && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setActiveChat(null)} 
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[99]" 
            />
            
            {/* Chat Window */}
            <motion.div 
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
              className="fixed bottom-0 right-0 left-0 md:left-auto md:right-10 md:bottom-10 md:w-[450px] bg-white rounded-t-[3rem] md:rounded-[3.5rem] shadow-2xl z-[100] overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="bg-slate-900 p-8 flex justify-between items-center text-white shrink-0">
                <div className="flex items-center gap-4">
                  <img src={activeChat.avatar} className="w-12 h-12 rounded-2xl border-2 border-indigo-500" alt="" />
                  <div>
                    <p className="font-black text-sm tracking-tight">{activeChat.name}</p>
                    <p className="text-[10px] text-indigo-400 font-bold uppercase">Online Now</p>
                  </div>
                </div>
                <button onClick={() => setActiveChat(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={24}/></button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/50">
                {messages.length === 0 && (
                   <div className="h-full flex flex-col items-center justify-center opacity-20 py-20">
                      <Sparkles size={40} className="text-slate-900 mb-2" />
                      <p className="font-black text-[10px] uppercase tracking-[0.3em]">Start conversation</p>
                   </div>
                )}
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex flex-col ${msg.sender === 'student' ? 'items-end' : 'items-start'}`}>
                    <div className={`p-4 rounded-[1.8rem] text-sm font-bold shadow-sm max-w-[85%] ${msg.sender === 'student' ? 'bg-indigo-600 text-white rounded-tr-none shadow-indigo-200' : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'}`}>
                      {msg.text && <p>{msg.text}</p>}
                      {msg.file && (
                        <div className="mt-2 rounded-xl overflow-hidden">
                          {msg.file.type.startsWith('image/') ? (
                            <img src={msg.file.url} className="w-full h-auto max-h-48 object-cover rounded-lg" alt="upload" />
                          ) : (
                            <div className="bg-slate-900/5 p-3 flex items-center gap-3 rounded-lg">
                               <FileText size={18} className="text-indigo-600" />
                               <span className="text-[10px] truncate w-32">{msg.file.name}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] text-slate-400 font-black mt-1 px-2 uppercase tracking-widest">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-6 bg-white border-t border-slate-100 shrink-0">
                {selectedFile && (
                  <div className="mb-4 p-3 bg-indigo-50 rounded-2xl flex items-center justify-between border border-indigo-100 animate-pulse">
                    <div className="flex items-center gap-3 overflow-hidden">
                       <ImageIcon size={18} className="text-indigo-600 shrink-0" />
                       <p className="text-[10px] font-black text-indigo-900 truncate">{selectedFile.name}</p>
                    </div>
                    <button onClick={() => setSelectedFile(null)} className="p-1 text-rose-500"><X size={16}/></button>
                  </div>
                )}

                <div className="flex items-center gap-3 bg-slate-100 p-2 rounded-3xl">
                  <input type="file" hidden ref={fileInputRef} onChange={handleFileChange} />
                  <button 
                    onClick={() => fileInputRef.current.click()}
                    className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    <Paperclip size={22} />
                  </button>
                  <textarea 
                    value={msgText} onChange={(e) => setMsgText(e.target.value)}
                    placeholder="Ask a question..." 
                    className="flex-1 bg-transparent border-none outline-none py-3 text-sm font-bold resize-none min-h-[48px] max-h-[100px]"
                  />
                  <button 
                    onClick={handleSendMessage}
                    className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:scale-105 transition-all shadow-lg active:scale-95"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactTeacher;