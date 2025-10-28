import React from "react";

export default function AttendanceWidget() {
  const summary = {
    present: 8,
    absent: 2,
    late: 1,
  };

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-green-700 mb-2">🟢 Attendance Summary</h3>
      <ul className="space-y-1 text-sm text-gray-700">
        <li>✅ Present: {summary.present}</li>
        <li>❌ Absent: {summary.absent}</li>
        <li>⏰ Late: {summary.late}</li>
      </ul>
    </div>
  );
}