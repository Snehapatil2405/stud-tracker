import React from "react";

export default function ExportButton() {
  const handleExport = () => {
    alert("Exporting student data... (CSV/PDF logic can be added here)");
  };

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm flex items-center justify-between">
      <h3 className="text-lg font-semibold text-yellow-700">📤 Export Data</h3>
      <button
        onClick={handleExport}
        className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition"
      >
        Export
      </button>
    </div>
  );
}