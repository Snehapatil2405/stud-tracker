import React, { useState, useEffect } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  ArcElement
);

const studentsData = [
  {
    id: 101,
    name: "Sneha Patil",
    attendance: "92%",
    classes: ["FYBCA"],
    performance: {
      Jan: 89,
      Feb: 69,
      Mar: 84,
      Apr: 78,
      May: 91,
      Jun: 85,
      Jul: 88,
      Aug: 94,
      Sep: 90,
      Oct: 87,
    },
    tests: { total: 10, passed: 9 },
    exams: { midterm: 88, final: 91 },
  },
  {
    id: 102,
    name: "Rohan Deshmukh",
    attendance: "86%",
    classes: ["SYBCA"],
    performance: {
      Jan: 75,
      Feb: 80,
      Mar: 78,
      Apr: 82,
      May: 85,
      Jun: 79,
      Jul: 81,
      Aug: 88,
      Sep: 84,
      Oct: 86,
    },
    tests: { total: 10, passed: 8 },
    exams: { midterm: 80, final: 85 },
  },
  {
    id: 103,
    name: "Meera Kulkarni",
    attendance: "94%",
    classes: ["TYBCA"],
    performance: {
      Jan: 92,
      Feb: 88,
      Mar: 90,
      Apr: 93,
      May: 95,
      Jun: 91,
      Jul: 89,
      Aug: 96,
      Sep: 94,
      Oct: 92,
    },
    tests: { total: 10, passed: 10 },
    exams: { midterm: 93, final: 96 },
  },
  {
    id: 104,
    name: "Aditya Joshi",
    attendance: "89%",
    classes: ["FYBCA"],
    performance: {
      Jan: 78,
      Feb: 82,
      Mar: 85,
      Apr: 80,
      May: 87,
      Jun: 83,
      Jul: 86,
      Aug: 88,
      Sep: 84,
      Oct: 81,
    },
    tests: { total: 10, passed: 9 },
    exams: { midterm: 85, final: 88 },
  },
  {
    id: 105,
    name: "Tanvi Shah",
    attendance: "91%",
    classes: ["SYBCA"],
    performance: {
      Jan: 88,
      Feb: 90,
      Mar: 92,
      Apr: 89,
      May: 94,
      Jun: 90,
      Jul: 93,
      Aug: 95,
      Sep: 91,
      Oct: 89,
    },
    tests: { total: 10, passed: 10 },
    exams: { midterm: 90, final: 94 },
  },
  {
    id: 106,
    name: "Karan Mehta",
    attendance: "84%",
    classes: ["TYBCA"],
    performance: {
      Jan: 70,
      Feb: 75,
      Mar: 78,
      Apr: 72,
      May: 76,
      Jun: 74,
      Jul: 77,
      Aug: 79,
      Sep: 73,
      Oct: 71,
    },
    tests: { total: 10, passed: 7 },
    exams: { midterm: 76, final: 78 },
  },
  {
    id: 107,
    name: "Isha Nair",
    attendance: "95%",
    classes: ["FYBCA"],
    performance: {
      Jan: 93,
      Feb: 95,
      Mar: 97,
      Apr: 94,
      May: 96,
      Jun: 92,
      Jul: 98,
      Aug: 99,
      Sep: 97,
      Oct: 95,
    },
    tests: { total: 10, passed: 10 },
    exams: { midterm: 96, final: 98 },
  },
  {
    id: 108,
    name: "Arjun Verma",
    attendance: "88%",
    classes: ["SYBCA"],
    performance: {
      Jan: 80,
      Feb: 83,
      Mar: 85,
      Apr: 82,
      May: 86,
      Jun: 81,
      Jul: 84,
      Aug: 87,
      Sep: 85,
      Oct: 83,
    },
    tests: { total: 10, passed: 9 },
    exams: { midterm: 84, final: 87 },
  },
  {
    id: 109,
    name: "Neha Rane",
    attendance: "90%",
    classes: ["TYBCA"],
    performance: {
      Jan: 85,
      Feb: 87,
      Mar: 89,
      Apr: 86,
      May: 90,
      Jun: 88,
      Jul: 91,
      Aug: 93,
      Sep: 89,
      Oct: 87,
    },
    tests: { total: 10, passed: 9 },
    exams: { midterm: 89, final: 92 },
  },
  {
    id: 110,
    name: "Siddharth Pawar",
    attendance: "82%",
    classes: ["FYBCA"],
    performance: {
      Jan: 68,
      Feb: 72,
      Mar: 75,
      Apr: 70,
      May: 74,
      Jun: 71,
      Jul: 73,
      Aug: 76,
      Sep: 72,
      Oct: 70,
    },
    tests: { total: 10, passed: 8 },
    exams: { midterm: 74, final: 77 },
  },
];

