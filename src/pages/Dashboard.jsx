/*import React from "react";
import { students } from "../data"; // temporary data file

// Helper function for average
const avg = (arr) => Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);

export default function Dashboard() {
  const total = students.length;
  const avgAttendance = avg(students.map((s) => s.attendance));
  const avgMarks = avg(students.map((s) => s.average));
  const top = [...students].sort((a, b) => b.average - a.average)[0];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-slate-700">Dashboard</h2>

     
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-slate-500">Total Students</p>
          <p className="text-3xl font-extrabold">{total}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-slate-500">Average Attendance</p>
          <p className="text-3xl font-extrabold">{avgAttendance}%</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-slate-500">Average Marks</p>
          <p className="text-3xl font-extrabold">{avgMarks}%</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-slate-500">Top Performer</p>
          <p className="text-lg font-bold">{top?.name}</p>
          <p className="text-sm text-slate-600">Average: {top?.average}%</p>
        </div>
      </div>

     
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Performance Summary</h3>
        <p className="text-slate-500">
          Charts and graphs will be displayed here (e.g., attendance trends,
          marks distribution). We’ll integrate this later.
        </p>
      </div>
    </div>
  );
}*/

/*import React from "react";
 // temporary data file
import { FaUsers, FaChartBar, FaBook, FaCrown } from "react-icons/fa";


export default function Dashboard() {
  const total = 4;
  const avgAttendance = 88;
  const avgMarks = 80;
  const top = { name: "Priya More", average: 92 };

  const card = "bg-white rounded-xl shadow p-4 flex items-center gap-4";

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className={card}>
          <FaUsers className="text-indigo-600 text-3xl" />
          <div>
            <p className="text-slate-500 text-sm">Total Students</p>
            <p className="text-3xl font-extrabold">{total}</p>
          </div>
        </div>

        <div className={card}>
          <FaBook className="text-green-600 text-3xl" />
          <div>
            <p className="text-slate-500 text-sm">Average Attendance</p>
            <p className="text-3xl font-extrabold">{avgAttendance}%</p>
          </div>
        </div>

        <div className={card}>
          <FaChartBar className="text-orange-600 text-3xl" />
          <div>
            <p className="text-slate-500 text-sm">Average Marks</p>
            <p className="text-3xl font-extrabold">{avgMarks}%</p>
          </div>
        </div>

        <div className={card}>
          <FaCrown className="text-yellow-500 text-3xl" />
          <div>
            <p className="text-slate-500 text-sm">Top Performer</p>
            <p className="text-lg font-bold">{top.name}</p>
            <p className="text-sm text-slate-600">Average: {top.average}%</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-semibold mb-2">Performance Summary</h3>
        <p className="text-slate-500 text-sm">
          Charts and graphs will be displayed here (e.g., attendance trends, marks distribution). We’ll integrate this later.
        </p>
      </div>
    </div>
  );
}*/

import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, Sneha 👋</h1>
        <p className="text-gray-600">Here’s a quick overview of student performance.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Total Students</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">120</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Avg Attendance</h2>
          <p className="text-4xl font-bold text-green-600 mt-2">92%</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Performance Alerts</h2>
          <p className="text-4xl font-bold text-red-600 mt-2">5</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Grades Over Time</h2>
          <div className="h-64 flex items-center justify-center text-gray-400">
            {/* Replace with Chart component */}
            [Chart Placeholder]
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Attendance Trends</h2>
          <div className="h-64 flex items-center justify-center text-gray-400">
            {/* Replace with Chart component */}
            [Chart Placeholder]
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-gray-600">
          <li>📌 John Doe’s math score dropped below 60%</li>
          <li>✅ New student added: Priya Sharma</li>
          <li>📈 Attendance improved for Class 10B</li>
        </ul>
      </div>
    </div>
  );
}

