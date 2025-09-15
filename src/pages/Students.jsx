import React, { useState, useContext } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { SearchContext } from "../context/SearchContext";

const initialStudents = [
  { id: 101, name: "Sneha Patil", grade: "A", address: "Pune", contact: "9876543210" },
  { id: 102, name: "Rohan Deshmukh", grade: "B", address: "Mumbai", contact: "9123456780" },
  { id: 103, name: "Meera Kulkarni", grade: "A+", address: "Nashik", contact: "9988776655" },
  { id: 104, name: "Aditya Joshi", grade: "B+", address: "Nagpur", contact: "9871234560" },
  { id: 105, name: "Tanvi Shah", grade: "A", address: "Thane", contact: "9765432109" },
  { id: 106, name: "Karan Mehta", grade: "C", address: "Ahmedabad", contact: "9345678901" },
  { id: 107, name: "Isha Nair", grade: "A+", address: "Bangalore", contact: "9001234567" },
  { id: 108, name: "Arjun Verma", grade: "B", address: "Indore", contact: "9321654780" },
  { id: 109, name: "Neha Rane", grade: "A", address: "Kolhapur", contact: "9876541230" },
  { id: 110, name: "Siddharth Pawar", grade: "C+", address: "Solapur", contact: "9012345678" },
];


export default function Students() {
  const [students, setStudents] = useState(initialStudents);
  const [showForm, setShowForm] = useState(false);
  const { searchTerm } = useContext(SearchContext); // ✅ Global searchTerm from Navbar

  const handleAddStudent = (newStudent) => {
    const newId = students.length + 1;
    setStudents([...students, { id: newId, ...newStudent }]);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      setStudents(students.filter((student) => student.id !== id));
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">👨‍🎓 Students</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          <span>Add Student</span>
        </button>
      </div>

      {/* Add Student Form */}
      {showForm && (
        <AddStudentForm onSubmit={handleAddStudent} />
      )}

      {/* Student Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Id</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Grade</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Contact</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className="border-t">
                  <td className="px-4 py-2">{student.id}</td>
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.grade}</td>
                  <td className="px-4 py-2">{student.address || "—"}</td>
                  <td className="px-4 py-2">{student.contact || "—"}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}