import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";


// --- STUDENT PAGES ---
import StudentDashboard from "./pages/student/StudentDashboard";
import Overview from "./pages/student/Overview";
import Assignments from "./pages/student/Assignments";
import MyPerformance from "./pages/student/MyPerformance";
import StdAttendance from "./pages/student/StdAttendance";
import StudentSettings from "./pages/student/StudentSettings";
import ContactTeacher from "./pages/student/ContactTeacher";
import StudentNoticeBoard from "./pages/student/StudentNoticeBoard";
import AcademicRecords from "./pages/student/AcademicRecords";
import Resourcevolt from "./pages/student/ResourceVoult";

// --- NEW TEACHER PAGES (Imports) ---
// Note: Hya files 'src/teacher' folder madhe asavya lagtil
import TeacherLayout from "./pages/teacher/TeacherLayout";
import TeacherDashboard from "./teacher/TeacherDashboard";
import StudentQueryHub from "./pages/teacher/StudentQueryHub";
import AttendanceQR from "./pages/teacher/AttendanceQR";
import AssignmentControl from "./pages/teacher/AssignmentControl";
// --- ADMIN PAGES ---
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

// --- COMMON & AUTH ---
import ClgHome from "./pages/clgHome";
import ClgFooter from "./components/clgFooter";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

function App() {
  const location = useLocation();
  const isCollegePage = location.pathname === "/";

  return (
    <>
      <Routes>
        {/* College Website & Auth */}
        <Route path="/" element={<ClgHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/logout" element={<Logout />} />

        {/* --- 🚀 NEW TEACHER PANEL ROUTES (High-End) --- */}
        <Route path="/teacher-dashboard" element={<TeacherLayout />}>
          <Route index element={<TeacherDashboard />} />
          <Route path="query-hub" element={<StudentQueryHub />} />
          <Route path="attendance" element={<AttendanceQR />} />
          <Route path="assignments" element={<AssignmentControl />} />
          {/* Nantar aslele pages apan ithe add karat jau */}
        </Route>

        {/* --- STUDENT DASHBOARD --- */}
        <Route path="/student-dashboard" element={<StudentDashboard />}>
          <Route index element={<Overview />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="analytics" element={<MyPerformance />} />
          <Route path="attendance" element={<StdAttendance />} />
          <Route path="student-settings" element={<StudentSettings />} />
          <Route path="contact-teacher" element={<ContactTeacher />} />
          <Route path="student-notice-board" element={<StudentNoticeBoard />} />
          <Route path="academic" element={<AcademicRecords />} />
          <Route path="resources" element={<Resourcevolt />} />
        </Route>

        {/* --- ADMIN DASHBOARD --- */}
        <Route path="/admin-dashboard/*" element={<AdminLayout />}>
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

      {isCollegePage && <ClgFooter />}
    </>
  );
}

export default App;