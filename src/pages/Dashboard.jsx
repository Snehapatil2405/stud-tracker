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
     
      
    </div>
  );
}
