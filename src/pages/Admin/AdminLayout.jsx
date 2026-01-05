import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import AdminProfile from "../../components/admin/AdminProfile";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 
                        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                        shadow-lg rounded-b-lg">
          {/* ✅ Left side: Attractive Header */}
          <Header />

          {/* ✅ Right side: Profile dropdown */}
          <AdminProfile />
        </div>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}