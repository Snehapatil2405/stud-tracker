/*import React, { useState } from "react";
import { students } from "../data";

export default function Students() {
  const [search, setSearch] = useState("");

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-slate-700">Students</h2>

      
      <div className="flex items-center gap-2 max-w-sm">
        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full border-collapse">
          <thead className="bg-slate-100 text-slate-600 text-sm">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Attendance (%)</th>
              <th className="text-left p-3">Average Marks (%)</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.attendance}</td>
                <td className="p-3">{s.average}</td>
                <td className="p-3 space-x-2">
                  <button className="text-indigo-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="4" className="p-3 text-center text-slate-500">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}*/

import React from 'react';

const students = [
  { id: 1, name: 'John Doe', class: '10A', attendance: '95%', grade: 'A' },
  { id: 2, name: 'Priya Sharma', class: '9B', attendance: '88%', grade: 'B+' },
  { id: 3, name: 'Amit Verma', class: '10A', attendance: '92%', grade: 'A-' },
  { id: 4, name: 'Sara Khan', class: '8C', attendance: '97%', grade: 'A+' },
];

export default function Students() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Students</h1>

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Class</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Attendance</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Grade</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-800">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{student.class}</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600 font-medium">{student.attendance}</td>
                <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-medium">{student.grade}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium mr-4">View</button>
                  <button className="text-red-600 hover:text-red-800 font-medium">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
