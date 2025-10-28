import React from "react";

export default function PerformanceWidget() {
  const average = 86;
  const topStudents = ["Sneha Patil", "Meera Kulkarni", "Isha Nair"];

  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-indigo-700 mb-2">📈 Performance Overview</h3>
      <p className="text-sm text-gray-700 mb-2">Average Marks: <strong>{average}%</strong></p>
      <p className="text-sm text-gray-700">Top Performers:</p>
      <ul className="list-disc list-inside text-sm text-gray-600">
        {topStudents.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  );
}