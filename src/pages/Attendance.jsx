import React, { useState, useEffect } from "react";

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

      {/* Month Selector */}
      <div className="flex items-center gap-4 mb-4">
        <label className="text-gray-700 font-medium">Select Month:</label>
        <input
          type="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Attendance Table */}
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

      {/* Toast Message */}
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in-out z-50">
          {toastMessage}
        </div>
      )}
    </div>
  );
}