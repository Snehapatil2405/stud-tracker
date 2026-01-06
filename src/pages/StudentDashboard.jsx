import React, { useEffect, useState } from "react";
import { Pie, Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";
import { FaCalendarAlt, FaUserGraduate, FaClipboardList } from "react-icons/fa";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

export default function StudentDashboard() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const studentData = {
      name: "Sneha Patil",
      rollNo: "IC413",
      avgMarks: 80,
      gpa: 3.6,
      attendance: 85,
      subjects: [
        { name: "Java Programming", marks: 50 },
        { name: ".Net Framework", marks: 60 },
        { name: "DataWare Housing & Data Mining", marks: 80 },
        { name: "Linux", marks: 80 },
        { name: "Digital Marketing", marks: 80 },
      ],
      attendanceStats: {
        present: 18,
        absent: 12,
      },
      assessments: [
        { type: "Quiz", status: "Completed", date: "2025-12-01" },
        { type: "Midterm", status: "Pending", date: "2026-01-15" },
        { type: "Project", status: "Completed", date: "2025-11-20" },
      ],
      demographics: {
        gender: "Female",
        age: 21,
        ethnicity: "Indian",
        familySize: 4,
        parentalEducation: "Graduate",
        location: "Nagpur",
      },
      enrollment: {
        course: "BCA",
        program: "Computer Applications",
        class: "Final Year",
        campus: "Main Campus",
      },
      preparation: {
        testPrep: "Ongoing",
        studyHabits: "Regular",
      },
      behavior: {
        disciplineIssues: 0,
        riskStatus: "Low",
      },
    };

    setStudent(studentData);
  }, []);

  if (!student) return <div className="p-6 text-lg font-medium">Loading...</div>;

  // Attendance Pie Chart
  const pieData = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: [student.attendanceStats.present, student.attendanceStats.absent],
        backgroundColor: ["#4c1d95", "#b91c1c"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  // Subject-wise Bar Chart
  const barData = {
    labels: student.subjects.map((s) => s.name),
    datasets: [
      {
        label: "Marks (%)",
        data: student.subjects.map((s) => s.marks),
        backgroundColor: "#1e3a8a",
      },
    ],
  };

  // Grade Distribution Donut Chart
  const gradeData = {
    labels: ["A", "B", "C", "D", "F"],
    datasets: [
      {
        data: [40, 30, 20, 8, 2],
        backgroundColor: ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#6b7280"],
      },
    ],
  };

  // Academic Progress Line Chart
  const progressData = {
    labels: ["Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Academic Progress",
        data: [70, 75, 80, 82, 85],
        borderColor: "#8b5cf6",
        backgroundColor: "#c4b5fd",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-purple-700">📈 Student Dashboard</h1>
        <p className="text-base text-gray-600 mt-1">
          Academic, Engagement & Profile Overview
        </p>
      </div>

      {/* Student Overview */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-6 border-l-4 border-purple-500">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎓 Student Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-[17px] text-gray-700">
          <div><strong>Name:</strong> {student.name}</div>
          <div><strong>Roll No:</strong> {student.rollNo}</div>
          <div><strong>Average Marks:</strong> <span className="text-green-600 font-bold">{student.avgMarks}%</span></div>
          <div><strong>Attendance:</strong> <span className="text-blue-600 font-bold">{student.attendance}%</span></div>
          <div><strong>GPA:</strong> <span className="text-purple-600 font-bold">{student.gpa}</span></div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Attendance Pie */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-700 mb-4">📅 Monthly Attendance</h3>
          <div className="w-full h-[300px]">
            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Subject-wise Bar */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-indigo-700 mb-4">📊 Subject-wise Marks</h3>
          <div className="w-full h-[400px]">
            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Grade Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-green-700 mb-4">🏅 Grade Distribution</h3>
          <div className="w-full h-[300px]">
            <Doughnut data={gradeData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Academic Progress */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-pink-700 mb-4">📈 Academic Progress</h3>
          <div className="w-full h-[300px]">
            <Line data={progressData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

      {/* Assessments Table */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">📝 Assessments</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-purple-100">
              <th className="p-2">Type</th>
              <th className="p-2">Status</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {student.assessments.map((a, i) => (
              <tr key={i} className="border-b">
                <td className="p-2">{a.type}</td>
                <td className="p-2">{a.status}</td>
                <td className="p-2">{a.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Demographics & Enrollment */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">👩‍💻 Student Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div><strong>Gender:</strong> {student.demographics.gender}</div>
          <div><strong>Age:</strong> {student.demographics.age}</div>
          <div><strong>Ethnicity:</strong> {student.demographics.ethnicity}</div>
          <div><strong>Location:</strong> {student.demographics.location}</div>
          <div><strong>Family Size:</strong> {student.demographics.familySize}</div>
          <div><strong>Parental Education:</strong> {student.demographics.parentalEducation}</div>
        </div>

        {/* Enrollment Info */}
        <h4 className="text-lg font-semibold text-purple-600 mt-6 mb-2">📚 Enrollment Info</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div><strong>Course:</strong> {student.enrollment.course}</div>
          <div><strong>Program:</strong> {student.enrollment.program}</div>
          <div><strong>Class:</strong> {student.enrollment.class}</div>
          <div><strong>Campus:</strong> {student.enrollment.campus}</div>
        </div>

        {/* Preparation */}
        <h4 className="text-lg font-semibold text-indigo-600 mt-6 mb-2">📖 Preparation</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div><strong>Test Prep:</strong> {student.preparation.testPrep}</div>
          <div><strong>Study Habits:</strong> {student.preparation.studyHabits}</div>
        </div>
      </div>

      {/* Behavior Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-semibold text-red-700 mb-4">⚠️ Behavior & Risk Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div><strong>Discipline Issues:</strong> {student.behavior.disciplineIssues}</div>
          <div><strong>Risk Status:</strong> {student.behavior.riskStatus}</div>
        </div>
      </div>

      {/* Role-based Access */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">🔑 User Access</h3>
        <p className="text-gray-700">
          Current Role: <span className="font-bold text-indigo-600">Student</span>
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-semibold text-green-700 mb-4">🔍 Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="p-2 border rounded-lg">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <select className="p-2 border rounded-lg">
            <option>Subject</option>
            {student.subjects.map((s, i) => (
              <option key={i}>{s.name}</option>
            ))}
          </select>
          <select className="p-2 border rounded-lg">
            <option>Grade Level</option>
            <option>First Year</option>
            <option>Second Year</option>
            <option>Final Year</option>
          </select>
        </div>
      </div>

      {/* Communication */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">💬 Communication</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Assignment Submission</label>
            <input type="file" className="w-full border p-2 rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Feedback / Comments</label>
            <textarea
              className="w-full border p-2 rounded-lg"
              rows="3"
              placeholder="Write your feedback..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
