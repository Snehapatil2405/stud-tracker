import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // पेज नेव्हिगेशनसाठी
import { Search, Bell, Calendar, GraduationCap, Clock, CheckCircle2, MessageSquare, BookOpen } from 'lucide-react';

const TeacherNavbar = () => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedYear, setSelectedYear] = useState("SY");

  // ग्लोबल नोटिफिकेशन्सचा डेटा
  const notifications = [
    { 
      id: 1, 
      text: "New query from Rahul Sharma regarding Java Lab.", 
      time: "5 mins ago", 
      icon: MessageSquare, 
      color: "text-blue-500", 
      bg: "bg-blue-50",
      link: "/teacher-dashboard/query-hub" 
    },
    { 
      id: 2, 
      text: "SY-BCA Attendance report is ready to download.", 
      time: "1 hour ago", 
      icon: CheckCircle2, 
      color: "text-emerald-500", 
      bg: "bg-emerald-50",
      link: "/teacher-dashboard/attendance" 
    },
    { 
      id: 3, 
      text: "Assignment deadline for 'Unit 2' is tomorrow.", 
      time: "2 hours ago", 
      icon: BookOpen, 
      color: "text-orange-500", 
      bg: "bg-orange-50",
      link: "/teacher-dashboard/assignments" 
    }
  ];

  const semOptions = {
    FY: ["Semester 1", "Semester 2"],
    SY: ["Semester 3", "Semester 4"],
    TY: ["Semester 5", "Semester 6"]
  };

  return (
    <nav className="flex items-center justify-between mb-8 sticky top-0 bg-slate-50/80 backdrop-blur-md z-40 py-4 px-2">
      
      {/* 1. LEFT: SEARCH BAR */}
      <div className="relative group flex-1 max-w-md ml-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={18} />
        <input 
          type="text" 
          placeholder="Search for data, students..." 
          className="w-full pl-12 pr-4 py-3 bg-white border border-slate-100 rounded-2xl text-xs font-bold outline-none shadow-sm focus:ring-4 focus:ring-emerald-500/10 transition-all border-transparent focus:border-emerald-200"
        />
      </div>

      {/* 2. CENTER: DEPENDENT FILTERS */}
      <div className="flex items-center gap-3 mx-6">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 transition-all group">
          <GraduationCap size={16} className="text-emerald-500" />
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="bg-transparent border-none text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer text-slate-700"
          >
            <option value="FY">First Year (FY)</option>
            <option value="SY">Second Year (SY)</option>
            <option value="TY">Third Year (TY)</option>
          </select>
        </div>

        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm hover:border-blue-500 transition-all group">
          <Calendar size={16} className="text-blue-500" />
          <select className="bg-transparent border-none text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer text-slate-700">
            {semOptions[selectedYear].map((sem) => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 3. RIGHT: NOTIFICATIONS & PROFILE */}
      <div className="flex items-center gap-4 pr-2 relative">
        
        {/* Notification Bell */}
        <button 
          onClick={() => setShowNotifications(!showNotifications)}
          className={`relative p-3 rounded-2xl border transition-all ${showNotifications ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/30' : 'bg-white text-slate-400 border-slate-100 hover:text-emerald-500 shadow-sm'}`}
        >
          <Bell size={20} />
          <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Notification Dropdown Panel */}
        {showNotifications && (
          <div className="absolute top-16 right-16 w-80 bg-white rounded-[2rem] shadow-2xl border border-slate-100 py-6 z-50 animate-in fade-in zoom-in duration-200 origin-top-right">
            <div className="px-6 mb-4 flex justify-between items-center">
              <h4 className="font-black text-slate-800 text-xs uppercase tracking-widest">Notifications</h4>
              <span className="bg-emerald-100 text-emerald-600 text-[9px] font-black px-2 py-0.5 rounded-full">3 NEW</span>
            </div>

            <div className="max-h-[350px] overflow-y-auto custom-scrollbar px-2">
              {notifications.map((n) => (
                <div 
                  key={n.id} 
                  onClick={() => {
                    navigate(n.link);
                    setShowNotifications(false);
                  }}
                  className="flex gap-4 p-4 hover:bg-slate-50 rounded-2xl cursor-pointer transition-all group"
                >
                  <div className={`w-10 h-10 shrink-0 rounded-xl ${n.bg} ${n.color} flex items-center justify-center`}>
                    <n.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-700 leading-tight mb-1 group-hover:text-emerald-600">
                      {n.text}
                    </p>
                    <div className="flex items-center gap-1 text-[9px] font-black text-slate-400 uppercase tracking-widest italic">
                      <Clock size={10} /> {n.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 px-6 pt-4 border-t border-slate-50 text-center">
              <button className="text-[10px] font-black text-emerald-500 uppercase tracking-widest hover:underline">
                Mark all as read
              </button>
            </div>
          </div>
        )}

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black text-slate-800 leading-none">Prof. Deshmukh</p>
            <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-tighter mt-1">HOD Computer</p>
          </div>
          <div className="w-11 h-11 bg-slate-900 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-white shadow-lg">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Professor" alt="avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TeacherNavbar;