import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// ✅ Existing Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StudentSidebar from "./components/StudentSidebar";

// ✅ Existing Pages
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
import ContactTeacher from "./pages/ContactTeacher";
import StudentNoticeBoard from "./pages/StudentNoticeBoard";

// ✅ Admin imports
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

// ✅ Context import
import UserProvider from "./Context/UserProvider";   // default export
import { UserContext } from "./Context/UserContext"; // named export

// ✅ College Components
import CollegeNavbar from "./components/college/Navbar";
import CollegeFooter from "./components/college/Footer";

// ✅ College Pages
import Home from "./pages/College/Home";
import About from "./pages/College/About";
import Courses from "./pages/College/Courses";
import Admissions from "./pages/College/Admissions";
import Contact from "./pages/College/Contact";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleProfileSave = () => {
    setRefresh(!refresh);
  };

  return (
    <UserProvider>
      <Router>
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
            path="/teacher/*"
            element={
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex flex-1">
                  <Sidebar />
                  <main className="flex-1 p-6 bg-gray-50 overflow-auto md:ml-64 pt-14">
                    <Routes>
                      <Route path="dashboard" element={<Dashboard key={refresh} />} />
                      <Route path="attendance" element={<Attendance />} />
                      <Route path="performance" element={<Performance />} />
                      <Route path="settings" element={<Settings onSave={handleProfileSave} />} />
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
            path="/student-dashboard/*"
            element={
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex flex-1">
                  <StudentSidebar />
                  <main className="flex-1 p-6 bg-gray-50 overflow-auto md:ml-64 pt-14">
                    <Routes>
                      <Route path="/" element={<StudentDashboard />} />
                      <Route path="student-settings" element={<StudentSettings />} />
                      <Route path="contact-teacher" element={<ContactTeacher />} />
                      <Route path="student-notice-board" element={<StudentNoticeBoard />} />
                    </Routes>
                  </main>
                </div>
              </div>
            }
          />

          {/* Admin Layout */}
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

          {/* ✅ College Website Routes */}
          <Route
            path="/college/*"
            element={
              <div className="min-h-screen flex flex-col">
                <CollegeNavbar />
                <main className="flex-1 p-6 bg-gray-50 overflow-auto pt-14">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="courses" element={<Courses />} />
                    <Route path="admissions" element={<Admissions />} />
                    <Route path="contact" element={<Contact />} />
                  </Routes>
                </main>
                <CollegeFooter />
              </div>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;