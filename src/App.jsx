import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Performance from "./pages/Performance";
import Students from "./pages/Students";
import AddStudentForm from "./components/AddStudentForm";
import Attendance from "./pages/Attendance";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentLogin from "./pages/StudentLogin";
import TeacherLogin from "./pages/TeacherLogin";
import { SearchProvider } from "./context/SearchContext";
import Logout from "./pages/Logout";

function App() {
  return (
    <SearchProvider>
    <Routes>
      {/* Auth Pages */}
      <Route path="/" element={<Register />} /> {/* default → Register */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/teacher-login" element={<TeacherLogin />} />
      <Route path="/logout" element={<Logout />} />

      {/* Protected Dashboard Layout */}
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
                  <Route path="students" element={<Students />} />
                  <Route path="add-student" element={<AddStudentForm />} />
                  <Route path="attendance" element={<Attendance />} />
                  <Route path="performance" element={<Performance />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="profile" element={<Profile />} />
                  
                </Routes>
              </main>
            </div>
          </div>
        }
      />
    </Routes>
    </SearchProvider>
  );
}

export default App;