const StudentPerformance = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = studentsData.filter(
    (student) =>
      selectedClass === "All" || student.classes.includes(selectedClass)
  );

  const topPerformers = [...filteredStudents]
    .map((s) => ({
      name: s.name,
      avg:
        Object.values(s.performance).reduce((a, b) => a + b, 0) /
        Object.values(s.performance).length,
    }))
    .sort((a, b) => b.avg - a.avg)
    .slice(0, 3);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSelectedStudent(null);
    } else {
      const student = studentsData.find((s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSelectedStudent(student || null);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      <h1 className="text-3xl font-bold text-indigo-700">
        📊 Student Performance
      </h1>

      {/* 🔍 Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search student by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-md w-full md:w-1/2"
        />
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="px-4 py-2 border rounded-md w-full md:w-1/4"
        >
          <option value="All">All Classes</option>
          <option value="FYBCA">FYBCA</option>
          <option value="SYBCA">SYBCA</option>
          <option value="TYBCA">TYBCA</option>
        </select>
      </div>

      {/* 🏆 Top Performers */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          🏆 Top 3 Performers
        </h2>
        <ul className="space-y-2">
          {topPerformers.map((student, index) => (
            <li key={index} className="text-gray-800">
              {index + 1}. {student.name} – Avg: {student.avg.toFixed(2)}%
            </li>
          ))}
        </ul>
      </div>

      {/* 📊 Performance Display */}
      {selectedStudent ? (
        <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-indigo-700">
            {selectedStudent.name}'s Performance Overview
          </h2>

          <div className="text-gray-700">
            <strong>Attendance:</strong> {selectedStudent.attendance}
          </div>

          <div className="text-gray-700">
            <strong>Midterm:</strong> {selectedStudent.exams.midterm}{" "}
            &nbsp;|&nbsp;
            <strong>Final:</strong> {selectedStudent.exams.final}
          </div>

          <div className="text-gray-700">
            <strong>Tests Passed:</strong> {selectedStudent.tests.passed} /{" "}
            {selectedStudent.tests.total}
          </div>

          {/* 📈 Line Chart */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Monthly Performance
            </h3>
            <Line
              data={{
                labels: Object.keys(selectedStudent.performance),
                datasets: [
                  {
                    label: "Marks",
                    data: Object.values(selectedStudent.performance),
                    borderColor: "#6366f1",
                    backgroundColor: "rgba(99, 102, 241, 0.2)",
                    tension: 0.3,
                    fill: true,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: true },
                  tooltip: { enabled: true },
                },
                scales: {
                  y: { beginAtZero: true },
                },
              }}
            />
          </div>

          {/* 🥧 Pie Chart */}
          <div className="max-w-xs mx-auto mb-2">
            <h3 className="text-base font-semibold text-gray-800 mb-1">
              Exam Distribution
            </h3>
            <div className="h-[400px] w-[400px] mx-auto">
              <Pie
                data={{
                  labels: ["Midterm", "Final"],
                  datasets: [
                    {
                      data: [
                        selectedStudent.exams.midterm,
                        selectedStudent.exams.final,
                      ],
                      backgroundColor: ["#4f46e5", "#a78bfa"],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { position: "bottom" },
                  },
                }}
              />
            </div>
          </div>

          {/* 📋 Marks Table */}
          <div className="mt-4">
            <h3 className="text-base font-semibold text-gray-800 mb-1">
              Monthly Marks
            </h3>
            <table className="w-full border rounded-lg overflow-hidden text-sm">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-3 py-2 text-left">Month</th>
                  <th className="px-3 py-2 text-left">Marks</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(selectedStudent.performance).map(
                  ([month, marks]) => (
                    <tr key={month} className="border-b">
                      <td className="px-3 py-2">{month}</td>
                      <td className="px-3 py-2">{marks}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">
          Search or select a student to view performance.
        </p>
      )}
    </div>
  );
};

export default StudentPerformance;
