import React, { useState } from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { 
  FileUp, FolderPlus, Search, FileText, 
  Video, Link as LinkIcon, MoreVertical, Trash2, Download 
} from 'lucide-react';

const ResourceVault = () => {
  const [activeTab, setActiveTab] = useState('All');

  const resources = [
    { id: 1, title: "Java_Basics_Unit1.pdf", type: "PDF", size: "2.4 MB", date: "Jan 15, 2026" },
    { id: 2, title: "Data_Structures_Lecture.mp4", type: "Video", size: "45 MB", date: "Jan 18, 2026" },
    { id: 3, title: "Assignment_Guidelines.docx", type: "Doc", size: "1.1 MB", date: "Jan 20, 2026" },
    { id: 4, title: "Reference_Links_List", type: "Link", size: "-", date: "Jan 21, 2026" },
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
            Resource <span className="text-emerald-500">Vault</span>
          </h1>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-1">
            Manage Study Materials & Lecture Notes
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-black text-[11px] uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <FolderPlus size={18} className="text-blue-500" />
            New Folder
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-emerald-500 rounded-2xl font-black text-[11px] uppercase tracking-widest text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
            <FileUp size={18} />
            Upload File
          </button>
        </div>
      </div>

      {/* --- SEARCH & TABS --- */}
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-white p-4 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="flex gap-2 overflow-x-auto p-1 no-scrollbar">
          {['All', 'Notes', 'Videos', 'Assignments', 'Links'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
                activeTab === tab ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="relative w-full lg:max-w-xs group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all"
          />
        </div>
      </div>

      {/* --- RESOURCE GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {resources.map((file) => (
      
          <motion.div 
            key={file.id}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/20 group relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className={`p-4 rounded-2xl ${
                file.type === 'PDF' ? 'bg-red-50 text-red-500' : 
                file.type === 'Video' ? 'bg-blue-50 text-blue-500' : 
                file.type === 'Link' ? 'bg-emerald-50 text-emerald-500' : 'bg-orange-50 text-orange-500'
              }`}>
                {file.type === 'Video' ? <Video size={24} /> : file.type === 'Link' ? <LinkIcon size={24} /> : <FileText size={24} />}
              </div>
              <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>

            <div className="relative z-10">
              <h4 className="font-black text-slate-800 text-sm truncate mb-1 group-hover:text-emerald-600 transition-colors tracking-tight">
                {file.title}
              </h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                {file.size} • {file.date}
              </p>
            </div>

            <div className="mt-6 flex gap-2 relative z-10">
              <button className="flex-1 py-3 bg-slate-50 hover:bg-emerald-500 hover:text-white rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-500 transition-all">
                View
              </button>
              <button className="p-3 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl transition-all">
                <Download size={14} />
              </button>
            </div>

            {/* Background Decoration */}
            <div className="absolute -right-2 -bottom-2 w-20 h-20 bg-slate-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ResourceVault;