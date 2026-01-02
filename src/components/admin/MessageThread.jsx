export default function MessageThread({ thread }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 space-y-3">
      <h2 className="text-lg font-bold">Conversation</h2>
      {thread.map((msg, idx) => (
        <div key={idx} className={`p-3 rounded-lg ${msg.sender === "admin" ? "bg-indigo-100 text-right" : "bg-gray-100 text-left"}`}>
          <p className="text-sm">{msg.text}</p>
          <span className="text-xs text-gray-500">{msg.time}</span>
        </div>
      ))}
    </div>
  );
}