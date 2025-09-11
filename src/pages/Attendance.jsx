/*import React, { useState } from "react";
import { students } from "../data"; // student data import केलेलं आहे असा assumption

export default function Attendance() {
  const [date, setDate] = useState("");
  const [records, setRecords] = useState(
    students.map((s) => ({ ...s, present: false }))
  );

  const toggleAttendance = (roll) => {
    setRecords((prev) =>
      prev.map((rec) =>
        rec.roll === roll ? { ...rec, present: !rec.present } : rec
      )
    );
  };

  const saveAttendance = () => {
    alert(`Attendance saved for ${date} (Backend connect करायचं आहे).`);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-slate-700">Attendance</h2>

      
      <div className="flex items-center gap-4 max-w-md">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={saveAttendance}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Save
        </button>
      </div>

      
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full border-collapse">
          <thead className="bg-slate-100 text-slate-600 text-sm">
            <tr>
              <th className="text-left p-3">Roll No</th>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {records.map((rec, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{rec.roll}</td>
                <td className="p-3">{rec.name}</td>
                <td className="p-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={rec.present}
                      onChange={() => toggleAttendance(rec.roll)}
                      className="w-4 h-4 accent-indigo-600"
                    />
                    {rec.present ? "Present" : "Absent"}
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}*/

import React, { useState } from 'react';

const initialStudents = [
  { id: 1, name: 'John Doe', class: '10A', present: false },
  { id: 2, name: 'Priya Sharma', class: '9B', present: false },
  { id: 3, name: 'Amit Verma', class: '10A', present: false },
  { id: 4, name: 'Sara Khan', class: '8C', present: false },
];

export default function Attendance() {
  const [students, setStudents] = useState(initialStudents);

  const toggleAttendance = (id) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send attendance data to backend
    console.log('Attendance submitted:', students);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Mark Attendance</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
        <table className="min-w-full divide-y divide-gray-200 mb-6">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Class</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Present</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-800">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{student.class}</td>
                <td className="px-6 py-4 text-center">
                  <input
                    type="checkbox"
                    checked={student.present}
                    onChange={() => toggleAttendance(student.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Submit Attendance
        </button>
      </form>
    </div>
  );
}
