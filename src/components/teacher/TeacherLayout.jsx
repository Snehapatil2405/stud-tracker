import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';

const TeacherLayout = () => {
  const [selectedYear, setSelectedYear] = useState('SY-2026');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#f1f5f9] overflow-hidden">
      <TeacherSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0">
        <TeacherNavbar selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            <Outlet /> 
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherLayout;