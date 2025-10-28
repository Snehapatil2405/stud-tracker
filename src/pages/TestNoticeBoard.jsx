// TestNoticeBoard.jsx
import React, { useState, useEffect } from "react";
import { FaBell, FaThumbsUp } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Replace with your backend URL

export default function TestNoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState({
    subject: "",
    date: "",
    marks: "",
    teacher: "Prof. Sneha Kulkarni",
    class: "FYBCA",
  });
  const [acknowledged, setAcknowledged] = useState([]);

  useEffect(() => {
    // fetch and normalize id (support id or _id)
    fetch("http://localhost:5000/api/notices")
      .then((res) => res.json())
      .then((data) => {
        const normalized = Array.isArray(data)
          ? data.map((n) => ({ ...n, id: n.id || n._id }))
          : [];
        setNotices(normalized);
      })
      .catch((err) => toast.error(`Failed to fetch notices: ${err?.message || err}`));

    socket.on("newNotice", (notice) => {
      const n = { ...notice, id: notice.id || notice._id };
      setNotices((prev) => [n, ...prev]);
      toast.info(`New Test Notice: ${n.subject}`);
    });

    return () => {
      socket.off("newNotice");
    };
  }, []);

  const handlePostNotice = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/notices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNotice),
      });
      const data = await res.json();
      const normalized = { ...data, id: data.id || data._id };
      // optimistic update (server or socket may also broadcast)
      setNotices((prev) => [normalized, ...prev]);
      socket.emit("newNotice", normalized);
      setNewNotice({
        subject: "",
        date: "",
        marks: "",
        teacher: "Prof. Sneha Kulkarni",
        class: "FYBCA",
      });
      toast.success("Notice posted successfully!");
    } catch (err) {
      toast.error(`Failed to post notice: ${err?.message || err}`);
    }
  };

  const handleAcknowledge = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/notices/${id}/acknowledge`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId: "student001" }),
      });
      setAcknowledged((prev) => [...prev, id]);
      toast.success("Acknowledged!");
    } catch (err) {
      toast.error(`Failed to acknowledge: ${err?.message || err}`);
    }
  };

  const unreadCount = notices.filter((n) => !acknowledged.includes(n.id)).length;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md space-y-5">
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-indigo-700">📢 Notice Board</h2>
        <div className="relative">
          <FaBell size={24} className="text-indigo-600" />
          {unreadCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
      </div>

      {/* Form */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-indigo-700 mb-3">📝 Post New Test Notice</h3>
        <form onSubmit={handlePostNotice} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Subject"
            value={newNotice.subject}
            onChange={(e) => setNewNotice({ ...newNotice, subject: e.target.value })}
            className="border px-3 py-2 rounded-md"
            required
          />
          <input
            type="date"
            value={newNotice.date}
            onChange={(e) => setNewNotice({ ...newNotice, date: e.target.value })}
            className="border px-3 py-2 rounded-md"
            required
          />
          <input
            type="number"
            placeholder="Total Marks"
            value={newNotice.marks}
            onChange={(e) => setNewNotice({ ...newNotice, marks: e.target.value })}
            className="border px-3 py-2 rounded-md"
            required
          />
          <select
            value={newNotice.class}
            onChange={(e) => setNewNotice({ ...newNotice, class: e.target.value })}
            className="border px-3 py-2 rounded-md"
          >
            <option value="FYBCA">FYBCA</option>
            <option value="SYBCA">SYBCA</option>
            <option value="TYBCA">TYBCA</option>
          </select>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition col-span-1 md:col-span-2"
          >
            Post Notice
          </button>
        </form>
      </div>

      {/* Notices */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">🔔 Recent Notices</h3>
        <div className="grid gap-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`p-4 rounded-lg shadow-sm border-l-4 ${
                acknowledged.includes(notice.id) ? "border-green-400" : "border-yellow-400"
              } bg-white`}
            >
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <p>
                  <strong>Subject:</strong> {notice.subject}
                </p>
                <p>
                  <strong>Date:</strong> {notice.date}
                </p>
                <p>
                  <strong>Marks:</strong> {notice.marks}
                </p>
                <p>
                  <strong>Class:</strong> {notice.class}
                </p>
                <p>
                  <strong>Teacher:</strong> {notice.teacher}
                </p>
              </div>
              {!acknowledged.includes(notice.id) ? (
                <button
                  onClick={() => handleAcknowledge(notice.id)}
                  className="mt-3 text-green-600 hover:text-green-800 flex items-center gap-2 text-sm"
                >
                  <FaThumbsUp /> Acknowledge
                </button>
              ) : (
                <p className="mt-3 text-sm text-gray-500">✅ Acknowledged</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
