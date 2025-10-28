import React, { useContext, useState } from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { SearchContext } from "../context/SearchContext";

const students = [
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

export default function StudentTable() {
  const { searchTerm } = useContext(SearchContext);
  const [studentList, setStudentList] = useState(students);

  const filteredStudents = studentList.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this student?");
    if (confirm) {
      setStudentList(studentList.filter((s) => s.id !== id));
    }
  };

  const handleEdit = (student) => {
    alert(`Edit student: ${student.name}`); // You can replace this with a modal or form
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-x-auto mt-6">
      <h2 className="text-xl font-semibold text-gray-800 px-6 py-4">📋 Student List</h2>
      <table className="min-w-full text-sm text-left">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Grade</th>
            <th className="px-4 py-3">Address</th>
            <th className="px-4 py-3">Contact</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id} className="border-b hover:bg-indigo-50 transition">
                <td className="px-4 py-2 font-medium text-gray-700">{student.id}</td>
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.grade}</td>
                <td className="px-4 py-2">{student.address}</td>
                <td className="px-4 py-2">{student.contact}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(student)}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    <PencilSquareIcon className="w-5 h-5" />
                  </button>
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
                No matching students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}