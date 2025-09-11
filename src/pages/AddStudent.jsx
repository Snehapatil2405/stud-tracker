/*import React, { useState } from "react";

export default function AddStudent() {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    attendance: "",
    average: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Student added! (Backend integration needed)");
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-slate-700">Add Student</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg bg-white rounded-xl shadow p-6 space-y-4"
      >
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Roll No</label>
          <input
            type="text"
            name="roll"
            value={form.roll}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Attendance (%)</label>
          <input
            type="number"
            name="attendance"
            value={form.attendance}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Average Marks (%)</label>
          <input
            type="number"
            name="average"
            value={form.average}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}
*/

import React, { useState } from 'react';

export default function AddStudent() {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    attendance: '',
    grade: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send formData to backend API
    console.log('Student added:', formData);
    // Reset form
    setFormData({ name: '', class: '', attendance: '', grade: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Student</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 max-w-xl mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Class</label>
          <input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Attendance (%)</label>
          <input
            type="number"
            name="attendance"
            value={formData.attendance}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Grade</label>
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}