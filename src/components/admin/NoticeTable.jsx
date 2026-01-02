export default function NoticeTable({ notices }) {
  return (
    <table className="w-full text-sm text-left border rounded-lg overflow-hidden shadow">
      <thead className="bg-yellow-100">
        <tr>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Type</th>
          <th className="px-4 py-2">Author</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Feedback</th>
        </tr>
      </thead>
      <tbody>
        {notices.map((n, idx) => (
          <tr key={idx} className="border-t hover:bg-gray-50">
            <td className="px-4 py-2">{n.title}</td>
            <td className="px-4 py-2">{n.type}</td>
            <td className="px-4 py-2">{n.author}</td>
            <td className="px-4 py-2">{n.date}</td>
            <td className="px-4 py-2">{n.feedback}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}