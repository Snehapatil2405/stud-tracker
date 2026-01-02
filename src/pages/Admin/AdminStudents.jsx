import UserTable from "../../components/admin/UserTable";

export default function AdminStudents() {
  const students = [
    {
      name: "Sneha Patil",
      class: "FYBCA",
      email: "sneha@example.com",
      status: "Active",
    },
    {
      name: "Rahul Jadhav",
      class: "SYBCA",
      email: "rahul@example.com",
      status: "Inactive",
    },
    {
      name: "Aarti Deshmukh",
      class: "TYBCA",
      email: "aarti@example.com",
      status: "Active",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-indigo-700">Student List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Class</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-indigo-50 transition`}
              >
                <td className="px-4 py-2 font-medium text-gray-800">
                  {student.name}
                </td>
                <td className="px-4 py-2 text-gray-600">{student.class}</td>
                <td className="px-4 py-2 text-gray-600">{student.email}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    student.status === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {student.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}