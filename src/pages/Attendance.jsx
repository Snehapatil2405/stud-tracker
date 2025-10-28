/*import React, { useState, useEffect } from "react";

// Dummy student data
const students = [
  { id: 1, name: "Rahul S" },
  { id: 2, name: "Harry Potter" },
  { id: 3, name: "John C" },
  { id: 4, name: "Amanda M. McGee" },
];

// Utility to get days in selected month
const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

export default function Attendance() {
  const [selectedMonth, setSelectedMonth] = useState("2024-05");
  const [attendanceData, setAttendanceData] = useState({});
  const [toastMessage, setToastMessage] = useState("");

  const year = parseInt(selectedMonth.split("-")[0]);
  const month = parseInt(selectedMonth.split("-")[1]);
  const daysInMonth = getDaysInMonth(year, month);

  const handleCheckboxChange = (studentId, day) => {
    const currentStatus = attendanceData[studentId]?.[day] || false;
    const newStatus = !currentStatus;

    setAttendanceData((prev) => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [day]: newStatus,
      },
    }));

    const studentName = students.find((s) => s.id === studentId)?.name || "Student";
    const message = newStatus
      ? `${studentName} is Present` 
      : `${studentName} is Absent` ;
    setToastMessage(message);
  };

  // Toast auto-hide after 2.5 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(""), 2500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="p-6 space-y-6 relative">
      <h2 className="text-2xl font-bold text-gray-800">📅 Attendance Tracker</h2>

      
      <div className="flex items-center gap-4 mb-4">
        <label className="text-gray-700 font-medium">Select Month:</label>
        <input
          type="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
        />
      </div>

      
      <div className="overflow-auto border rounded-lg shadow-md">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-sm text-gray-700 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              {[...Array(daysInMonth)].map((_, i) => (
                <th key={i + 1} className="px-2 py-2 text-center">
                  {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t text-sm">
                <td className="px-4 py-2">{student.id}</td>
                <td className="px-4 py-2">{student.name}</td>
                {[...Array(daysInMonth)].map((_, i) => (
                  <td key={i + 1} className="px-2 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={attendanceData[student.id]?.[i + 1] || false}
                      onChange={() => handleCheckboxChange(student.id, i + 1)}
                      className="accent-blue-600"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in-out z-50">
          {toastMessage}
        </div>
      )}
    </div>
  );
}*/

import React, { useState, useEffect } from "react";

// 🎓 Dummy classwise student data (10 students per class)
const classData = {
  FYBCA: [
    { id: 1, name: "Rahul S" },
    { id: 2, name: "Sneha K" },
    { id: 3, name: "Amit R" },
    { id: 4, name: "Priya D" },
    { id: 5, name: "Kunal M" },
    { id: 6, name: "Neha J" },
    { id: 7, name: "Ravi T" },
    { id: 8, name: "Meera V" },
    { id: 9, name: "Siddharth P" },
    { id: 10, name: "Tanvi G" },
  ],
  SYBCA: [
    { id: 11, name: "John C" },
    { id: 12, name: "Amanda M" },
    { id: 13, name: "Harshad N" },
    { id: 14, name: "Pooja S" },
    { id: 15, name: "Nikhil B" },
    { id: 16, name: "Ritika Z" },
    { id: 17, name: "Omkar W" },
    { id: 18, name: "Shreya L" },
    { id: 19, name: "Manav K" },
    { id: 20, name: "Divya T" },
  ],
  TYBCA: [
    { id: 21, name: "Harry Potter" },
    { id: 22, name: "Hermione G" },
    { id: 23, name: "Ron W" },
    { id: 24, name: "Luna L" },
    { id: 25, name: "Draco M" },
    { id: 26, name: "Ginny W" },
    { id: 27, name: "Neville L" },
    { id: 28, name: "Cho C" },
    { id: 29, name: "Fred W" },
    { id: 30, name: "George W" },
  ],
};

// 📅 Utility functions
const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();
const getWeekday = (year, month, day) =>
  new Date(year, month - 1, day).toLocaleDateString("en-US", { weekday: "short" });

export default function Attendance() {
  const [selectedClass, setSelectedClass] = useState("FYBCA");
  const [selectedMonth, setSelectedMonth] = useState("2025-09");
  const [attendanceData, setAttendanceData] = useState({});
  const [toastMessage, setToastMessage] = useState("");

  const students = classData[selectedClass];
  const year = parseInt(selectedMonth.split("-")[0]);
  const month = parseInt(selectedMonth.split("-")[1]);
  const daysInMonth = getDaysInMonth(year, month);

  const handleCheckboxChange = (studentId, day) => {
    const currentStatus = attendanceData[studentId]?.[day] || false;
    const newStatus = !currentStatus;

    setAttendanceData((prev) => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [day]: newStatus,
      },
    }));

    const studentName = students.find((s) => s.id === studentId)?.name || "Student";
    const message = newStatus
      ? `${studentName} is Present on ${day}/${month}/${year}`
      : `${studentName} is Absent on ${day}/${month}/${year}`;
    setToastMessage(message);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(""), 2500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="p-6 space-y-6 relative">
      {/* 🧾 Header */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
          Class Attendance Tracker
        </h2>
        <p className="text-sm text-gray-500">
          Mark daily attendance for each student by class and month
        </p>
      </div>

      {/* 🔽 Class & Month Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-md border">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            {Object.keys(classData).map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Month</label>
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* 📊 Attendance Table */}
      <div className="overflow-auto mt-6 rounded-2xl border shadow-lg">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-indigo-50 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">ID</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const weekday = getWeekday(year, month, day);
                return (
                  <th key={day} className="px-2 py-2 text-center text-gray-600">
                    <div className="font-semibold">{day}</div>
                    <div className="text-xs text-gray-400">{weekday}</div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t hover:bg-gray-50 transition">
                <td className="px-4 py-2">{student.id}</td>
                <td className="px-4 py-2 font-medium text-gray-800">{student.name}</td>
                {[...Array(daysInMonth)].map((_, i) => {
                  const day = i + 1;
                  return (
                    <td key={day} className="px-2 py-2 text-center">
                      <input
                        type="checkbox"
                        checked={attendanceData[student.id]?.[day] || false}
                        onChange={() => handleCheckboxChange(student.id, day)}
                        className="accent-indigo-600 scale-110"
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔔 Toast Message */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-indigo-600 text-white px-5 py-3 rounded-xl shadow-xl transition-opacity duration-300 z-50">
          {toastMessage}
        </div>
      )}
    </div>
  );
}