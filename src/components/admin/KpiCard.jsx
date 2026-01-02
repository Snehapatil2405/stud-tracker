import React from "react";

export default function KpiCard({ title, value, color = "bg-indigo-600" }) {
  return (
    <div
      className={`rounded-lg shadow-md p-6 text-white flex flex-col items-start justify-center ${color}`}
    >
      <p className="text-sm uppercase font-semibold tracking-wide">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}