import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"; 
import StudentSidebar from "./components/StudentSidebar"; 
import Performance from "./pages/Performance";
import Attendance from "./pages/Attendance";
import Settings from "./pages/Settings"; 
import StudentSettings from "./pages/StudentSettings"; 
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentLogin from "./pages/StudentLogin";
import TeacherLogin from "./pages/TeacherLogin";
import Logout from "./pages/Logout";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import TestNoticeBoard from "./pages/TestNoticeBoard";

function App() {
  return (
    
      <Routes>
        {/* Auth Pages */}
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/logout" element={<Logout />} />

        {/* Teacher Layout */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-6 bg-gray-50 overflow-auto">
                  <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    
                    
                    <Route path="attendance" element={<Attendance />} />
                    <Route path="performance" element={<Performance />} />
                    <Route path="settings" element={<Settings />} /> {/* 👩‍🏫 Teacher Settings */}
                    <Route path="profile" element={<Profile />} />
                    <Route path="teacher-dashboard" element={<TeacherDashboard />} />
                    <Route path="test-notice-board" element={<TestNoticeBoard />} />
                  </Routes>
                </main>
              </div>
            </div>
          }
        />

        {/* Student Layout */}
        <Route
          path="/student-dashboard"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex flex-1">
                <StudentSidebar />
                <main className="flex-1 p-6 bg-gray-50 overflow-auto">
                  <StudentDashboard />
                </main>
              </div>
            </div>
          }
        />

        <Route
          path="/student-settings"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex flex-1">
                <StudentSidebar />
                <main className="flex-1 p-6 bg-gray-50 overflow-auto">
                  <StudentSettings />
                </main>
              </div>
            </div>
          }
        />
      </Routes>
    
  );
}

export default App;