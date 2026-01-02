import { useState } from "react";

export default function ClassSubjectForm({ onSubmit }) {
  const [className, setClassName] = useState("");
  const [subjectName, setSubjectName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!className || !subjectName) {
      alert("Please fill both fields!");
      return;
    }
    onSubmit({ className, subjectName });
    setClassName("");
    setSubjectName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 space-y-4 max-w-md"
    >
      <h2 className="text-lg font-bold text-indigo-700">Add Class & Subject</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Class Name
        </label>
        <input
          type="text"
          placeholder="Enter Class (e.g. FYBCA)"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subject Name
        </label>
        <input
          type="text"
          placeholder="Enter Subject (e.g. DBMS)"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
      >
        Save
      </button>
    </form>
  );
}