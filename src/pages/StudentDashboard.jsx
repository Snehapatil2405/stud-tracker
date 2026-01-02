import React, { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { FaCalendarAlt } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function StudentDashboard() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const studentData = {
      name: "Sneha Patil",
      rollNo: "IC413",
      avgMarks: 80,
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
    };

    setStudent(studentData);
  }, []);

  if (!student) return <div className="p-6 text-lg font-medium">Loading...</div>;

  const pieData = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: [student.attendanceStats.present, student.attendanceStats.absent],
        backgroundColor: ["#4c1d95", "#b91c1c"], // darker purple & red
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const barData = {
    labels: student.subjects.map((s) => s.name),
    datasets: [
      {
        label: "Marks (%)",
        data: student.subjects.map((s) => s.marks),
        backgroundColor: "#1e3a8a", // dark indigo
      },
    ],
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-purple-700">📈 Student Tracker</h1>
        <p className="text-base text-gray-600 mt-1">
          Monitor your academic progress and attendance
        </p>
      </div>

      {/* Overview Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-6 border-l-4 border-purple-500">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎓 Student Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-[17px] text-gray-700">
          <div><strong>Name:</strong> {student.name}</div>
          <div><strong>Roll No:</strong> {student.rollNo}</div>
          <div><strong>Average Marks:</strong> <span className="text-green-600 font-bold">{student.avgMarks}%</span></div>
          <div><strong>Attendance:</strong> <span className="text-blue-600 font-bold">{student.attendance}%</span></div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="space-y-6">
  {/* Attendance Pie Chart */}
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h3 className="text-xl font-semibold text-purple-700 mb-4">📅 Monthly Attendance</h3>
    <div className="w-full h-[300px]">
      <Pie
        data={pieData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
    <p className="text-base text-gray-600 mt-4 text-center">
      Total Days: {student.attendanceStats.present + student.attendanceStats.absent} | Present: {student.attendanceStats.present} | Absent: {student.attendanceStats.absent}
    </p>
  </div>

  {/* Subject-wise Bar Chart */}
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h3 className="text-xl font-semibold text-indigo-700 mb-4">📊 Subject-wise Marks</h3>
    <div className="w-full h-[400px]">
      <Bar
        data={barData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: {
              ticks: {
                font: { size: 14 },
                color: "#4b5563",
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                font: { size: 14 },
                color: "#4b5563",
              },
            },
          },
        }}
      />
    </div>
  </div>
</div>


      
    </div>
  );
}