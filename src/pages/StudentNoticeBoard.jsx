import React, { useState, useEffect } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // backend URL placeholder

export default function StudentNoticeBoard() {
  const [globalNotices, setGlobalNotices] = useState([]);
  const [classNotices, setClassNotices] = useState([]);

  // ✅ Assume student class stored in localStorage
  const studentClass = localStorage.getItem("studentClass") || "FYBCA";

  useEffect(() => {
    // Dummy data (later backend connect करायचं)
    setGlobalNotices([
      { id: 1, subject: "Holiday", teacher: "Admin", date: "28 Dec 2025", message: "College will remain closed tomorrow." },
      { id: 2, subject: "Exam Schedule", teacher: "Exam Dept", date: "30 Dec 2025", message: "Midterm exams start from 5 Jan." },
    ]);

    setClassNotices([
      { id: 101, subject: "Assignment", class: "FYBCA", teacher: "Prof. Sneha", date: "28 Dec 2025", message: "Submit Assignment 2 by Friday." },
      { id: 102, subject: "Lab Notice", class: "SYBCA", teacher: "Prof. Meera", date: "29 Dec 2025", message: "Lab session rescheduled to 2 PM." },
    ]);

    socket.on("newNotice", (notice) => {
      if (notice.type === "global") {
        setGlobalNotices((prev) => [notice, ...prev]);
        toast.info(`📢 New Global Notice: ${notice.subject}`);
      } else {
        // फक्त studentClass match झालं तरच दाखव
        if (notice.class === studentClass) {
          setClassNotices((prev) => [notice, ...prev]);
          toast.info(`📢 New Class Notice: ${notice.subject}`);
        }
      }
    });

    return () => {
      socket.off("newNotice");
    };
  }, [studentClass]);

  const handleFeedback = (id, type, feedback) => {
    toast.success(`Feedback (${feedback}) submitted for ${type} notice #${id}`);
    socket.emit("newFeedback", { noticeId: id, type, feedback });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="text-2xl font-bold text-indigo-700 mb-6">📢 Student Notice Board</h2>

      {/* Global Notices */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">🌍 Global Notices</h3>
        <div className="grid gap-4">
          {globalNotices.map((notice) => (
            <div key={notice.id} className="bg-white p-5 rounded-xl shadow-md">
              <p className="font-semibold text-gray-900">{notice.subject}</p>
              <p className="text-sm text-gray-700">By: {notice.teacher} | Date: {notice.date}</p>
              <p className="mt-2 text-gray-800 text-sm">{notice.message}</p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => handleFeedback(notice.id, "global", "👍")}
                  className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600"
                >
                  <FaThumbsUp /> 
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Class Notices (filtered by studentClass) */}
      <div>
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">📚 Notices for {studentClass}</h3>
        <div className="grid gap-4">
          {classNotices
            .filter((notice) => notice.class === studentClass) // ✅ फक्त त्या class चे
            .map((notice) => (
              <div key={notice.id} className="bg-indigo-50 p-5 rounded-xl shadow-md">
                <p className="font-semibold text-gray-900">{notice.subject}</p>
                <p className="text-sm text-gray-700">
                  Class: {notice.class} | Teacher: {notice.teacher} | Date: {notice.date}
                </p>
                <p className="mt-2 text-gray-800 text-sm">{notice.message}</p>
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => handleFeedback(notice.id, "class", "👍")}
                    className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600"
                  >
                    <FaThumbsUp /> 
                  </button>
                  
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}