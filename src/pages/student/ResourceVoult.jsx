import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, FileText, Download, Search, Folder, ChevronRight, X, Eye, 
  Settings, Layers, CalendarDays, BarChart, GraduationCap, Laptop, Cog, Globe
} from 'lucide-react';

// --- MOCK DATA ---
const studentProfile = {
  name: "Aditya",
  year: "TE", // This will be fetched from user's settings/context
  dept: "Computer" // This will be fetched from user's settings/context
};

const allSubjects = [
  { id: 1, name: "Database Management", code: "CS301", units: 6, dept: "Computer", year: "TE", color: "bg-gradient-to-br from-blue-500 to-blue-700" },
  { id: 2, name: "Theory of Computation", code: "CS302", units: 5, dept: "Computer", year: "TE", color: "bg-gradient-to-br from-purple-500 to-purple-700" },
  { id: 3, name: "Computer Networks", code: "CS303", units: 6, dept: "Computer", year: "TE", color: "bg-gradient-to-br from-emerald-500 to-emerald-700" },
  { id: 4, name: "Software Engineering", code: "CS304", units: 4, dept: "Computer", year: "TE", color: "bg-gradient-to-br from-orange-500 to-orange-700" },
  { id: 5, name: "Artificial Intelligence", code: "CS401", units: 5, dept: "Computer", year: "BE", color: "bg-gradient-to-br from-red-500 to-red-700" },
  { id: 6, name: "Web Technologies", code: "IT301", units: 6, dept: "IT", year: "TE", color: "bg-gradient-to-br from-sky-500 to-sky-700" },
];

const subjectFiles = {
  CS301: [ // Files for Database Management
    { id: 101, name: "Unit 1: Introduction to DBMS.pdf", size: "2.4 MB", date: "2 days ago", type: "pdf", link: "/path/to/dbms_unit1.pdf" },
    { id: 102, name: "Relational Algebra & SQL Cheatsheet.pdf", size: "1.8 MB", date: "5 days ago", type: "pdf", link: "/path/to/dbms_sql.pdf" },
    { id: 103, name: "ER Diagram Practice Problems.pdf", size: "1.2 MB", date: "1 week ago", type: "pdf", link: "/path/to/dbms_er.pdf" },
    { id: 104, name: "DBMS Previous Year Paper (2023).pdf", size: "4.1 MB", date: "1 week ago", type: "pdf", link: "/path/to/dbms_pyq.pdf" },
  ],
  CS303: [ // Files for Computer Networks
    { id: 201, name: "Unit 1: Network Layers.pdf", size: "3.1 MB", date: "3 days ago", type: "pdf", link: "/path/to/cn_unit1.pdf" },
    { id: 202, name: "TCP/IP Protocol Stack.pdf", size: "2.5 MB", date: "6 days ago", type: "pdf", link: "/path/to/cn_tcpip.pdf" },
  ]
  // ... more files for other subjects
};

// --- Framer Motion Variants ---
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { 
    opacity: 1, y: 0, scale: 1, 
    transition: { type: "spring", damping: 15, stiffness: 200, duration: 0.5 }
  },
  hover: { 
    scale: 1.03, 
    boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.15)",
    transition: { type: "spring", stiffness: 300, damping: 10 }
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 250 } },
  exit: { opacity: 0, scale: 0.9, y: -50, transition: { duration: 0.2 } }
};

const fileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  hover: { x: 5 }
};

