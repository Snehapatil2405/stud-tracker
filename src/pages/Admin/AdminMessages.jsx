export default function AdminMessages() {
  const messages = [
    {
      from: "Sneha Patil",
      to: "Prof. Kulkarni",
      text: "Doubt on DBMS assignment",
      date: "01 Jan 2026",
    },
    {
      from: "Rahul Jadhav",
      to: "Prof. Joshi",
      text: "Need help with networking project",
      date: "28 Dec 2025",
    },
    {
      from: "Aarti Deshmukh",
      to: "Prof. Deshmukh",
      text: "Clarification on OS lab",
      date: "27 Dec 2025",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-6 text-indigo-700">Recent Conversations</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {msg.from} ↔ {msg.to}
            </h3>
            <p className="text-sm text-gray-600 mb-2">"{msg.text}"</p>
            <p className="text-xs text-gray-500">Date: {msg.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}