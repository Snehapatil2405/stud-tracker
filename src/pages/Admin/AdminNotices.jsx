export default function AdminNotices() {
  const notices = [
    {
      title: "Holiday Announced",
      type: "Global Notice",
      date: "01 Jan 2026",
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      title: "Lab Rescheduled",
      type: "Class Notice",
      date: "28 Dec 2025",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Exam Schedule Published",
      type: "Global Notice",
      date: "20 Dec 2025",
      color: "bg-green-100 text-green-700",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-indigo-700">Manage Notices</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notices.map((notice, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-lg shadow-md hover:shadow-lg transition ${notice.color}`}
          >
            <h3 className="text-lg font-semibold mb-2">{notice.title}</h3>
            <p className="text-sm mb-2">{notice.type}</p>
            <p className="text-xs text-gray-600">Date: {notice.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}