const PreviewModal = ({ file, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = () => {
    setDownloading(true);
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 10;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => { // Simulate download completion and close
          setDownloading(false);
          setProgress(0);
          window.open(file.link, '_blank'); // Open in new tab for actual download
          onClose(); 
        }, 500);
      }
      setProgress(currentProgress);
    }, 150);
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[70] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl relative"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors z-10">
          <X size={20} />
        </button>

        <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center gap-4">
          <FileText size={36} />
          <div>
            <h3 className="text-xl font-bold">{file.name}</h3>
            <p className="text-sm opacity-80">{file.size}</p>
          </div>
        </div>

        <div className="h-[400px] flex flex-col items-center justify-center bg-slate-100 text-slate-400">
          {/* A real PDF viewer would go here, e.g., react-pdf */}
          <FileText size={80} className="mb-4 text-slate-300" />
          <p className="text-lg font-medium">Viewing {file.type.toUpperCase()} File...</p>
          <p className="text-sm"> (A full preview would be rendered here in a real app)</p>
        </div>

        <div className="p-6 flex flex-col items-center">
          {downloading ? (
            <div className="w-full bg-blue-100 rounded-full h-3 mb-4 relative overflow-hidden">
              <motion.div
                className="bg-blue-600 h-full rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-blue-800">
                Downloading {Math.round(progress)}%
              </span>
            </div>
          ) : (
            <motion.button 
              onClick={handleDownload}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-emerald-200 transition-all"
            >
              <Download size={18} /> Download
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main ResourceVault Component ---
const ResourceVault = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentFiles, setCurrentFiles] = useState([]);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);

  const [currentYear, setCurrentYear] = useState(studentProfile.year);
  const [currentDept, setCurrentDept] = useState(studentProfile.dept);

  useEffect(() => {
    if (selectedSubject) {
      setLoadingFiles(true);
      // Simulate API call
      setTimeout(() => {
        setCurrentFiles(subjectFiles[selectedSubject.code] || []);
        setLoadingFiles(false);
      }, 700); // Simulate network delay
    } else {
      setCurrentFiles([]);
    }
  }, [selectedSubject]);

  const filteredSubjects = allSubjects.filter(sub => 
    sub.year === currentYear && 
    sub.dept === currentDept &&
    sub.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6 md:p-10 font-sans text-slate-800 relative overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Background Gradient Blob 1 */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute top-10 left-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
      ></motion.div>
      {/* Background Gradient Blob 2 */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ delay: 0.7, duration: 1.5 }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
      ></motion.div>


      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- PREMIUM HEADER SECTION START --- */}
      <header className="mb-12 space-y-8">
        {/* Modern Dark Banner - जसा इमेज मध्ये आहे */}
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative bg-[#0f172a] rounded-[3rem] p-10 md:p-14 overflow-hidden shadow-2xl shadow-blue-900/20"
        >
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-blue-400 font-black tracking-[0.3em] text-xs uppercase mb-4 block"
              >
                Knowledge Repository
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4">
                Resource <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Vault.</span>
              </h1>
              
            </div>

            {/* Live Stats Badge */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 p-7 rounded-[2.5rem] flex items-center gap-5 group"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/30 group-hover:rotate-12 transition-transform">
                <Layers size={28} />
              </div>
              <div>
                <h4 className="text-3xl font-black text-white">450+</h4>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Active Resources</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Search & Filter Bar - Floating Style */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col lg:flex-row gap-4 items-center"
        >
          {/* Enhanced Search Input */}
          <div className="relative flex-1 w-full group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
              <Search size={22} />
            </div>
            <input 
              type="text"
              placeholder="Search by subject, code or topic..."
              className="w-full pl-16 pr-8 py-5 bg-white rounded-[2rem] shadow-xl shadow-slate-200/40 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none text-slate-700 font-semibold placeholder:text-slate-400"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Premium Dark Dropdowns */}
          <div className="flex gap-3 w-full lg:w-auto">
            {[
              { value: currentYear, setter: setCurrentYear, options: ["FE", "SE", "TE", "BE"] },
              { value: currentDept, setter: setCurrentDept, options: ["Computer", "IT", "Mechanical", "Civil"] }
            ].map((drop, idx) => (
              <div key={idx} className="relative flex-1 lg:min-w-[160px] group">
                <select 
                  value={drop.value}
                  onChange={(e) => drop.setter(e.target.value)}
                  className="w-full appearance-none pl-8 pr-12 py-5 bg-[#0f172a] text-white rounded-[2rem] font-bold shadow-xl cursor-pointer hover:bg-slate-800 transition-all outline-none border-none ring-0"
                >
                  {drop.options.map(opt => <option key={opt} value={opt} className="bg-slate-900">{opt}</option>)}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-blue-400 group-hover:translate-y-[-40%] transition-transform">
                  <ChevronRight size={20} className="rotate-90" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </header>
      {/* --- PREMIUM HEADER SECTION END --- */}

        {/* Subjects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <AnimatePresence>
            {filteredSubjects.map((subject) => (
              <motion.div
                key={subject.id}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => setSelectedSubject(subject)}
                className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-7 border border-slate-100 shadow-xl shadow-slate-200/50 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative Blob */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${subject.color} opacity-20 filter blur-xl`} />

                <div className="flex items-center gap-5 mb-5">
                  <div className={`${subject.color} p-4 rounded-2xl text-white shadow-lg`}>
                    <BookOpen size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{subject.name}</h3>
                    <p className="text-slate-500 text-sm font-medium">{subject.code}</p>
                  </div>
                </div>

                <div className="flex justify-between items-end pt-5 border-t border-slate-100">
                  <span className="text-lg font-semibold text-slate-600">{subject.units} Units</span>
                  <motion.div 
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                  >
                    View <ChevronRight size={16} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- Overlay Modal: Subject Resources --- */}
      <AnimatePresence>
        {selectedSubject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              className="bg-white/95 backdrop-blur-xl w-full max-w-5xl h-[90vh] rounded-[3rem] overflow-hidden flex shadow-2xl border border-slate-50"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Modal Left Sidebar: Glassmorphism */}
              <div className="w-1/3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 flex flex-col justify-between border-r border-slate-100 relative overflow-hidden">
                {/* Glass effect */}
                <div className="absolute inset-0 z-0 opacity-20 blur-xl">
                    <div className="w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 absolute top-5 left-5 animate-blob"></div>
                    <div className="w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 absolute bottom-5 right-5 animate-blob animation-delay-2000"></div>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className={`${selectedSubject.color} p-4 rounded-xl text-white shadow-lg`}>
                            <BookOpen size={28} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">{selectedSubject.name}</h2>
                            <p className="text-slate-600 text-base">{selectedSubject.code}</p>
                        </div>
                    </div>
                    <ul className="space-y-3">
                        {Array.from({ length: selectedSubject.units }).map((_, i) => (
                            <motion.li 
                                key={i}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 + i * 0.05 }}
                                className="flex items-center gap-3 text-slate-700 font-medium text-lg hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                <Folder size={20} className="text-blue-500" /> Unit {i + 1}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <motion.button 
                    onClick={() => setSelectedSubject(null)} 
                    className="absolute top-6 right-6 p-3 bg-white/70 backdrop-blur-md text-slate-600 rounded-full hover:bg-slate-200 transition-colors z-20 shadow-md"
                    whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Modal Right Content: Files List */}
              <div className="flex-1 p-8 overflow-y-auto">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Available Resources</h3>
                {loadingFiles ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 animate-pulse">
                        <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                          <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                        </div>
                        <div className="h-8 w-8 bg-slate-200 rounded-lg"></div>
                        <div className="h-8 w-8 bg-slate-200 rounded-lg"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="space-y-4">
                    {currentFiles.length > 0 ? (
                      currentFiles.map((file) => (
                        <motion.div 
                          key={file.id}
                          variants={fileItemVariants}
                          whileHover="hover"
                          className="flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-red-50 text-red-500 rounded-xl font-bold text-xs">{file.type.toUpperCase()}</div>
                            <div>
                              <h4 className="font-semibold text-lg text-slate-900">{file.name}</h4>
                              <p className="text-sm text-slate-500">{file.size} • Uploaded {file.date}</p>
                            </div>
                          </div>
                          <div className="flex gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                            <motion.button 
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setPreviewFile(file)}
                              className="p-3 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                            >
                              <Eye size={20} />
                            </motion.button>
                            <motion.a 
                              href={file.link} 
                              download 
                              whileTap={{ scale: 0.9 }}
                              className="p-3 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                            >
                              <Download size={20} />
                            </motion.a>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center p-10 bg-slate-50 rounded-2xl text-slate-500"
                      >
                        <Folder size={48} className="mx-auto mb-4" />
                        <p>No resources available for this subject yet.</p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Preview Modal --- */}
      <AnimatePresence>
        {previewFile && <PreviewModal file={previewFile} onClose={() => setPreviewFile(null)} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default ResourceVault;