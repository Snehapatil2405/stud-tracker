export default function AdminClasses() {
  const classes = [
    {
      name: "FYBCA",
      year: "First Year",
      strength: 60,
      status: "Active",
    },
    {
      name: "SYBCA",
      year: "Second Year",
      strength: 55,
      status: "Active",
    },
    {
      name: "TYBCA",
      year: "Third Year",
      strength: 50,
      status: "Inactive",
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-indigo-700">Class Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Class Name</th>
              <th className="px-4 py-2 text-left">Year</th>
              <th className="px-4 py-2 text-left">Strength</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-indigo-50 transition`}
              >
                <td className="px-4 py-2 font-medium text-gray-800">{cls.name}</td>
                <td className="px-4 py-2 text-gray-600">{cls.year}</td>
                <td className="px-4 py-2 text-gray-600">{cls.strength}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    cls.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {cls.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}