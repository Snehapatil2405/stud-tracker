export default function AdminTeachers() {
  const teachers = [
    {
      name: "Prof. Kulkarni",
      subject: "Database Management",
      email: "kulkarni@example.com",
      status: "Active",
    },
    {
      name: "Prof. Joshi",
      subject: "Computer Networks",
      email: "joshi@example.com",
      status: "Inactive",
    },
    {
      name: "Prof. Deshmukh",
      subject: "Operating Systems",
      email: "deshmukh@example.com",
      status: "Active",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-indigo-700">Teacher List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Subject</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-indigo-50 transition`}
              >
                <td className="px-4 py-2 font-medium text-gray-800">
                  {teacher.name}
                </td>
                <td className="px-4 py-2 text-gray-600">{teacher.subject}</td>
                <td className="px-4 py-2 text-gray-600">{teacher.email}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    teacher.status === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {teacher.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}