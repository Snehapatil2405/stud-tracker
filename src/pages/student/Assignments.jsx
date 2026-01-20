// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Search, Filter, Plus, FileText, 
  Clock, CheckCircle2, AlertCircle, UploadCloud, 
  MoreVertical, ExternalLink 
} from 'lucide-react';

const Assignments = () => {
  const [filter, setFilter] = useState('all'); // all, pending, completed
  const [searchQuery, setSearchQuery] = useState('');

  const allTasks = [
    { id: 1, title: 'Network Security Lab', subject: 'Cyber Security', dueDate: '15 Jan 2026', status: 'pending', priority: 'high', description: 'Complete the RSA algorithm implementation and submit the PDF.' },
    { id: 2, title: 'React Hooks Research', subject: 'Web Dev', dueDate: '18 Jan 2026', status: 'pending', priority: 'medium', description: 'Create a small project using useMemo and useCallback.' },
    { id: 3, title: 'SQL Optimization', subject: 'DBMS', dueDate: '10 Jan 2026', status: 'completed', priority: 'low', description: 'Final project on indexing and query performance.' },
    { id: 4, title: 'Java Swing UI', subject: 'Java Prog.', dueDate: '20 Jan 2026', status: 'pending', priority: 'medium', description: 'Design a desktop application for Library Management.' },
    { id: 5, title: 'Ethics in AI', subject: 'General', dueDate: '05 Jan 2026', status: 'completed', priority: 'low', description: '1000-word essay on AI ethics.' },
  ];

  const filteredTasks = allTasks.filter(task => {
    const matchesFilter = filter === 'all' || task.status === filter;
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-10">
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Assignment Portal</h1>
          <p className="text-slate-500 font-medium mt-1">Manage, Track and Submit your academic tasks.</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-indigo-200"
        >
          <Plus size={20} /> Request Extension
        </motion.button>
      </div>

      {/* 2. SEARCH & FILTERS */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm">
        <div className="relative w-full lg:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="Search assignments..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 font-medium"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl w-full lg:w-fit">
          {['all', 'pending', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`flex-1 lg:flex-none px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                filter === tab ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 3. ASSIGNMENT CARDS GRID */}
      <div className="grid grid-cols-1 gap-6">
        <AnimatePresence mode='popLayout'>
          {filteredTasks.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 ${
                  task.status === 'completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  {task.status === 'completed' ? <CheckCircle2 size={32} /> : <FileText size={32} />}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-tighter">
                      {task.subject}
                    </span>
                    {task.priority === 'high' && task.status === 'pending' && (
                      <span className="flex items-center gap-1 text-rose-500 text-[10px] font-black uppercase tracking-widest animate-pulse">
                        <AlertCircle size={12} /> High Priority
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {task.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-2 max-w-xl line-clamp-2 font-medium">
                    {task.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 lg:border-l lg:pl-10 border-slate-100">
                <div className="text-center sm:text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Due Date</p>
                  <div className="flex items-center gap-2 text-slate-900 font-bold">
                    <Clock size={16} className="text-indigo-500" />
                    {task.dueDate}
                  </div>
                </div>

                <div className="flex gap-3">
                  {task.status === 'pending' ? (
                    <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-indigo-600 transition-all shadow-lg">
                      <UploadCloud size={18} /> Submit
                    </button>
                  ) : (
                    <button className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-6 py-3 rounded-2xl font-bold text-sm border border-emerald-100">
                      <ExternalLink size={18} /> View Grade
                    </button>
                  )}
                  <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 transition-all">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredTasks.length === 0 && (
        <div className="py-20 text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
             <Search size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900">No Assignments Found</h3>
          <p className="text-slate-500">Try changing your filters or search query.</p>
        </div>
      )}
    </div>
  );
};

export default Assignments;