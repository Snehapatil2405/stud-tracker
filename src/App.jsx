import { Routes, Route, useLocation } from "react-router-dom";

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

/// --- TEACHER COMPONENTS & LAYOUT ---
import TeacherLayout from "./components/teacher/TeacherLayout";

// --- TEACHER PAGES (Total 8 Pages) ---
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import AttendanceManager from "./pages/teacher/AttendanceManager";
import ResourceVault from "./pages/teacher/ResourceVault";
import ClassRoster from "./pages/teacher/ClassRoster";
import Broadcast from "./pages/teacher/Broadcast";
import StudentQueryHub from "./pages/teacher/StudentQueryHub";
import AssignmentControl from "./pages/teacher/AssignmentControl";
import Settings from "./pages/teacher/Settings";

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

        {/* --- 🚀 TEACHER PANEL ROUTES --- */}
        <Route path="/teacher-dashboard" element={<TeacherLayout />}>
          {/* १. Dashboard (Overview) */}
          <Route index element={<TeacherDashboard />} />

          {/* २. Attendance Management */}
          <Route path="attendance" element={<AttendanceManager />} />

          {/* ३. Resource Vault (Study Materials) */}
          <Route path="resources" element={<ResourceVault />} />

          {/* ४. Class Roster (Student List) */}
          <Route path="roster" element={<ClassRoster />} />

          {/* ५. Announcements (Broadcast) */}
          <Route path="broadcast" element={<Broadcast />} />

          {/* ६. Student Query Hub */}
          <Route path="query-hub" element={<StudentQueryHub />} />

          {/* ७. Assignment Control */}
          <Route path="assignments" element={<AssignmentControl />} />

          {/* ८. Teacher Settings */}
          <Route path="settings" element={<Settings />} />
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