import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StudentSidebar from "./components/StudentSidebar";

// Pages
import Performance from "./pages/Performance";
import Attendance from "./pages/Attendance";
import Settings from "./pages/Settings";
import StudentSettings from "./pages/StudentSettings";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import TestNoticeBoard from "./pages/TestNoticeBoard";
import ContactTeacher from "./pages/ContactTeacher";
import StudentNoticeBoard from "./pages/StudentNoticeBoard";

// Admin
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminStudents from "./pages/Admin/AdminStudents";
import AdminTeachers from "./pages/Admin/AdminTeachers";
import AdminNotices from "./pages/Admin/AdminNotices";
import AdminMessages from "./pages/Admin/AdminMessages";
import AdminClasses from "./pages/Admin/AdminClasses";
import AdminSubjects from "./pages/Admin/AdminSubjects";
import AdminAnalytics from "./pages/Admin/AdminAnalytics";
import AdminSettings from "./pages/Admin/AdminSettings";
import AdminEditProfile from "./pages/Admin/AdminEditProfile";
import AdminLogin from "./pages/Admin/AdminLogin";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleProfileSave = () => {
    setRefresh(!refresh);
  };

  // ✅ Teacher Layout Wrapper
  const TeacherLayout = () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 overflow-auto md:ml-64 pt-14">
          <Outlet /> {/* ✅ Nested routes render इथे होतील */}
        </main>
      </div>
    </div>
  );

  // ✅ Student Layout Wrapper
  const StudentLayout = () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <StudentSidebar />
        <main className="flex-1 p-6 bg-gray-50 overflow-auto md:ml-64 pt-14">
          <Outlet /> {/* ✅ Nested routes render इथे होतील */}
        </main>
      </div>
    </div>
  );

  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/logout" element={<Logout />} />

      {/* Teacher Dashboard */}
      <Route path="/teacher-dashboard/*" element={<TeacherLayout />}>
        <Route path="dashboard" element={<Dashboard key={refresh} />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="performance" element={<Performance />} />
        <Route path="settings" element={<Settings onSave={handleProfileSave} />} />
        <Route path="profile" element={<Profile />} />
        <Route path="" element={<TeacherDashboard />} /> {/* default */}
        <Route path="test-notice-board" element={<TestNoticeBoard />} />
      </Route>

      {/* Student Dashboard */}
      <Route path="/student-dashboard/*" element={<StudentLayout />}>
        <Route path="" element={<StudentDashboard />} /> {/* default */}
        <Route path="student-settings" element={<StudentSettings />} />
        <Route path="contact-teacher" element={<ContactTeacher />} />
        <Route path="student-notice-board" element={<StudentNoticeBoard />} />
      </Route>

      {/* Admin */}
      <Route path="/admin/*" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="students" element={<AdminStudents />} />
        <Route path="teachers" element={<AdminTeachers />} />
        <Route path="notices" element={<AdminNotices />} />
        <Route path="messages" element={<AdminMessages />} />
        <Route path="classes" element={<AdminClasses />} />
        <Route path="subjects" element={<AdminSubjects />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="edit-profile" element={<AdminEditProfile />} />
      </Route>
    </Routes>
  );
}

export default App;