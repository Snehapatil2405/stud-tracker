import React from "react";

const events = [
  { date: "2025-09-20", title: "Midterm Exam" },
  { date: "2025-09-25", title: "Parent Meeting" },
  { date: "2025-10-01", title: "Final Exam" },
];

export default function CalendarWidget() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mt-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">📅 Upcoming Events</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        {events.map((event, i) => (
          <li key={i} className="flex justify-between border-b pb-2">
            <span>{event.title}</span>
            <span className="text-gray-500">{event.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}