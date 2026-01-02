import KpiCard from "../../components/admin/KpiCard";

export default function AdminDashboard() {
  const kpis = [
    { title: "Active Students", value: 128, color: "bg-indigo-600" },
    { title: "Active Teachers", value: 14, color: "bg-green-600" },
    { title: "Notices Posted", value: 32, color: "bg-yellow-500" },
    { title: "Feedback Received", value: 214, color: "bg-pink-500" },
  ];

  return (
    <>
      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {kpis.map((kpi, idx) => (
          <KpiCard key={idx} {...kpi} />
        ))}
      </div>

      {/* Recent Notices */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4 text-indigo-700">Recent Notices</h2>
        <ul className="space-y-3">
          <li className="bg-white shadow rounded-lg p-4">
            Holiday Announced – Global Notice
          </li>
          <li className="bg-white shadow rounded-lg p-4">
            Lab Rescheduled – Class Notice
          </li>
          <li className="bg-white shadow rounded-lg p-4">
            Exam Schedule Published – Global Notice
          </li>
        </ul>
      </div>

      {/* Recent Conversations */}
      <div>
        <h2 className="text-lg font-bold mb-4 text-indigo-700">Recent Conversations</h2>
        <ul className="space-y-3">
          <li className="bg-white shadow rounded-lg p-4">
            Sneha Patil ↔ Prof. Kulkarni – "Doubt on DBMS assignment"
          </li>
          <li className="bg-white shadow rounded-lg p-4">
            Rahul Jadhav ↔ Prof. Joshi – "Need help with networking project"
          </li>
        </ul>
      </div>
    </>
  );
}