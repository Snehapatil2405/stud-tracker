/*import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
   
      <Navbar />

      <div className="flex flex-1">
       
        <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 bg-white shadow-md border-r">
          <Sidebar />
        </aside>

        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}*/

import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="pt-20 px-6 bg-gray-100 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
