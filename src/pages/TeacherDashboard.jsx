

import React, { useState } from "react";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const classData = {
    class1: {
      students: 10,
      present: 8,
      absent: 2,
      
      performance: {
        averageMarks: 86,
        topPerformers: ["Sneha Patil", "Meera Kulkarni", "Isha Nair"],
        high: 5,
        medium: 2,
        low: 3,
      },
    },
    class2: {
      students: 25,
      present: 20,
      absent: 5,
      
      performance: {
        averageMarks: 78,
        topPerformers: ["Ravi Deshmukh", "Aarti Joshi"],
        high: 10,
        medium: 10,
        low: 5,
      },
    },
    class3: {
      students: 25,
      present: 10,
      absent: 15,
    
      performance: {
        averageMarks: 65,
        topPerformers: ["Neha Sharma"],
        high: 5,
        medium: 10,
        low: 10,
      },
    },
  };

  const [selectedClass, setSelectedClass] = useState("class1");

  const selected = classData[selectedClass] || {};
  const {
  students = 0,
  present = 0,
  absent = 0,
  
  performance: {
    averageMarks: _averageMarks = 0,
    topPerformers: _topPerformers = [],
    high = 0,
    medium = 0,
    low = 0,
  } = {},
} = selected;

  const presentPercent = ((present / students) * 100).toFixed(1);
  const absentPercent = ((absent / students) * 100).toFixed(1);

  const pieData = [
    { name: "Present", value: Number(present) },
    { name: "Absent", value: Number(absent) },
  ];

  const barData = [
    { name: "High", value: Number(high) },
    { name: "Medium", value: Number(medium) },
    { name: "Low", value: Number(low) },
  ];

  const COLORS = ["#4CAF50", "#F44336", "#2196F3"];

  const events = [
    { title: "Midterm Exam", date: "2025-09-20", type: "Exam" },
    { title: "Parent Meeting", date: "2025-09-25", type: "Meeting" },
    { title: "Final Exam", date: "2025-10-01", type: "Exam" },
  ];

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-slate-100 to-indigo-50 min-h-screen text-[17px]">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">📊 Teacher Dashboard</h2>

      {/* Filters */}
      <div className="flex justify-end gap-4 mb-6 flex-wrap">
        <select
          className="border px-4 py-2 rounded-lg shadow-sm"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="class1">BCA 1</option>
          <option value="class2">BCA 2</option>
          <option value="class3">BCA 3</option>
        </select>

        <input
          type="date"
          className="border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
          defaultValue={new Date().toISOString().split("T")[0]}
        />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-xl shadow-md">
          <h3 className="font-semibold text-gray-700">Total Students</h3>
          <p className="text-2xl font-bold text-blue-800">{students}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-xl shadow-md">
          <h3 className="font-semibold text-gray-700">Present</h3>
          <p className="text-2xl font-bold text-green-800">{presentPercent}%</p>
        </div>
        <div className="bg-red-100 p-4 rounded-xl shadow-md">
          <h3 className="font-semibold text-gray-700">Absent</h3>
          <p className="text-2xl font-bold text-red-800">{absentPercent}%</p>
        </div>
        
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Monthly Attendance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
                <Cell fill="#4CAF50" />
                <Cell fill="#F44336" />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Student Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value">
                {barData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white p-6 rounded-2xl shadow-md border space-y-6 mt-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 tracking-wide">Upcoming Events</h3>
          </div>

          <button
            onClick={() => alert("📤 Exporting event report...")}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4zm4 8h8m-4-4v8" />
            </svg>
            Export
          </button>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {events.map((event, index) => (
    <li
      key={index}
      className="flex justify-between items-center bg-indigo-50 px-4 py-3 rounded-lg hover:bg-indigo-100 transition"
    >
      <div>
        <p className="text-gray-800 font-medium">{event.title}</p>
        <p className="text-xs text-gray-500">{event.type}</p>
      </div>
      <span className="text-sm text-gray-600">{event.date}</span>
    </li>
  ))}
</ul>
      </div>
    </div>
);
}