// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  BookOpen, ChevronRight, Download, Award, 
  Layers, Star, ShieldCheck, GraduationCap,
  LayoutGrid, List, Zap, X, ArrowUpRight
} from 'lucide-react';

const academicData = [
  {
    sem: "Semester 5",
    totalSubjects: 5,
    subjects: [
      { name: "Theory of Computation", grade: "O", type: "Core", remark: "Outstanding" },
      { name: "Artificial Intelligence", grade: "O", type: "Elective", remark: "Top Scorer" },
      { name: "Software Engineering", grade: "A+", type: "Core", remark: "Excellent" },
      { name: "Database Admin", grade: "A", type: "Lab", remark: "Good" },
      { name: "Professional Ethics", grade: "O", type: "Audit", remark: "Pass" }
    ]
  },
  {
    sem: "Semester 4",
    totalSubjects: 4,
    subjects: [
      { name: "Operating Systems", grade: "A+", type: "Core", remark: "Excellent" },
      { name: "Computer Networks", grade: "A", type: "Core", remark: "Above Average" },
      { name: "Microprocessors", grade: "B+", type: "Core", remark: "Average" },
      { name: "System Programming", grade: "A+", type: "Lab", remark: "Excellent" }
    ]
  }
];

const AcademicRecords = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [expandedSem, setExpandedSem] = useState(0);
  const [viewMode, setViewMode] = useState('list'); 
  const [showSkillGraph, setShowSkillGraph] = useState(false);
  const [showBadges, setShowBadges] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="space-y-10 pb-24 px-2">
          
          {/* 1. PREMIUM HEADER */}
          <motion.div initial={{y:-20}} animate={{y:0}} className="relative p-12 bg-slate-900 rounded-[3.5rem] overflow-hidden shadow-2xl">
             <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 text-indigo-400 font-black text-[10px] uppercase tracking-[0.3em]">
                    <GraduationCap size={14}/> Official Records
                    </div>
                    <h1 className="text-5xl font-black text-white tracking-tighter leading-none">Grade <span className="text-indigo-500 italic">History.</span></h1>
                    <p className="text-slate-400 font-medium max-w-sm">Detailed academic performance and certified transcripts.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl px-8 py-6 rounded-[2.5rem] border border-white/10 text-center">
                    <p className="text-3xl font-black text-indigo-400">9.05</p>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mt-1">Agg. CGPA</p>
                </div>
             </div>
             <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 blur-[100px] rounded-full" />
          </motion.div>

          {/* 2. VIEW TOGGLE SECTION */}
          <div className="flex items-center justify-between px-6">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-3">
                <Layers size={18} className="text-indigo-600"/> Semesters
            </h3>
            <div className="flex gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                <motion.button whileTap={{ scale: 0.9 }} onClick={() => setViewMode('grid')} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${viewMode === 'grid' ? 'bg-white shadow-md text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
                    <LayoutGrid size={18}/>
                </motion.button>
                <motion.button whileTap={{ scale: 0.9 }} onClick={() => setViewMode('list')} className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${viewMode === 'list' ? 'bg-white shadow-md text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
                    <List size={18}/>
                </motion.button>
            </div>
          </div>

          {/* 3. SEMESTERS LIST/GRID */}
          <motion.div layout className={`grid gap-6 transition-all duration-500 ${viewMode === 'grid' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
            {academicData.map((semData, semIdx) => (
              <motion.div key={semIdx} layout className={`bg-white rounded-[3rem] border transition-all duration-500 overflow-hidden ${expandedSem === semIdx ? 'border-indigo-200 shadow-2xl shadow-indigo-100/30' : 'border-slate-100 shadow-xl shadow-slate-200/40'}`}>
                <div onClick={() => setExpandedSem(expandedSem === semIdx ? null : semIdx)} className="p-8 flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg transition-all ${expandedSem === semIdx ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}>
                      0{semIdx + 1}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-900 tracking-tight">{semData.sem}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{semData.totalSubjects} Subjects</p>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: expandedSem === semIdx ? 90 : 0 }}>
                    <ChevronRight className={expandedSem === semIdx ? 'text-indigo-600' : 'text-slate-300'} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedSem === semIdx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-8 pb-8">
                      <div className="grid grid-cols-1 gap-3 pt-6 border-t border-slate-50">
                        {semData.subjects.map((sub, subIdx) => (
                          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: subIdx * 0.05 } }} key={subIdx} className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-[2rem] bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all">
                            <div className="flex items-center gap-5">
                               <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-indigo-500 shadow-sm border border-slate-100"><BookOpen size={18} /></div>
                               <div>
                                  <h5 className="font-black text-slate-800 text-sm tracking-tight leading-none mb-1">{sub.name}</h5>
                                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter bg-slate-100 px-2 py-0.5 rounded-md">{sub.type}</span>
                               </div>
                            </div>
                            <div className="flex items-center justify-between sm:justify-end gap-10 mt-4 sm:mt-0">
                               <div className="text-right sm:text-center">
                                  <p className="text-[9px] font-black text-slate-300 uppercase mb-0.5">Grade</p>
                                  <span className={`text-xl font-black ${sub.grade === 'O' ? 'text-indigo-600' : 'text-slate-700'}`}>{sub.grade}</span>
                                </div>
                                <div className="w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-200 group-hover:text-emerald-500 group-hover:border-emerald-100 transition-all"><ShieldCheck size={20} /></div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      <button className="w-full mt-6 py-5 bg-slate-900 text-white rounded-[1.8rem] text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl shadow-slate-200"><Download size={16} /> Export Transcript</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* 4. INTERACTIVE CARDS SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
             <motion.div 
                whileHover={{ y: -10, scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={() => setShowSkillGraph(true)}
                className="cursor-pointer bg-gradient-to-br from-indigo-600 to-indigo-950 p-10 rounded-[3.5rem] text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group"
             >
                <div className="relative z-10">
                    <Zap className="text-amber-400 mb-4" fill="currentColor" size={32} />
                    <h4 className="text-2xl font-black tracking-tight mb-2 leading-none">Subject Mastery</h4>
                    <p className="text-indigo-200 text-sm font-medium mb-8 leading-relaxed">Tap to view your detailed expertise breakdown across all core subjects.</p>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300 group-hover:text-white transition-colors">Analyze Performance <ArrowUpRight size={14} /></div>
                </div>
                <Star className="absolute -right-6 -bottom-6 w-48 h-48 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
             </motion.div>

             <motion.div 
                whileHover={{ y: -10, scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={() => setShowBadges(true)}
                className="cursor-pointer bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200 flex flex-col justify-between group"
             >
                <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-amber-50 rounded-3xl flex items-center justify-center text-amber-500 shadow-inner group-hover:scale-110 transition-transform"><Award size={40} /></div>
                    <div>
                        <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-none">Honor Roll</h4>
                        <p className="text-slate-400 font-bold text-[10px] uppercase mt-2 tracking-widest italic leading-none">Dean's List • Academic Excellence</p>
                    </div>
                </div>
                <div className="mt-8 flex justify-between items-end border-t border-slate-50 pt-6">
                    <p className="text-[10px] font-black text-slate-300 uppercase leading-none">Active Badge: <br/> <span className="text-slate-900 group-hover:text-indigo-600 transition-colors">Academic Prodigy 2025</span></p>
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-all"><Download size={16} /></div>
                </div>
             </motion.div>
          </div>

          {/* --- 5. INTERACTIVE POPUP MODALS --- */}
<AnimatePresence>
    {/* 1. Skill Graph Modal (Already there) */}
    {showSkillGraph && (
        <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setShowSkillGraph(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100]" />
            <motion.div initial={{scale:0.9, opacity:0, y:50}} animate={{scale:1, opacity:1, y:0}} exit={{scale:0.9, opacity:0, y:50}} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[500px] bg-white rounded-[3rem] p-10 z-[101] shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                    <h4 className="text-2xl font-black text-slate-900 tracking-tighter">Skill Expertise</h4>
                    <button onClick={() => setShowSkillGraph(false)} className="text-slate-400 hover:text-slate-900 transition-colors"><X size={24} /></button>
                </div>
                <div className="space-y-6">
                    {['AI & Algorithms', 'System Architecture', 'Data Structures', 'Networking'].map((skill, i) => (
                        <div key={i} className="space-y-2">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                                <span>{skill}</span>
                                <span>{95 - (i * 10)}%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <motion.div initial={{width:0}} animate={{width: `${95 - (i * 10)}%`}} transition={{delay: 0.2, duration: 1.5, ease: "easeOut"}} className="h-full bg-indigo-600 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    )}

    {/* ✅ 2. Badges Vault Modal (Added this to fix your error) */}
    {showBadges && (
        <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setShowBadges(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100]" />
            <motion.div 
                initial={{scale:0.9, opacity:0, y:50}} animate={{scale:1, opacity:1, y:0}} exit={{scale:0.9, opacity:0, y:50}} 
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[550px] bg-slate-50 rounded-[3rem] overflow-hidden z-[101] shadow-2xl"
            >
                <div className="bg-slate-900 p-10 text-white relative">
                    <button onClick={() => setShowBadges(false)} className="absolute top-8 right-8 text-slate-400 hover:text-white"><X size={24} /></button>
                    <Award className="text-amber-400 mb-4" size={40} />
                    <h4 className="text-3xl font-black tracking-tighter">Achievement Vault</h4>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Certified Digital Badges</p>
                </div>
                
                <div className="p-10 grid grid-cols-2 gap-6">
                    {[
                        { name: 'Academic Prodigy', color: 'bg-amber-100 text-amber-600', icon: Star },
                        { name: 'Code Master', color: 'bg-indigo-100 text-indigo-600', icon: Zap },
                        { name: 'Quick Learner', color: 'bg-emerald-100 text-emerald-600', icon: ShieldCheck },
                        { name: 'Perfect Attendee', color: 'bg-rose-100 text-rose-600', icon: Award }
                    ].map((badge, i) => (
                        <motion.div 
                            key={i} initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1, transition: {delay: i*0.1}}}
                            className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all"
                        >
                            <div className={`w-12 h-12 ${badge.color} rounded-2xl flex items-center justify-center mb-3`}>
                                <badge.icon size={24} />
                            </div>
                            <p className="font-black text-slate-800 text-[11px] uppercase tracking-tight">{badge.name}</p>
                            <p className="text-[9px] font-bold text-slate-400 mt-1 italic">Earned 2025</p>
                        </motion.div>
                    ))}
                </div>
                <div className="px-10 pb-10">
                    <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-indigo-600 transition-all">Download All Certificates</button>
                </div>
            </motion.div>
        </>
    )}
</AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AcademicRecords;