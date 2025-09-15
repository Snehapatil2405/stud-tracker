/*import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", marks: 69 },
  { month: "Feb", marks: 79 },
  { month: "Mar", marks: 84 },
  { month: "Apr", marks: 68 },
  { month: "May", marks: 99 },
  { month: "Jun", marks: 83 },
  { month: "July", marks:91 },
  { month: "Aug", marks: 77 },
  { month: "Sept", marks:80 },
  { month: "Oct", marks: 28 },
  { month: "Nov", marks: 50 },
  { month: "Dec", marks: 45 },
];

const Performance = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Student Performance</h1>

      
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Performance Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="marks" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Marks Table</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Month</th>
              <th className="border-b p-2">Marks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => (
              <tr key={index}>
                <td className="border-b p-2">{d.month}</td>
                <td className="border-b p-2">{d.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Performance;*/

import React, { useContext, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { SearchContext } from "../context/SearchContext";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const studentsData = [
  {
    id: 101,
    name: "Sneha Patil",
    attendance: "92%",
    performance: {
      Jan: 89, Feb: 69, Mar: 84, Apr: 78, May: 91,
      Jun: 85, Jul: 88, Aug: 94, Sep: 90, Oct: 87,
    },
    tests: { total: 10, passed: 9 },
    exams: { midterm: 88, final: 91 },
  },
  {
    id: 102,
    name: "Rohan Deshmukh",
    attendance: "86%",
    performance: {
      Jan: 75, Feb: 80, Mar: 78, Apr: 82, May: 85,
      Jun: 79, Jul: 81, Aug: 88, Sep: 84, Oct: 86,
    },
    tests: { total: 10, passed: 8 },
    exams: { midterm: 80, final: 85 },
  },
  {
    id: 103,
    name: "Meera Kulkarni",
    attendance: "94%",
    performance: {
      Jan: 92, Feb: 88, Mar: 90, Apr: 93, May: 95,
      Jun: 91, Jul: 89, Aug: 96, Sep: 94, Oct: 92,
    },
    tests: { total: 10, passed: 10 },
    exams: { midterm: 93, final: 96 },
  },
  {
    id: 104,
    name: "Aditya Joshi",
    attendance: "89%",
    performance: {
      Jan: 78, Feb: 82, Mar: 85, Apr: 80, May: 87,
      Jun: 83, Jul: 86, Aug: 88, Sep: 84, Oct: 81,
    },
    tests: { total: 10, passed: 9 },
    exams: { midterm: 85, final: 88 },
  },
  {
    id: 105,
    name: "Tanvi Shah",
    attendance: "91%",
    performance: {
      Jan: 88, Feb: 90, Mar: 92, Apr: 89, May: 94,
      Jun: 90, Jul: 93, Aug: 95, Sep: 91, Oct: 89,
    },
    tests: { total: 10, passed: 10 },
    exams: { midterm: 90, final: 94 },
  },
  {
    id: 106,
    name: "Karan Mehta",
    attendance: "84%",
    performance: {
      Jan: 70, Feb: 75, Mar: 78, Apr: 72, May: 76,
      Jun: 74, Jul: 77, Aug: 79, Sep: 73, Oct: 71,
    },
    tests: { total: 10, passed: 7 },
    exams: { midterm: 76, final: 78 },
  },
  {
    id: 107,
    name: "Isha Nair",
    attendance: "95%",
    performance: {
      Jan: 93, Feb: 95, Mar: 97, Apr: 94, May: 96,
      Jun: 92, Jul: 98, Aug: 99, Sep: 97, Oct: 95,
    },
    tests: { total: 10, passed: 10 },
    exams: { midterm: 96, final: 98 },
  },
  {
    id: 108,
    name: "Arjun Verma",
    attendance: "88%",
    performance: {
      Jan: 80, Feb: 83, Mar: 85, Apr: 82, May: 86,
      Jun: 81, Jul: 84, Aug: 87, Sep: 85, Oct: 83,
    },
    tests: { total: 10, passed: 9 },
    exams: { midterm: 84, final: 87 },
  },
  {
    id: 109,
    name: "Neha Rane",
    attendance: "90%",
    performance: {
      Jan: 85, Feb: 87, Mar: 89, Apr: 86, May: 90,
      Jun: 88, Jul: 91, Aug: 93, Sep: 89, Oct: 87,
    },
    tests: { total: 10, passed: 9 },
    exams: { midterm: 89, final: 92 },
  },
  {
    id: 110,
    name: "Siddharth Pawar",
    attendance: "82%",
    performance: {
      Jan: 68, Feb: 72, Mar: 75, Apr: 70, May: 74,
      Jun: 71, Jul: 73, Aug: 76, Sep: 72, Oct: 70,
    },
    tests: { total: 10, passed: 8 },
    exams: { midterm: 74, final: 77 },
  },
];

const StudentPerformance = () => {
  const { searchTerm } = useContext(SearchContext); // ✅ Global searchTerm from Navbar
  const [selectedStudent, setSelectedStudent] = useState(null);

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
      <h1 className="text-3xl font-bold text-indigo-700">Student Performance</h1>

      {/* 📋 Student List */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Student List</h2>
        <ul className="space-y-2">
          {studentsData.map((student, index) => (
            <li
              key={index}
              onClick={() => setSelectedStudent(student)}
              className="cursor-pointer hover:bg-indigo-100 px-3 py-2 rounded-md"
            >
              {student.name}
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

         

          {/* Attendance */}
          <div className="text-gray-700">
            <strong>Attendance:</strong> {selectedStudent.attendance}
          </div>

          {/* Exams */}
          <div className="text-gray-700">
            <strong>Midterm:</strong> {selectedStudent.exams.midterm} &nbsp;|&nbsp;
            <strong>Final:</strong> {selectedStudent.exams.final}
          </div>

          {/* Tests */}
          <div className="text-gray-700">
            <strong>Tests Passed:</strong> {selectedStudent.tests.passed} /{" "}
            {selectedStudent.tests.total}
          </div>

          {/* 📈 Performance Chart */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Performance Chart</h3>
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

          {/* 🧾 Marks Table */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Monthly Marks</h3>
            <table className="w-full border rounded-lg overflow-hidden">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Month</th>
                  <th className="px-4 py-2 text-left">Marks</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(selectedStudent.performance).map(([month, marks]) => (
                  <tr key={month} className="border-b">
                    <td className="px-4 py-2">{month}</td>
                    <td className="px-4 py-2">{marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Search or select a student to view performance.</p>
      )}
    </div>
  );
};

export default StudentPerformance;