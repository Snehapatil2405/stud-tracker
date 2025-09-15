

import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  // Dummy student data for different classes
  const classData = {
    class1: {
      students: 10,
      present: 6,
      absent: 4,
      performance: { high: 5, medium: 2, low: 3},
    },
    class2: {
      students: 25,
      present: 20,
      absent: 5,
      performance: { high: 5, medium: 15, low: 5 },
    },
    class3: {
      students: 25,
      present: 10,
      absent: 15,
      performance: { high: 10, medium: 10, low: 5 },
    },
  };

  const [selectedClass, setSelectedClass] = useState("class1");

  const { students, present, absent, performance } =
    classData[selectedClass] || {};

  const presentPercent = ((present / students) * 100).toFixed(1);
  const absentPercent = ((absent / students) * 100).toFixed(1);

  // Pie Chart Data
  const pieData = [
    { name: "Present", value: present },
    { name: "Absent", value: absent },
  ];

  // Bar Chart Data
  const barData = [
    { name: "High", value: performance.high },
    { name: "Medium", value: performance.medium },
    { name: "Low", value: performance.low },
  ];

  const COLORS = ["#4CAF50", "#F44336", "#2196F3"];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold mb-4">📊 Dashboard</h2>

      {/* Filters */}
      <div className="flex justify-end gap-4 mb-6">
        <select
          className="border px-3 py-2 rounded-lg"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="class1">BCA 1</option>
          <option value="class2">BCA 2</option>
          <option value="class3">BCA 3</option>
        </select>

        {/* Calendar Section */}
        
          <input
            type="date"
            className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={new Date().toISOString().split("T")[0]}
            onChange={(e) => console.log("Selected date:", e.target.value)}
          />
        
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold">Total Students</h3>
          <p className="text-2xl font-bold">{students}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold">Total Present</h3>
          <p className="text-2xl font-bold">{presentPercent}%</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow-md">
          <h3 className="font-semibold">Total Absent</h3>
          <p className="text-2xl font-bold">{absentPercent}%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Monthly Attendance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                label
              >
                <Cell fill="#4CAF50" />
                <Cell fill="#F44336" />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">
            Student Performance (Classwise)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
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
      {/* Alert Section – Students Needing Attention */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-semibold text-red-700 mb-4">
          🚨 Students Needing Attention
        </h3>
        <div className="space-y-4">
          {[
            {
              name: "Riya Patil",
              class: "BCA 3",
              attendance: "42%",
              performance: "Low",
              reason: "Poor attendance & low grades",
            },
            {
              name: "Amit Jadhav",
              class: "BCA 3",
              attendance: "48%",
              performance: "Medium",
              reason: "Attendance below threshold",
            },
            {
              name: "Snehal More",
              class: "BCA 2",
              attendance: "38%",
              performance: "Low",
              reason: "Consistently poor performance",
            },
          ].map((student, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-red-50 border border-red-200 rounded-md p-4 hover:shadow transition"
            >
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01M5.07 19h13.86a2 2 0 001.74-2.93L13.74 4.93a2 2 0 00-3.48 0L3.33 16.07A2 2 0 005.07 19z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-gray-700">
                    {student.name} ({student.class})
                  </p>
                  <p className="text-sm text-gray-600">
                    Attendance:{" "}
                    <span className="font-medium text-red-700">
                      {student.attendance}
                    </span>{" "}
                    | Performance:{" "}
                    <span className="font-medium text-blue-700">
                      {student.performance}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    Reason: {student.reason}
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10l1.5 1.5M21 10l-1.5 1.5M12 4v16"
                  />
                </svg>
                Send Reminder
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Export Section – PDF & CSV */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          📤 Export Summary
        </h3>
        <div className="flex gap-4">
          <button
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            onClick={() => alert("PDF Download triggered")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Download PDF
          </button>

          <button
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            onClick={() => alert("CSV Export triggered")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4h16v16H4V4z"
              />
            </svg>
            Export CSV
          </button>
        </div>
      </div>
    </div>
  );
}
