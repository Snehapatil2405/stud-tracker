export default function AdminSubjects() {
  const subjects = [
    {
      name: "Database Management Systems",
      code: "DBMS101",
      teacher: "Prof. Kulkarni",
      status: "Active",
    },
    {
      name: "Computer Networks",
      code: "CN202",
      teacher: "Prof. Joshi",
      status: "Active",
    },
    {
      name: "Operating Systems",
      code: "OS303",
      teacher: "Prof. Deshmukh",
      status: "Inactive",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-indigo-700">Subjects Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Subject Name</th>
              <th className="px-4 py-2 text-left">Code</th>
              <th className="px-4 py-2 text-left">Teacher</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subj, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-indigo-50 transition`}
              >
                <td className="px-4 py-2 font-medium text-gray-800">{subj.name}</td>
                <td className="px-4 py-2 text-gray-600">{subj.code}</td>
                <td className="px-4 py-2 text-gray-600">{subj.teacher}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    subj.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {subj.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}