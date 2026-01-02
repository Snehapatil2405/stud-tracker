// TestNoticeBoard.jsx
import React, { useState, useEffect } from "react";
import { FaBell, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
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
    message: "",
    teacher: "Prof. Sneha Kulkarni",
    class: "FYBCA",
  });
  const [acknowledged, setAcknowledged] = useState([]);
  const [replies, setReplies] = useState({}); // { noticeId: [{student, reply, feedback}] }

  useEffect(() => {
    // Fetch notices
    fetch("http://localhost:5000/api/notices")
      .then((res) => res.json())
      .then((data) => {
        const normalized = Array.isArray(data)
          ? data.map((n) => ({ ...n, id: n.id || n._id }))
          : [];
        setNotices(normalized);
      })
     .catch((err) => toast.error(`Failed to fetch notices: ${err?.message || err}`));
    
     // Socket listeners
    socket.on("newNotice", (notice) => {
      const n = { ...notice, id: notice.id || notice._id };
      setNotices((prev) => [n, ...prev]);
      toast.info(`New Notice: ${n.subject}`);
    });

    socket.on("newReply", ({ noticeId, reply }) => {
      setReplies((prev) => ({
        ...prev,
        [noticeId]: [...(prev[noticeId] || []), reply],
      }));
      // Popup for teacher
      toast.info(`📩 Reply from ${reply.student}: "${reply.reply}" (${reply.feedback})`);
    });

    return () => {
      socket.off("newNotice");
      socket.off("newReply");
    };
  }, []);

  // Post new notice
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
      setNotices((prev) => [normalized, ...prev]);
      socket.emit("newNotice", normalized);
      setNewNotice({
        subject: "",
        date: "",
        marks: "",
        message: "",
        teacher: "Prof. Sneha Kulkarni",
        class: "FYBCA",
      });
      toast.success("Notice posted successfully!");
    } catch (err) {
      toast.error(`Failed to post notice: ${err?.message || err}`);
    }
  };

  // Acknowledge
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

  // Reply
  const handleReply = async (id, replyText, feedback) => {
    try {
      const reply = { student: "student001", reply: replyText, feedback };
      await fetch(`http://localhost:5000/api/notices/${id}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reply),
      });
      setReplies((prev) => ({
        ...prev,
        [id]: [...(prev[id] || []), reply],
      }));
      socket.emit("newReply", { noticeId: id, reply });
      toast.success("Reply submitted!");
    } catch (err) {
      toast.error(`Failed to reply: ${err?.message || err}`);
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
        <h3 className="text-lg font-semibold text-indigo-700 mb-3">📝 Post New Notice</h3>
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
          <textarea
            placeholder="Detailed message (optional)"
            value={newNotice.message}
            onChange={(e) => setNewNotice({ ...newNotice, message: e.target.value })}
            className="border px-3 py-2 rounded-md col-span-1 md:col-span-2 h-24 resize-none"
          />
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
                <p><strong>Subject:</strong> {notice.subject}</p>
                <p><strong>Date:</strong> {notice.date}</p>
                <p><strong>Marks:</strong> {notice.marks}</p>
                <p><strong>Class:</strong> {notice.class}</p>
                <p><strong>Teacher:</strong> {notice.teacher}</p>
              </div>

              {/* ✅ Show message */}
              {notice.message && (
                <p className="mt-2 text-gray-700 text-sm">{notice.message}</p>
              )}

              {/* Acknowledge */}
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

              {/* ✅ Replies Section */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-indigo-700">Replies:</h4>
                <ul className="space-y-2 mt-2">
                  {(replies[notice.id] || []).map((r, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center bg-indigo-50 px-3 py-2 rounded-md text-sm"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{r.student}</p>
                        <p className="text-gray-700">{r.reply}</p>
                      </div>
                      <span>{r.feedback}</span>
                    </li>
                  ))}
                </ul>

                {/* Reply Form */}
                <div className="mt-3 flex gap-2">
                  <input
                    type="text"
                    placeholder="Write a reply..."
                    className="border px-2 py-1 rounded-md flex-1 text-sm"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value.trim()) {
                        handleReply(notice.id, e.target.value, "👍");
                        e.target.value = "";
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      const input = document.querySelector(`#reply-${notice.id}`);
                      if (input && input.value.trim()) {
                        handleReply(notice.id, input.value, "👍");
                        input.value = "";
                      }
                    }}
                    id={`reply-${notice.id}`}
                    className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700"
                  >
                    Reply
                  </button>
                  <button
                    onClick={() => handleReply(notice.id, "Noted", "👎")}
                    className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
                  >
                    Disagree
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}