import React, { useState, useEffect } from "react";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  // Teacher Profile localStorage मधून घेणे
  const [teacherProfile, setTeacherProfile] = useState(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem("teacherProfile");
    if (savedProfile) {
      setTeacherProfile(JSON.parse(savedProfile));
    }
  }, []);

  // Dummy class data
  const classData = {
    class1: {
      students: 10,
      present: 8,
      absent: 2,
      performance: {
        averageMarks: 86,
        topPerformers: ["Sneha Patil", "Meera Kulkarni", "Isha Nair"],
        high: 5,
        medium: 2,
        low: 3,
      },
    },
    class2: {
      students: 25,
      present: 20,
      absent: 5,
      performance: {
        averageMarks: 78,
        topPerformers: ["Ravi Deshmukh", "Aarti Joshi"],
        high: 10,
        medium: 10,
        low: 5,
      },
    },
    class3: {
      students: 25,
      present: 10,
      absent: 15,
      performance: {
        averageMarks: 65,
        topPerformers: ["Neha Sharma"],
        high: 5,
        medium: 10,
        low: 10,
      },
    },
  };

  const [selectedClass, setSelectedClass] = useState("class1");

  const selected = classData[selectedClass] || {};
  const {
    students = 0,
    present = 0,
    absent = 0,
    performance: {
      averageMarks: _averageMarks = 0,
      topPerformers: _topPerformers = [],
      high = 0,
      medium = 0,
      low = 0,
    } = {},
  } = selected;

  const presentPercent = ((present / students) * 100).toFixed(1);
  const absentPercent = ((absent / students) * 100).toFixed(1);

  const pieData = [
    { name: "Present", value: Number(present) },
    { name: "Absent", value: Number(absent) },
  ];

  const barData = [
    { name: "High", value: Number(high) },
    { name: "Medium", value: Number(medium) },
    { name: "Low", value: Number(low) },
  ];

  const COLORS = ["#4CAF50", "#F44336", "#2196F3"];

  // Notifications State
  const [events, setEvents] = useState([
    { id: 1, title: "Midterm Exam", date: "2025-09-20", type: "Exam" },
    { id: 2, title: "Parent Meeting", date: "2025-09-25", type: "Meeting" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", type: "", message: "" });

  // Add or Update
  const handleSave = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.type) {
      alert("Please fill all fields!");
      return;
    }
    if (editId) {
      setEvents(events.map(ev => ev.id === editId ? { ...newEvent, id: editId } : ev));
      setEditId(null);
    } else {
      setEvents([...events, { ...newEvent, id: Date.now() }]);
    }
    setNewEvent({ title: "", date: "", type: "", message: "" });
    setShowForm(false);
  };

  // Edit
  const handleEdit = (event) => {
    setNewEvent({ title: event.title, date: event.date, type: event.type, message: event.message || "" });
    setEditId(event.id);
    setShowForm(true);
  };

  // Delete
  const handleDelete = (id) => {
    setEvents(events.filter(ev => ev.id !== id));
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-slate-100 to-indigo-50 min-h-screen text-[16px]">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">📊 Teacher Dashboard</h2>

      {/* Filters */}
      <div className="flex justify-end gap-4 mb-6 flex-wrap">
        <select
          className="border px-3 py-1.5 rounded-md shadow-sm text-sm"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="class1">BCA 1</option>
          <option value="class2">BCA 2</option>
          <option value="class3">BCA 3</option>
        </select>

        <input
          type="date"
          className="border px-3 py-1.5 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 text-sm"
          defaultValue={new Date().toISOString().split("T")[0]}
        />
      </div>

      {/* Teacher Profile Section */}
      {teacherProfile ? (
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
          <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center gap-2">
            👩‍🏫 Teacher Profile
          </h3>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={teacherProfile.avatar || "/Avtar.png"}
              alt="Avatar"
              className="w-20 h-20 rounded-full object-cover shadow"
            />
            <div className="space-y-1 text-gray-700 text-sm">
              <p><span className="font-semibold">Name:</span> {teacherProfile.name}</p>
              <p><span className="font-semibold">Email:</span> {teacherProfile.email}</p>
              <p><span className="font-semibold">Mobile:</span> {teacherProfile.mobile}</p>
              <p><span className="font-semibold">Subject:</span> {teacherProfile.subject}</p>
              <p><span className="font-semibold">Classes:</span> {teacherProfile.classes?.join(", ")}</p>
              <p><span className="font-semibold">Bio:</span> {teacherProfile.bio}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">No teacher profile found. Please fill settings.</p>
      )}

      

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-700 text-sm">Total Students</h3>
          <p className="text-xl font-bold text-blue-800">{students}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-700 text-sm">Present</h3>
          <p className="text-xl font-bold text-green-800">{presentPercent}%</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-700 text-sm">Absent</h3>
          <p className="text-xl font-bold text-red-800">{absentPercent}%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Monthly Attendance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={90} label>
                <Cell fill="#4CAF50" />
                <Cell fill="#F44336" />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Student Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value">
                {barData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
              <Legend />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 mt-2">
            Average Marks: {_averageMarks}
          </p>
          <p className="text-sm text-gray-600">
            Top Performers: {_topPerformers.join(", ")}
          </p>
        </div>
      </div>

      {/* Global Notifications */}
      <div className="bg-white p-4 rounded-xl shadow-sm mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-indigo-700">📢 Global Notifications</h3>
          <button
            onClick={() => { setShowForm(true); setEditId(null); }}
            className="bg-indigo-600 text-white px-3 py-1.5 rounded-md shadow-sm hover:bg-indigo-700 text-sm"
          >
            + Add
          </button>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="mb-4 space-y-2">
            <input
              type="text"
              placeholder="Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="border px-3 py-2 rounded-md w-full text-sm"
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              className="border px-3 py-2 rounded-md w-full text-sm"
            />
            <input
              type="text"
              placeholder="Type (Exam/Meeting/Holiday)"
              value={newEvent.type}
              onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
              className="border px-3 py-2 rounded-md w-full text-sm"
            />
            <textarea
              placeholder="Write detailed message (optional)"
              value={newEvent.message}
              onChange={(e) => setNewEvent({ ...newEvent, message: e.target.value })}
              className="border px-3 py-2 rounded-md w-full h-20 resize-none text-sm"
            />
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 text-sm"
            >
              {editId ? "Update" : "Save"}
            </button>
          </div>
        )}

        {/* Notification List */}
        <ul className="space-y-3">
          {events.map((event) => (
            <li
              key={event.id}
              className="flex flex-col bg-indigo-50 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{event.title}</p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      event.type === "Exam"
                        ? "bg-red-100 text-red-700"
                        : event.type === "Holiday"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {event.type}
                  </span>
                </div>
                <span className="text-xs font-medium text-indigo-700">{event.date}</span>
              </div>
              {event.message && (
                <p className="mt-1 text-gray-700 text-xs">{event.message}</p>
              )}
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => handleEdit(event)}
                  className="text-blue-600 hover:underline text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="text-red-600 hover:underline text-xs"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

           