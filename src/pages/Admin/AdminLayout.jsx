import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import AdminProfile from "../../components/admin/AdminProfile"; // ✅ Import
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 shadow bg-white">
          <Header />
          <AdminProfile />   {/* ✅ Profile with dropdown */}
        </div>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}