export default function AdminAnalytics() {
  const analytics = [
    {
      title: "Student Attendance",
      value: "85%",
      color: "bg-green-500",
    },
    {
      title: "Teacher Engagement",
      value: "72%",
      color: "bg-indigo-500",
    },
    {
      title: "Notice Reach",
      value: "90%",
      color: "bg-yellow-500",
    },
    {
      title: "Feedback Response Rate",
      value: "65%",
      color: "bg-pink-500",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-indigo-700">Analytics Overview</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {analytics.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-2xl font-bold mb-4">{item.value}</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`${item.color} h-3 rounded-full`}
                style={{ width: item.value }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra section: Recent Trends */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-indigo-700 mb-4">Recent Trends</h3>
        <ul className="space-y-3">
          <li className="text-gray-700">📈 Attendance improved by 5% this month</li>
          <li className="text-gray-700">📊 Teacher engagement slightly dropped</li>
          <li className="text-gray-700">📢 Notices reached 90% of students</li>
          <li className="text-gray-700">💬 Feedback response rate needs improvement</li>
        </ul>
      </div>
    </div>
  );
}