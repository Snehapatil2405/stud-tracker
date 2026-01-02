import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client";
import { FaEnvelope, FaUserTie, FaChalkboardTeacher, FaCommentDots } from "react-icons/fa";

const socket = io("http://localhost:5000"); // backend URL placeholder

export default function ContactTeacher() {
  const [form, setForm] = useState({
    subject: "",
    teacher: "",
    class: "",
    message: "",
  });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Dummy data (later backend connect करायचं)
    setMessages([
      {
        id: 1,
        subject: "Assignment Doubt",
        teacher: "Prof. Sneha Kulkarni",
        class: "FYBCA",
        message: "Can you explain Q3 of assignment?",
        date: "28 Dec 2025, 10:00 AM",
        status: "✅ Sent",
        reply: "Sure, I will explain in class tomorrow.",
      },
    ]);

    socket.on("teacherReply", (reply) => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === reply.messageId
            ? { ...msg, reply: reply.text, status: "💬 Reply" }
            : msg
        )
      );
      toast.info(`💬 Reply from ${reply.teacher}`);
    });

    socket.on("messageSeen", ({ messageId, teacher }) => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId ? { ...msg, status: "👀 Seen" } : msg
        )
      );
      toast.success(`👀 ${teacher} has seen your message`);
    });

    return () => {
      socket.off("teacherReply");
      socket.off("messageSeen");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.subject || !form.teacher || !form.class || !form.message) {
      toast.error("Please fill all fields!");
      return;
    }

    const newMsg = {
      ...form,
      id: Date.now(),
      date: new Date().toLocaleString(),
      status: "✅ Sent",
    };

    setMessages((prev) => [newMsg, ...prev]);
    toast.success("Message sent successfully!");
    socket.emit("newMessage", newMsg);
    setForm({ subject: "", teacher: "", class: "", message: "" });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="text-2xl font-bold text-indigo-700 mb-6">📩 Contact Teacher</h2>

      {/* Professional Form at Top */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg space-y-4 max-w-lg mx-auto mb-8 border border-indigo-100"
      >
        <h3 className="text-xl font-semibold text-indigo-700 flex items-center gap-2">
          <FaEnvelope /> New Message
        </h3>

        <div className="flex items-center gap-2">
          <FaEnvelope className="text-indigo-500" />
          <input
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="border px-3 py-2 rounded-md w-full text-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <FaUserTie className="text-indigo-500" />
          <input
            type="text"
            placeholder="Teacher Name"
            value={form.teacher}
            onChange={(e) => setForm({ ...form, teacher: e.target.value })}
            className="border px-3 py-2 rounded-md w-full text-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <FaChalkboardTeacher className="text-indigo-500" />
          <input
            type="text"
            placeholder="Class"
            value={form.class}
            onChange={(e) => setForm({ ...form, class: e.target.value })}
            className="border px-3 py-2 rounded-md w-full text-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-start gap-2">
          <FaCommentDots className="text-indigo-500 mt-2" />
          <textarea
            placeholder="Write your message..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="border px-3 py-2 rounded-md w-full h-28 resize-none text-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm w-full"
        >
          Send Message
        </button>
      </form>

      {/* Messages History */}
      <div>
        <h3 className="text-lg font-semibold text-indigo-700 mb-4">📜 Your Messages</h3>
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className="bg-indigo-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <p className="font-semibold text-gray-900">{msg.subject}</p>
              <p className="text-sm text-gray-700">
                To: {msg.teacher} | Class: {msg.class}
              </p>
              <p className="mt-1 text-gray-800 text-sm">{msg.message}</p>
              <p className="text-xs text-gray-500 mt-1">Sent: {msg.date}</p>
              <p className="text-xs mt-1">Status: {msg.status}</p>

              {msg.reply && (
                <div className="mt-2 bg-white p-2 rounded-md border text-sm">
                  <p className="font-medium text-indigo-700">Teacher Reply:</p>
                  <p className="text-gray-800">{msg.reply}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}